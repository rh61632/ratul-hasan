#!/usr/bin/env python3
"""Export VoC Soft-Voting Ensemble models & English lexicon for client-side JS inference.

Reads the trained scikit-learn pipelines from the sibling
`telecom-Voice-of-Customer_intelligence` repository and packs their TF-IDF
vocabularies, IDF vectors, calibrated linear classifier weights, and the
NLTK English lexicon (used by `ml/language_detector.py`) into a single
browser-ready JavaScript bundle (`assets/models/voc/voc_models_bundle.js`).

This allows GitHub Pages (including local `file://` inspection) to execute exact
Float32 client-side inference with zero backend server requirements.
"""

from __future__ import annotations

import argparse
import base64
import json
import struct
import warnings
from pathlib import Path

import joblib
import numpy as np

warnings.filterwarnings("ignore", category=UserWarning)

SCRIPT_DIR = Path(__file__).resolve().parent
SITE_ROOT = SCRIPT_DIR.parent
DEFAULT_VOC_REPO = SITE_ROOT.parent / "telecom-Voice-of-Customer_intelligence"
DEFAULT_OUTPUT = SITE_ROOT / "assets" / "models" / "voc" / "voc_models_bundle.js"


def pack_float32_arrays(arrays: list[np.ndarray]) -> tuple[str, list[dict]]:
    """Pack numpy arrays sequentially as little-endian Float32 into one Base64 blob."""
    chunks: list[bytes] = []
    specs: list[dict] = []
    byte_offset = 0
    for arr in arrays:
        f32 = np.ascontiguousarray(arr, dtype="<f4")
        raw = f32.tobytes()
        specs.append({
            "byteOffset": byte_offset,
            "length": int(f32.size),
            "shape": list(f32.shape),
        })
        chunks.append(raw)
        byte_offset += len(raw)
    blob = base64.b64encode(b"".join(chunks)).decode("ascii")
    return blob, specs


def vocab_to_ordered_list(vocab: dict[str, int]) -> list[str]:
    """Convert `{token: index}` mapping into an index-ordered list of tokens."""
    ordered = [""] * len(vocab)
    for token, idx in vocab.items():
        ordered[int(idx)] = token
    return ordered


def extract_voting_metadata(voting_clf, arrays: list[np.ndarray]) -> dict:
    """Extract linear weights/calibrations from a scikit-learn soft-voting classifier."""
    estimators_meta = []
    for name, est in voting_clf.named_estimators_.items():
        if hasattr(est, "calibrated_classifiers_"):
            folds = []
            for cc in est.calibrated_classifiers_:
                coef_idx = len(arrays)
                arrays.append(cc.estimator.coef_)
                intercept = np.asarray(cc.estimator.intercept_, dtype=np.float32).tolist()
                calibrators = [
                    {"a": float(cal.a_), "b": float(cal.b_)}
                    for cal in cc.calibrators
                ]
                folds.append({
                    "coefIndex": coef_idx,
                    "intercept": intercept,
                    "calibrators": calibrators,
                })
            estimators_meta.append({
                "name": name,
                "type": "calibrated_svc",
                "folds": folds,
            })
        elif hasattr(est, "coef_"):
            coef_idx = len(arrays)
            arrays.append(est.coef_)
            estimators_meta.append({
                "name": name,
                "type": "logistic",
                "coefIndex": coef_idx,
                "intercept": np.asarray(est.intercept_, dtype=np.float32).tolist(),
            })
        elif hasattr(est, "feature_log_prob_"):
            coef_idx = len(arrays)
            arrays.append(est.feature_log_prob_)
            estimators_meta.append({
                "name": name,
                "type": "complement_nb",
                "coefIndex": coef_idx,
            })
        else:
            raise TypeError(f"Unsupported estimator in VotingClassifier: {type(est).__name__}")

    return {
        "classes": [str(c) for c in voting_clf.classes_],
        "weights": [float(w) for w in voting_clf.weights],
        "estimators": estimators_meta,
    }


def encode_english_lexicon() -> str:
    """Front-code the sorted NLTK `words` corpus into compact prefix-delta text."""
    from nltk.corpus import words

    try:
        raw_words = sorted({w.lower() for w in words.words()})
    except LookupError:
        import nltk
        nltk.download("words", quiet=True)
        raw_words = sorted({w.lower() for w in words.words()})

    parts: list[str] = []
    prev = ""
    for w in raw_words:
        # Only lowercase ASCII letters and '-' appear in NLTK words; clamp prefix to 25 (A-Z).
        p = 0
        limit = min(len(prev), len(w), 25)
        while p < limit and prev[p] == w[p]:
            p += 1
        parts.append(chr(65 + p) + w[p:])
        prev = w
    return "".join(parts)


def export_bundle(voc_repo: Path, output_path: Path) -> None:
    sent_path = voc_repo / "ml" / "models" / "ensemble_voting_classifier.joblib"
    cat_path = voc_repo / "ml" / "models" / "category_voting_classifier.joblib"

    if not sent_path.exists():
        raise FileNotFoundError(f"Sentiment model not found: {sent_path}")
    if not cat_path.exists():
        raise FileNotFoundError(f"Category model not found: {cat_path}")

    print(f"Loading sentiment model: {sent_path}")
    sent_pipe = joblib.load(sent_path)
    print(f"Loading category model : {cat_path}")
    cat_pipe = joblib.load(cat_path)

    arrays: list[np.ndarray] = []

    # 1. Sentiment model (TfidfVectorizer char_wb + VotingClassifier)
    sent_tfidf = sent_pipe.named_steps["tfidf"]
    sent_idf_idx = len(arrays)
    arrays.append(sent_tfidf.idf_)
    sent_meta = {
        "vectorizer": {
            "kind": "single",
            "analyzer": sent_tfidf.analyzer,
            "ngramRange": list(sent_tfidf.ngram_range),
            "sublinearTf": bool(sent_tfidf.sublinear_tf),
            "lowercase": bool(sent_tfidf.lowercase),
            "vocab": vocab_to_ordered_list(sent_tfidf.vocabulary_),
            "idfIndex": sent_idf_idx,
        },
        "classifier": extract_voting_metadata(sent_pipe.named_steps["voting"], arrays),
    }

    # 2. Category model (FeatureUnion[word_tfidf, char_tfidf] + VotingClassifier)
    cat_union = cat_pipe.named_steps["features"]
    word_vec = cat_union.transformer_list[0][1]
    char_vec = cat_union.transformer_list[1][1]
    word_idf_idx = len(arrays)
    arrays.append(word_vec.idf_)
    char_idf_idx = len(arrays)
    arrays.append(char_vec.idf_)
    cat_meta = {
        "vectorizer": {
            "kind": "union",
            "word": {
                "analyzer": word_vec.analyzer,
                "ngramRange": list(word_vec.ngram_range),
                "sublinearTf": bool(word_vec.sublinear_tf),
                "lowercase": bool(word_vec.lowercase),
                "vocab": vocab_to_ordered_list(word_vec.vocabulary_),
                "idfIndex": word_idf_idx,
            },
            "char": {
                "analyzer": char_vec.analyzer,
                "ngramRange": list(char_vec.ngram_range),
                "sublinearTf": bool(char_vec.sublinear_tf),
                "lowercase": bool(char_vec.lowercase),
                "vocab": vocab_to_ordered_list(char_vec.vocabulary_),
                "idfIndex": char_idf_idx,
            },
        },
        "classifier": extract_voting_metadata(cat_pipe.named_steps["classifier"], arrays),
    }

    # 3. Pack Float32 tensors and front-coded English dictionary
    weights_b64, tensor_specs = pack_float32_arrays(arrays)
    print("Encoding NLTK English lexicon for LanguageClassifier...")
    english_lexicon = encode_english_lexicon()

    payload = {
        "version": "1.0.0",
        "format": "float32-le-base64",
        "tensorSpecs": tensor_specs,
        "weightsBase64": weights_b64,
        "sentiment": sent_meta,
        "category": cat_meta,
        "englishLexiconFrontCoded": english_lexicon,
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    js_content = (
        "// Auto-generated by scripts/export_voc_models.py — do not edit manually.\n"
        "window.__VOC_MODEL_BUNDLE__ = "
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n"
    )
    output_path.write_text(js_content, encoding="utf-8")
    size_mb = output_path.stat().st_size / (1024 * 1024)
    print(f"Wrote {output_path} ({size_mb:.2f} MB)")


def main() -> None:
    parser = argparse.ArgumentParser(description="Export VoC ML models to browser JS bundle")
    parser.add_argument("--voc-repo", type=Path, default=DEFAULT_VOC_REPO, help="Path to VoC project repository")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Output JS bundle path")
    args = parser.parse_args()
    export_bundle(args.voc_repo.resolve(), args.output.resolve())


if __name__ == "__main__":
    main()

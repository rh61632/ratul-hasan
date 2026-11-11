/**
 * Client-Side Voice-of-Customer (VoC) Inference & UI Controller
 *
 * Executes exact Float32 soft-voting ensemble inference (Logistic Regression +
 * Platt-calibrated LinearSVC + ComplementNB) and rule-based Bangla/Banglish/English
 * linguistic routing directly in the browser with zero backend dependencies.
 */
(function (global) {
  "use strict";

  const BUNDLE_SRC = "../assets/models/voc/voc_models_bundle.js";

  const BENGALI_UNICODE_RE = /[\u0980-\u09FF]/g;
  const LATIN_TOKEN_RE = /[a-zA-Z]+/g;
  const WORD_TOKEN_RE = /[\p{L}\p{N}_]{2,}/gu;

  const TELECOM_DOMAIN_VOCAB = new Set([
    "app", "apps", "sim", "sims", "mb", "gb", "kb", "4g", "3g", "2g", "5g",
    "net", "internet", "update", "updates", "updated", "updating", "wifi",
    "login", "logins", "log", "logged", "logging", "server", "servers",
    "offer", "offers", "offered", "offering", "service", "services", "servicing",
    "data", "pack", "packs", "package", "packages", "call", "calls", "called", "calling",
    "rate", "rates", "star", "stars", "version", "phone", "phones", "telecom",
    "balance", "recharge", "recharges", "recharged", "recharging", "account", "accounts",
    "customer", "customers", "care", "network", "networks", "networking", "connect",
    "connection", "connections", "connected", "connecting", "problem", "problems",
    "slow", "fast", "faster", "fastest", "good", "better", "best", "bad", "worse", "worst",
    "ok", "okay", "super", "poor", "useless", "nice", "nicer", "nicest", "waste", "cheat",
    "cheater", "cheaters", "cheating", "scam", "scams", "scammer", "issue", "issues",
    "fix", "fixes", "fixed", "fixing", "please", "thanks", "thank", "load", "loading",
    "bug", "bugs", "error", "errors", "solution", "solutions", "feature", "features",
    "money", "easy", "easier", "easiest", "helpful", "useful", "awesome", "love", "loved",
    "loving", "like", "liked", "likes", "liking", "fine", "working", "works", "worked",
    "open", "opening", "opened", "great", "excellent", "fantastic", "smooth", "smoother",
    "bangladesh", "bangladeshi", "robi", "grameenphone", "gp", "banglalink", "bl",
    "user", "users", "experience", "experienced", "experiences", "experiencing", "taka", "tk"
  ]);

  const BANGLISH_PHONETIC_MARKERS = new Set([
    "kore", "korche", "kora", "korbo", "korle", "korchen", "kortese", "kori", "korce",
    "bhalo", "kharap", "faltu", "ekdom", "kete", "nei", "ache", "nai", "hobe", "hoi",
    "hoche", "hocche", "asche", "jacche", "dibe", "diben", "din", "aro", "beshi", "kom",
    "onek", "valo", "khub", "sundor", "dekhi", "jani", "parchi", "parina", "hoyna",
    "bujhi", "amader", "tomader", "apnader", "ei", "oi", "shei", "keno", "kobe", "kothay",
    "kotuk", "shob", "sob", "shathe", "sathe", "ar", "akta", "ekta", "koekta", "protidin",
    "shobar", "sobar", "baje", "bal", "fuchka", "dekhte", "jay", "geche", "gache",
    "ashche", "parci", "dicche", "deyni", "deyna", "kisu", "kichu", "amake", "tomake",
    "onk", "besi", "beicha", "kina", "lagbo", "dewar", "jonno", "hoitay", "parto",
    "ager", "ceye", "dike", "hoito", "dam", "vaci", "tai", "puro", "dilam", "khali",
    "amar", "amr", "apnar", "tomar", "kemon", "acche", "korben", "bujina", "parlam",
    "dekha", "dekhe", "dekhlam", "thake", "thakle", "thakbe", "chai", "cai", "caile",
    "dibona", "dewa", "moto", "motun", "bujte", "buja", "lagbe", "hoy", "koren"
  ]);

  const OPERATIONAL_SUBSYSTEMS = {
    "App Login & Technical Bugs": {
      subsystem: "Frontend Software Engineering",
      detail: "Authentication timeouts, biometric failure, splash screen freeze, and app crash telemetry.",
      icon: "fa-bug"
    },
    "Network Speed & 4G Latency": {
      subsystem: "Core Telecommunications RAN",
      detail: "RF propagation, 4G/3G fallback drops, indoor signal attenuation, and packet buffering.",
      icon: "fa-tower-broadcast"
    },
    "Billing & Airtime Deductions": {
      subsystem: "Core Charging System (OCS)",
      detail: "Unexpected balance deductions, unauthorized VAS auto-renewals, and recharge reconciliation.",
      icon: "fa-receipt"
    },
    "Offers & Data Packs": {
      subsystem: "Commercial & Product Strategy",
      detail: "Data package pricing competitiveness, validity expiration rules, and promotional bundles.",
      icon: "fa-tags"
    },
    "General Appreciation / Other": {
      subsystem: "Baseline User Experience",
      detail: "General brand satisfaction, UI ergonomics praise, or non-specific service commentary.",
      icon: "fa-star"
    }
  };

  function decodeBase64ToFloat32Tensors(base64Str, specs) {
    const binStr = atob(base64Str);
    const bytes = new Uint8Array(binStr.length);
    for (let i = 0; i < binStr.length; i += 1) {
      bytes[i] = binStr.charCodeAt(i);
    }
    const buf = bytes.buffer;
    const isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;

    return specs.map((spec) => {
      if (isLittleEndian) {
        return new Float32Array(buf, spec.byteOffset, spec.length);
      }
      const dv = new DataView(buf, spec.byteOffset, spec.length * 4);
      const arr = new Float32Array(spec.length);
      for (let i = 0; i < spec.length; i += 1) {
        arr[i] = dv.getFloat32(i * 4, true);
      }
      return arr;
    });
  }

  function decodeFrontCodedWords(encoded) {
    const words = new Set();
    let prev = "";
    let i = 0;
    const len = encoded.length;
    while (i < len) {
      const prefixLen = encoded.charCodeAt(i) - 65;
      i += 1;
      const start = i;
      while (i < len) {
        const code = encoded.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          break;
        }
        i += 1;
      }
      const word = prev.slice(0, prefixLen) + encoded.slice(start, i);
      words.add(word);
      prev = word;
    }
    return words;
  }

  function buildVocabMap(vocabList) {
    const map = new Map();
    for (let i = 0; i < vocabList.length; i += 1) {
      map.set(vocabList[i], i);
    }
    return map;
  }

  function extractCharWbNgrams(text, minN, maxN) {
    const normalized = text.replace(/\s\s+/g, " ").trim();
    if (!normalized) return [];
    const words = normalized.split(/\s+/);
    const ngrams = [];
    for (let wIdx = 0; wIdx < words.length; wIdx += 1) {
      const chars = [" ", ...Array.from(words[wIdx]), " "];
      const wLen = chars.length;
      for (let n = minN; n <= maxN; n += 1) {
        let offset = 0;
        ngrams.push(chars.slice(offset, offset + n).join(""));
        while (offset + n < wLen) {
          offset += 1;
          ngrams.push(chars.slice(offset, offset + n).join(""));
        }
        if (offset === 0) {
          break;
        }
      }
    }
    return ngrams;
  }

  function extractCharNgrams(text, minN, maxN) {
    const normalized = text.replace(/\s\s+/g, " ");
    const chars = Array.from(normalized);
    const textLen = chars.length;
    const maxAllowed = Math.min(maxN, textLen);
    const ngrams = [];
    for (let n = minN; n <= maxAllowed; n += 1) {
      for (let i = 0; i <= textLen - n; i += 1) {
        ngrams.push(chars.slice(i, i + n).join(""));
      }
    }
    return ngrams;
  }

  function extractWordNgrams(text, minN, maxN) {
    const tokens = text.match(WORD_TOKEN_RE) || [];
    if (tokens.length === 0) return [];
    const ngrams = minN <= 1 ? tokens.slice() : [];
    for (let n = Math.max(2, minN); n <= maxN; n += 1) {
      for (let i = 0; i <= tokens.length - n; i += 1) {
        ngrams.push(tokens.slice(i, i + n).join(" "));
      }
    }
    return ngrams;
  }

  function extractNgrams(text, vecConfig) {
    const input = vecConfig.lowercase ? text.toLowerCase() : text;
    const [minN, maxN] = vecConfig.ngramRange;
    if (vecConfig.analyzer === "char_wb") {
      return extractCharWbNgrams(input, minN, maxN);
    }
    if (vecConfig.analyzer === "char") {
      return extractCharNgrams(input, minN, maxN);
    }
    return extractWordNgrams(input, minN, maxN);
  }

  function vectorizeSingle(text, vecMeta, tensors, indexOffset) {
    const ngrams = extractNgrams(text, vecMeta);
    const counts = new Map();
    const vocabMap = vecMeta.vocabMap;
    for (let i = 0; i < ngrams.length; i += 1) {
      const idx = vocabMap.get(ngrams[i]);
      if (idx !== undefined) {
        counts.set(idx, (counts.get(idx) || 0) + 1);
      }
    }
    if (counts.size === 0) return [];

    const idf = tensors[vecMeta.idfIndex];
    const entries = [];
    let sqNorm = 0;
    for (const [idx, tf] of counts.entries()) {
      const tfVal = vecMeta.sublinearTf ? 1 + Math.log(tf) : tf;
      const val = tfVal * idf[idx];
      entries.push([idx + indexOffset, val]);
      sqNorm += val * val;
    }

    const norm = Math.sqrt(sqNorm);
    if (norm > 0) {
      for (let i = 0; i < entries.length; i += 1) {
        entries[i][1] /= norm;
      }
    }
    return entries;
  }

  function vectorize(text, vectorizerMeta, tensors) {
    if (vectorizerMeta.kind === "single") {
      return {
        entries: vectorizeSingle(text, vectorizerMeta, tensors, 0),
        nFeatures: vectorizerMeta.vocab.length
      };
    }
    const wordEntries = vectorizeSingle(text, vectorizerMeta.word, tensors, 0);
    const wordSize = vectorizerMeta.word.vocab.length;
    const charEntries = vectorizeSingle(text, vectorizerMeta.char, tensors, wordSize);
    return {
      entries: wordEntries.concat(charEntries),
      nFeatures: wordSize + vectorizerMeta.char.vocab.length
    };
  }

  function sparseDot(entries, coefFlat, nFeatures, nClasses, intercept) {
    const out = new Float64Array(nClasses);
    if (intercept) {
      for (let c = 0; c < nClasses; c += 1) {
        out[c] = intercept[c];
      }
    }
    for (let i = 0; i < entries.length; i += 1) {
      const col = entries[i][0];
      const val = entries[i][1];
      for (let c = 0; c < nClasses; c += 1) {
        out[c] += val * coefFlat[c * nFeatures + col];
      }
    }
    return out;
  }

  function softmax(logits) {
    let maxVal = -Infinity;
    for (let i = 0; i < logits.length; i += 1) {
      if (logits[i] > maxVal) maxVal = logits[i];
    }
    const probs = new Float64Array(logits.length);
    let sum = 0;
    for (let i = 0; i < logits.length; i += 1) {
      const ex = Math.exp(logits[i] - maxVal);
      probs[i] = ex;
      sum += ex;
    }
    for (let i = 0; i < probs.length; i += 1) {
      probs[i] /= sum;
    }
    return probs;
  }

  function predictVoting(entries, nFeatures, classifierMeta, tensors) {
    const classes = classifierMeta.classes;
    const nClasses = classes.length;
    const weights = classifierMeta.weights;
    const estList = classifierMeta.estimators;
    const blended = new Float64Array(nClasses);
    let weightSum = 0;

    for (let eIdx = 0; eIdx < estList.length; eIdx += 1) {
      const est = estList[eIdx];
      const weight = weights[eIdx];
      weightSum += weight;
      let estProbs;

      if (est.type === "logistic") {
        const logits = sparseDot(entries, tensors[est.coefIndex], nFeatures, nClasses, est.intercept);
        estProbs = softmax(logits);
      } else if (est.type === "complement_nb") {
        const jll = sparseDot(entries, tensors[est.coefIndex], nFeatures, nClasses, null);
        estProbs = softmax(jll);
      } else if (est.type === "calibrated_svc") {
        estProbs = new Float64Array(nClasses);
        const nFolds = est.folds.length;
        for (let f = 0; f < nFolds; f += 1) {
          const fold = est.folds[f];
          const scores = sparseDot(entries, tensors[fold.coefIndex], nFeatures, nClasses, fold.intercept);
          const foldProbs = new Float64Array(nClasses);
          let foldSum = 0;
          for (let c = 0; c < nClasses; c += 1) {
            const cal = fold.calibrators[c];
            const p = 1 / (1 + Math.exp(cal.a * scores[c] + cal.b));
            foldProbs[c] = p;
            foldSum += p;
          }
          if (foldSum > 0) {
            for (let c = 0; c < nClasses; c += 1) {
              const normP = foldProbs[c] / foldSum;
              estProbs[c] += (normP > 1 && normP <= 1 + 1e-5 ? 1 : normP) / nFolds;
            }
          } else {
            for (let c = 0; c < nClasses; c += 1) {
              estProbs[c] += (1 / nClasses) / nFolds;
            }
          }
        }
      }

      for (let c = 0; c < nClasses; c += 1) {
        blended[c] += weight * estProbs[c];
      }
    }

    const probabilities = {};
    let bestIdx = 0;
    for (let c = 0; c < nClasses; c += 1) {
      const finalProb = blended[c] / weightSum;
      probabilities[classes[c]] = finalProb;
      if (finalProb > blended[bestIdx] / weightSum) {
        bestIdx = c;
      }
    }

    return {
      label: classes[bestIdx],
      confidence: probabilities[classes[bestIdx]],
      probabilities
    };
  }

  function isEnglishWord(token, baseEnglishWords) {
    if (baseEnglishWords.has(token) || TELECOM_DOMAIN_VOCAB.has(token)) {
      return true;
    }
    if (token.endsWith("s") && baseEnglishWords.has(token.slice(0, -1))) return true;
    if (token.endsWith("es") && baseEnglishWords.has(token.slice(0, -2))) return true;
    if (token.endsWith("ed") && baseEnglishWords.has(token.slice(0, -2))) return true;
    if (token.endsWith("ing") && baseEnglishWords.has(token.slice(0, -3))) return true;
    return false;
  }

  function detectLanguage(text, baseEnglishWords) {
    const normText = String(text).normalize("NFKD");
    const nonWsCount = Array.from(normText.replace(/\s+/g, "")).length;
    if (nonWsCount === 0) {
      return {
        language: "Symbolic / Emoticons",
        script: "Symbolic",
        isCodeMixed: false
      };
    }

    const bengaliMatches = normText.match(BENGALI_UNICODE_RE);
    const bengaliRatio = (bengaliMatches ? bengaliMatches.length : 0) / nonWsCount;
    if (bengaliRatio >= 0.25) {
      const latinTokens = normText.match(LATIN_TOKEN_RE) || [];
      return {
        language: "Bangla (Native Script)",
        script: "Bengali",
        isCodeMixed: latinTokens.length >= 2
      };
    }

    const tokens = normText.toLowerCase().match(/[a-z]+/g) || [];
    if (tokens.length === 0) {
      return {
        language: "Symbolic / Emoticons",
        script: "Symbolic",
        isCodeMixed: false
      };
    }

    let banglishMatches = 0;
    let englishMatches = 0;
    for (let i = 0; i < tokens.length; i += 1) {
      const tok = tokens[i];
      if (BANGLISH_PHONETIC_MARKERS.has(tok)) {
        banglishMatches += 1;
      } else if (isEnglishWord(tok, baseEnglishWords)) {
        englishMatches += 1;
      }
    }

    const totalTokens = tokens.length;
    const banglishRatio = banglishMatches / totalTokens;
    const englishRatio = englishMatches / totalTokens;
    const isCodeMixed = banglishMatches > 0 && englishMatches > 0;

    let language;
    if (banglishMatches > 0 && banglishRatio >= 0.15) {
      language = "Romanized Banglish";
    } else if (englishRatio >= 0.7 && banglishMatches === 0) {
      language = "English";
    } else if (banglishMatches > 0) {
      language = "Romanized Banglish";
    } else if (englishRatio >= 0.6) {
      language = "English";
    } else {
      language = "Romanized Banglish";
    }

    return {
      language,
      script: "Latin",
      isCodeMixed
    };
  }

  class VocEngine {
    constructor(bundle) {
      this.tensors = decodeBase64ToFloat32Tensors(bundle.weightsBase64, bundle.tensorSpecs);
      this.englishWords = decodeFrontCodedWords(bundle.englishLexiconFrontCoded);

      this.sentimentMeta = bundle.sentiment;
      this.sentimentMeta.vectorizer.vocabMap = buildVocabMap(this.sentimentMeta.vectorizer.vocab);

      this.categoryMeta = bundle.category;
      this.categoryMeta.vectorizer.word.vocabMap = buildVocabMap(this.categoryMeta.vectorizer.word.vocab);
      this.categoryMeta.vectorizer.char.vocabMap = buildVocabMap(this.categoryMeta.vectorizer.char.vocab);
    }

    analyze(text) {
      const t0 = performance.now();
      const cleaned = String(text || "").trim();
      const lang = detectLanguage(cleaned, this.englishWords);

      const sentVec = vectorize(cleaned, this.sentimentMeta.vectorizer, this.tensors);
      const sentiment = predictVoting(sentVec.entries, sentVec.nFeatures, this.sentimentMeta.classifier, this.tensors);

      const catVec = vectorize(cleaned, this.categoryMeta.vectorizer, this.tensors);
      const category = predictVoting(catVec.entries, catVec.nFeatures, this.categoryMeta.classifier, this.tensors);

      const latencyMs = performance.now() - t0;
      const triage = OPERATIONAL_SUBSYSTEMS[category.label] || OPERATIONAL_SUBSYSTEMS["General Appreciation / Other"];

      return {
        text: cleaned,
        language: lang.language,
        isCodeMixed: lang.isCodeMixed,
        sentiment: sentiment.label,
        sentimentConfidence: sentiment.confidence,
        sentimentProbabilities: sentiment.probabilities,
        category: category.label,
        categoryConfidence: category.confidence,
        categoryProbabilities: category.probabilities,
        triage,
        latencyMs
      };
    }
  }

  let engineInstance = null;
  let loadPromise = null;

  function ensureEngineLoaded() {
    if (engineInstance) {
      return Promise.resolve(engineInstance);
    }
    if (global.__VOC_MODEL_BUNDLE__) {
      engineInstance = new VocEngine(global.__VOC_MODEL_BUNDLE__);
      return Promise.resolve(engineInstance);
    }
    if (loadPromise) {
      return loadPromise;
    }

    loadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = BUNDLE_SRC;
      script.async = true;
      script.onload = () => {
        try {
          if (!global.__VOC_MODEL_BUNDLE__) {
            throw new Error("VoC model bundle loaded without global payload.");
          }
          engineInstance = new VocEngine(global.__VOC_MODEL_BUNDLE__);
          resolve(engineInstance);
        } catch (err) {
          reject(err);
        }
      };
      script.onerror = () => {
        reject(new Error("Failed to load local VoC model bundle script."));
      };
      document.head.appendChild(script);
    });

    return loadPromise;
  }

  function getSentimentBadgeStyles(label) {
    if (label === "Positive") {
      return {
        pill: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        bar: "bg-emerald-500",
        icon: "fa-face-smile"
      };
    }
    if (label === "Negative") {
      return {
        pill: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
        bar: "bg-rose-500",
        icon: "fa-face-frown"
      };
    }
    return {
      pill: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
      bar: "bg-amber-500",
      icon: "fa-face-meh"
    };
  }

  function renderProbabilityBars(container, probMap, orderedLabels, colorResolver) {
    container.innerHTML = "";
    const labels = orderedLabels || Object.keys(probMap).sort((a, b) => probMap[b] - probMap[a]);
    for (let i = 0; i < labels.length; i += 1) {
      const label = labels[i];
      const pct = Math.max(0, Math.min(100, (probMap[label] || 0) * 100));
      const isTop = i === 0 || (!orderedLabels && i === 0) || (orderedLabels && probMap[label] === Math.max(...labels.map((l) => probMap[l])));

      const row = document.createElement("div");
      row.className = "space-y-1";

      const header = document.createElement("div");
      header.className = "flex items-center justify-between gap-2 text-[11px]";

      const nameEl = document.createElement("span");
      nameEl.className = isTop
        ? "font-semibold text-slate-900 dark:text-white truncate"
        : "text-slate-600 dark:text-slate-300 truncate";
      nameEl.textContent = label;

      const pctEl = document.createElement("span");
      pctEl.className = isTop
        ? "font-mono font-bold text-slate-900 dark:text-white shrink-0"
        : "font-mono text-slate-500 dark:text-slate-400 shrink-0";
      pctEl.textContent = `${pct.toFixed(1)}%`;

      header.appendChild(nameEl);
      header.appendChild(pctEl);

      const track = document.createElement("div");
      track.className = "h-2 w-full rounded-full bg-slate-200/80 dark:bg-slate-800/90 overflow-hidden";

      const fill = document.createElement("div");
      fill.className = `h-full rounded-full transition-all duration-300 ${colorResolver(label, isTop)}`;
      fill.style.width = `${pct.toFixed(1)}%`;

      track.appendChild(fill);
      row.appendChild(header);
      row.appendChild(track);
      container.appendChild(row);
    }
  }

  function initDomController() {
    const inputEl = document.getElementById("voc-demo-input");
    const analyzeBtn = document.getElementById("voc-demo-submit");
    const clearBtn = document.getElementById("voc-demo-clear");
    const statusEl = document.getElementById("voc-demo-status");
    const resultsPanel = document.getElementById("voc-demo-results");
    const placeholderPanel = document.getElementById("voc-demo-placeholder");
    const exampleBtns = document.querySelectorAll("[data-voc-example]");

    if (!inputEl || !analyzeBtn || !resultsPanel) {
      return;
    }

    const outSentBadge = document.getElementById("voc-out-sentiment");
    const outSentConf = document.getElementById("voc-out-sentiment-conf");
    const outCatBadge = document.getElementById("voc-out-category");
    const outCatConf = document.getElementById("voc-out-category-conf");
    const outLangBadge = document.getElementById("voc-out-language");
    const outLatency = document.getElementById("voc-out-latency");
    const outSentBars = document.getElementById("voc-out-sentiment-bars");
    const outCatBars = document.getElementById("voc-out-category-bars");
    const outTriageTitle = document.getElementById("voc-out-triage-title");
    const outTriageDetail = document.getElementById("voc-out-triage-detail");

    function setStatus(text, isError) {
      if (!statusEl) return;
      statusEl.textContent = text;
      statusEl.className = isError
        ? "text-[11px] font-mono text-rose-600 dark:text-rose-400"
        : "text-[11px] font-mono text-slate-500 dark:text-slate-400";
    }

    function renderResult(res) {
      if (placeholderPanel) placeholderPanel.classList.add("hidden");
      resultsPanel.classList.remove("hidden");

      const sentStyle = getSentimentBadgeStyles(res.sentiment);
      outSentBadge.className = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${sentStyle.pill}`;
      outSentBadge.innerHTML = `<i class="fa-solid ${sentStyle.icon}"></i>`;
      const sentSpan = document.createElement("span");
      sentSpan.textContent = res.sentiment;
      outSentBadge.appendChild(sentSpan);
      outSentConf.textContent = `${(res.sentimentConfidence * 100).toFixed(1)}% confidence`;

      outCatBadge.innerHTML = `<i class="fa-solid ${res.triage.icon} text-brand-500"></i>`;
      const catSpan = document.createElement("span");
      catSpan.textContent = res.category;
      outCatBadge.appendChild(catSpan);
      outCatConf.textContent = `${(res.categoryConfidence * 100).toFixed(1)}% confidence`;

      outLangBadge.textContent = res.isCodeMixed ? `${res.language} · Code-Mixed` : res.language;
      outLatency.textContent = `${res.latencyMs.toFixed(1)} ms`;

      renderProbabilityBars(
        outSentBars,
        res.sentimentProbabilities,
        ["Positive", "Neutral", "Negative"],
        (lbl) => getSentimentBadgeStyles(lbl).bar
      );

      renderProbabilityBars(
        outCatBars,
        res.categoryProbabilities,
        null,
        (_lbl, isTop) => (isTop ? "bg-brand-500" : "bg-slate-400/70 dark:bg-slate-600")
      );

      outTriageTitle.textContent = res.triage.subsystem;
      outTriageDetail.textContent = res.triage.detail;
    }

    async function runAnalysis() {
      const rawText = inputEl.value.trim();
      if (!rawText) {
        setStatus("Please enter a customer review in Bangla, Banglish, or English.", true);
        inputEl.focus();
        return;
      }

      analyzeBtn.disabled = true;
      setStatus("Analyzing...", false);

      try {
        const engine = await ensureEngineLoaded();
        const result = engine.analyze(rawText);
        renderResult(result);
        setStatus("Analysis complete · Soft-Voting Ensemble", false);
      } catch (err) {
        setStatus(err.message || "Unable to run inference.", true);
      } finally {
        analyzeBtn.disabled = false;
      }
    }

    analyzeBtn.addEventListener("click", runAnalysis);
    inputEl.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        runAnalysis();
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        inputEl.value = "";
        resultsPanel.classList.add("hidden");
        if (placeholderPanel) placeholderPanel.classList.remove("hidden");
        setStatus("Ensemble ready", false);
        inputEl.focus();
      });
    }

    exampleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        inputEl.value = btn.getAttribute("data-voc-example") || "";
        runAnalysis();
      });
    });

    // Preload weights non-blockingly so first click feels instant
    ensureEngineLoaded()
      .then(() => {
        setStatus("Ensemble ready", false);
      })
      .catch(() => {
        setStatus("Click Analyze to load ensemble weights", false);
      });

    initLanguageRulesModal();
  }

  function initLanguageRulesModal() {
    const triggerBtn = document.getElementById("voc-lang-rules-trigger");
    const modal = document.getElementById("voc-lang-rules-modal");
    const card = document.getElementById("voc-lang-rules-card");
    const closeBtn = document.getElementById("voc-lang-rules-close");

    if (!triggerBtn || !modal || !card || !closeBtn) {
      return;
    }

    let closeTimer = null;

    function openModal() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        modal.classList.remove("opacity-0");
        card.classList.remove("scale-95", "opacity-0");
        card.classList.add("scale-100", "opacity-100");
      });
      closeBtn.focus();
    }

    function closeModal() {
      modal.classList.add("opacity-0");
      card.classList.add("scale-95", "opacity-0");
      card.classList.remove("scale-100", "opacity-100");
      document.body.style.overflow = "";
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        closeTimer = null;
      }, 200);
      triggerBtn.focus();
    }

    triggerBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  global.VocAnalyzer = {
    ensureEngineLoaded,
    analyze: async (text) => {
      const engine = await ensureEngineLoaded();
      return engine.analyze(text);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDomController);
  } else {
    initDomController();
  }
})(window);

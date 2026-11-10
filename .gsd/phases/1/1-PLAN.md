---
phase: 1
plan: 1
wave: 1
depends_on: []
files_modified:
  - css/styles.css
  - projects/voc-telecom.html
  - js/data/projects.js
autonomous: true
gap_closure: false

must_haves:
  truths:
    - "css/styles.css is restored to pre-paper baseline (bb837f7) with zero KaTeX rules"
    - "projects/voc-telecom.html is rebuilt strictly from verified public project sources with zero paper frameworks, math derivations, citations, or KaTeX CDN dependencies"
    - "The 96-word 'The Story Behind the Data' executive card (CON-01) is preserved intact at the top of projects/voc-telecom.html"
    - "All 13 Python 300 DPI project visualization plots are embedded and referenced correctly in projects/voc-telecom.html"
    - "js/data/projects.js voc-telecom card reflects canonical project metrics, highlights, and tags with zero paper buzzwords"
  artifacts:
    - "css/styles.css"
    - "projects/voc-telecom.html"
    - "js/data/projects.js"
  key_links:
    - "projects/voc-telecom.html links cleanly to ../css/styles.css?v=3.0 with no KaTeX styles or scripts"
    - "js/data/projects.js caseStudyUrl points to projects/voc-telecom.html and GitHub points to https://github.com/rh61632/telecom-Voice-of-Customer_intelligence"
---

# Plan 1.1: Paper Removal & Project-Only Rebuild

<objective>
Purge all confidential paper frameworks, figures, formulas, KaTeX styling, and citations from the portfolio codebase, and cleanly rebuild `css/styles.css`, `projects/voc-telecom.html`, and `js/data/projects.js` strictly from the open-source engineering project (`temp/telecom-Voice-of-Customer_intelligence/`).

Purpose: Ensure absolute isolation of confidential paper intellectual property while showcasing genuine, empirical project accomplishments (canonical 655,649 review / 3,713-day benchmark, BUET BanglaBERT, Soft-Voting Ensemble, ComplementNB Bayesian calibration, surge-filtered stability, functional domain dominance, threshold sensitivity, build version telemetry, short-text filtering ablation, automated rule-based language detector, and Colab GPU suites).
Output: Sanitized `css/styles.css`, rebuilt `projects/voc-telecom.html`, and updated `js/data/projects.js`.
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/REQUIREMENTS.md
- .gsd/ROADMAP.md
- .gsd/DECISIONS.md
- temp/telecom-Voice-of-Customer_intelligence/README.md
- temp/telecom-Voice-of-Customer_intelligence/ml/language_detector.py
- temp/telecom-Voice-of-Customer_intelligence/ml/predict.py
- temp/telecom-Voice-of-Customer_intelligence/ml/reports/short_text_filtering_ablation_study.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Clean CSS Styles & Repository Asset Hygiene (REQ-01, REQ-02)</name>
  <files>
    css/styles.css
  </files>
  <action>
    1. Revert `css/styles.css` cleanly to pre-paper commit `bb837f7` by removing all trailing KaTeX rules (`.katex`, `.dark .katex`, `.katex-display`, `.katex-display > .katex` at lines ~916-943).
    2. Confirm that zero non-project `figure*.png` files exist in `assets/images/projects/voc/` (`git ls-files assets/images/projects/voc/figure*` returns empty).
    3. Stage `css/styles.css` explicitly using `git add css/styles.css`.
    
    AVOID: Leaving any `.katex` CSS classes in `css/styles.css`.
    AVOID: Running `git add -A` or `git add .` (`DECISION-002`, `NFR-03`). Use explicit paths only.
  </action>
  <verify>
    powershell -NoProfile -Command "$content = Get-Content -Raw css/styles.css; if ($content -match 'katex') { Write-Error 'KaTeX rules still present in css/styles.css'; exit 1 } else { Write-Output 'CLEAN_CSS' }"
  </verify>
  <done>
    `css/styles.css` contains zero KaTeX rules. No paper PNGs exist in `assets/images/projects/voc/`. `css/styles.css` is explicitly staged in git.
  </done>
</task>

<task type="auto">
  <name>Task 2: Rebuild projects/voc-telecom.html Strictly from Open-Source Project (REQ-03, CON-01, CON-SEC)</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    1. Restore `projects/voc-telecom.html` cleanly to the pre-paper baseline from commit `98e4be9` (`git checkout 98e4be9 -- projects/voc-telecom.html`).
    2. Remove all KaTeX CDN stylesheets, scripts, and `renderMathInElement` calls from `<head>`. Ensure zero references to `katex.min.css`, `katex.min.js`, or `auto-render.min.js`. Replace any raw LaTeX math delimiters (`$$` or `$`) with styled semantic HTML / Unicode notation (e.g. `<i>NSS</i> = [(Positive &minus; Negative) / Total] &times; 100`).
    3. Preserve the 96-word `"The Story Behind the Data"` executive card (`CON-01`) intact at the top of the case study (in the hero section, before the sampling standards box).
    4. Verify that all 13 high-resolution 300 DPI project visualization plots from `temp/telecom-Voice-of-Customer_intelligence/assets/plots/` are properly embedded in `projects/voc-telecom.html`:
       - `net_sentiment_score_comparison_bars.png`
       - `operator_sentiment_distribution_bars.png`
       - `multi_year_sentiment_trend_line.png`
       - `yearly_sentiment_trend_early_era.png`
       - `yearly_sentiment_trend_modern_era.png`
       - `operator_category_complaint_distribution_bars.png`
       - `category_sentiment_stacked_bars.png`
       - `monthly_nss_trend_line.png`
       - `monthly_nss_trend_early_era.png`
       - `monthly_nss_trend_modern_era.png`
       - `nss_stability_volatility_bars.png`
       - `sentiment_model_benchmark_bars.png`
       - `category_model_benchmark_bars.png`
    5. Enrich and structure the page content STRICTLY from genuine public project sources:
       a. **Operational Category & Within-Category Dissatisfaction**:
          - Include the 5 operational domains distribution table (General Appreciation 83.1%–87.9%, Offers & Data Packs 4.3%–5.3%, App Login & Bugs 3.9%–8.1%, Network Speed 1.9%–3.6%, Billing 0.8%–1.1%).
          - Include the True Operational Complaint Rates table (Negative reviews only: App Login 3.45%–7.25%, Offers 2.42%–2.99%, Network 1.39%–2.72%, Billing 0.70%–1.03%).
          - Include the Within-Category Dissatisfaction (Option B benchmark) table: Billing 89.8%–92.9% (pure pain point), App Login 87.1%–89.3% (critical failure domain), Network Speed 74.0%–76.4% (~75% friction), Offers 50.3%–56.6% (mixed sentiment).
          - Include the informational callout on mobile generations: Legacy 2G/3G (2016–2018), Mainstream 4G LTE (>98% volume), and Commercial 5G launch on September 1, 2025 by Grameenphone and Robi.
       b. **Econometric Diagnostics & Surge-Filtered Stability Suite**:
          - Document Review Volume Surge Diagnostics & Filtered Volatility (`scripts/analyze_surges.py` & `README.md`): Explain that 45.7% of significant shocks (16 of 35) occur during acute volume surges (>= 50% MoM volume change) vs 13.3% across non-shocks, with General Appreciation shifts tracking volume surges ($R^2 = 0.5601$). Detail the Raw vs Surge-Filtered RMSSD comparison: Banglalink drops from 13.61 to 7.56 (-44.5%), GP drops from 6.28 to 5.15 (-18.0%), Robi drops from 5.61 to 4.53 (-19.3%), and the BL/Robi volatility ratio compresses from 2.43x down to 1.67x (-31.3%).
          - Document Functional Domain Dominance (`scripts/audit_point1.py` & `README.md`): App Login & Technical Bugs leads functional complaints in 27 of 35 shocks (77.1%) vs 91 of 205 non-shock transitions (44.4%). Present the statistical tests: Pooled Chi-square `χ²(1) = 12.83, p = 0.0003`, Fisher's Exact Odds Ratio `4.23, p = 0.0004`; Non-surge robustness: `χ²(1) = 6.38, p = 0.0116`, Fisher's Exact Odds Ratio `3.65, p = 0.0150`.
          - Document Shock Threshold Sensitivity (`scripts/audit_thresholds.py`): Present the live concordance counts across 8.0, 10.0, and 12.0 pp cutoffs between Soft-Voting Ensemble (60, 35, 24 shocks) and Linear SVM (59, 35, 24 shocks) showing 98.3%–100% agreement and invariant operator rankings (BL shock frequency 3.1x–4.0x higher than peers).
          - Document Build Version Telemetry (`scripts/check_version_bias.py`): Present review versioning breakdown (75.1% versioned `492,224` vs 24.9% unversioned `163,425`), and document Banglalink's v11.8.0 release crash spike (-11.2 pts NSS shock, -8.74 pts Login impact) followed by v11.9.1 / v11.10.x hotfix recovery (+32.8 pts NSS shock, +13.73 pts Login impact).
       c. **Machine Learning Benchmarks & Ablation Studies**:
          - Present the 3-Class Sentiment Leaderboard (BUET BanglaBERT 91.60% / 0.8598 F1, Soft-Voting Ensemble 87.47% / 0.7684 F1, MiniLM 82.33%, BiLSTM + Attention 81.50%).
          - Present the 5-Class Category Leaderboard (Soft-Voting Ensemble 87.44% / 0.7845 F1, BUET BanglaBERT 85.27% / 0.7624 F1, MiniLM 81.15%, BiLSTM + Attention 80.84%).
          - Detail ComplementNB Bayesian Probability Regularization: Contrast overconfident distance-based classifiers (mean maximum confidence 84.76%) with ComplementNB prior smoothing (calibrated to 74.47%) while preserving sub-millisecond CPU inference (>80x faster than deep learning).
          - Detail Frozen vs Fine-Tuned BanglaBERT Ablation: Static frozen transformer (74.88% Acc / 0.6253 F1) vs end-to-end 12-layer fine-tuning (+10.39% leap to 85.27% Acc / 0.7624 F1 on categories; 91.60% Acc on sentiment).
          - Detail Short-Text Filtering Ablation Study (`ml/reports/short_text_filtering_ablation_study.md`): Removing 1-2 word low-substance reviews surges Human Gold Standard Macro-F1 from 0.6737 to 0.7318 (+5.81 pp / 0.7436) and boosts minority category precision (Billing 64.82% -> 67.38%, App Login 74.45% -> 76.26%).
          - Detail Automated Language & Code-Mixing Detector (`ml/language_detector.py` + `ml/predict.py` commit `3d9f889`): Explain the rule-based two-stage detection engine (Stage 1 Bengali Unicode block `U+0980`–`U+09FF` script ratio; Stage 2 Latin token dictionary lookup vs 80+ Banglish phonetic markers) classifying text into Bangla, Romanized Banglish, English, or Symbolic with code-mixing flags, completely free of academic citations.
       d. **Production CLI Commands & Google Colab GPU Notebooks**:
          - Document the production CLI commands: incremental scraping (`--incremental`), data synchronization (`merge_and_sync_all_datasets.py`), visualization generation (`generate_global_visualizations.py`), real-time dual inference (`python ml/predict.py --text "..."`), surge diagnostics (`python scripts/analyze_surges.py`), threshold audit (`python scripts/audit_thresholds.py`), and gold set evaluation (`python data/gold_set/calculate_agreement.py`).
          - Feature the 3 Google Colab GPU Notebooks: BUET BanglaBERT Fine-Tuning (`dl/telecom_voc_banglabert_finetuning_colab.ipynb`), Master Unified Suite (`dl/telecom_voc_master_unified_colab.ipynb`), and Early DL Experiments (`archive/early_dl_experiments/`).
          - Apply CSS `break-all` mobile wrapping on monospace CLI pre blocks and links to ensure zero horizontal overflow on 390px viewports.
       e. **Longitudinal Trajectory, Stability, Historical Shocks, & Strategic Roadmaps**:
          - Retain the canonical 3,713-day yearly trajectory table (2016–2026), 10 major historical operational shocks table, NSS stability and volatility metrics table (Robi 94.39 SSI, GP 93.72 SSI, BL 86.39 SSI), and the 3 operator strategic roadmaps (Grameenphone, Robi, Banglalink).
    6. Stage explicitly with `git add projects/voc-telecom.html`.

    STRICT CONSTRAINTS (CON-SEC):
    AVOID: Any non-project figure, equation, citation, or concept from `paper/`:
    - Zero non-project figure PNGs (`figure0`–`figure4`).
    - Zero KaTeX CDN dependencies or LaTeX delimiters (`$`/`$$`).
    - Zero non-project frameworks, custom triage protocols, decision tables, split-track turnarounds, priority quadrants, or unverified throughput claims.
    - Zero academic literature author citations.
    - Zero companion paper utility references outside open-source tracked CLI/README scope.
  </action>
  <verify>
    Validate zero confidential publication terms via artifact scratch blocklist check, confirm 96-word Story card (`CON-01`), 0 KaTeX links/delimiters, and all 13 project plots embedded cleanly (`PROJECT_ONLY_HTML_VERIFIED_CLEAN`).
  </verify>
  <done>
    `projects/voc-telecom.html` is completely rebuilt strictly from open-source project materials, has zero paper terms or KaTeX dependencies, preserves the 96-word Story card intact, references all 13 project plots, and is explicitly staged in git.
  </done>
</task>

<task type="auto">
  <name>Task 3: Synchronize js/data/projects.js voc-telecom Card with Project-Only Metrics (REQ-04, CON-SEC)</name>
  <files>
    js/data/projects.js
  </files>
  <action>
    1. Update the `voc-telecom` project entry in `js/data/projects.js` to strictly highlight open-source project achievements:
       - `highlights`:
         - `"BUET BanglaBERT SOTA: 91.60% CV Acc (0.8598 F1)"`
         - `"Soft-Voting Ensemble: 87.5% Sent / 87.4% Cat (Sub-ms CPU)"`
         - `"Surge-Filtered Stability: 44.5% Volatility Drop (BL 13.61 -> 7.56) / Gold Standard: κ=0.77 (94.12% Consensus)"`
       - `tags`:
         - `["Python 3.10", "BUET BanglaBERT", "Soft-Voting Ensemble", "Banglish NLP", "655.6k Benchmark"]`
       - `shortSummary` and `description`:
         Ensure the descriptions feature the canonical 655,649 review benchmark across Grameenphone, Robi, and Banglalink over 3,713 days (2016–2026), the 661.2k master corpus, BUET BanglaBERT fine-tuning, Soft-Voting Ensemble, longitudinal stability modeling, and additive operational shock attribution.
    2. Confirm zero confidential publication terms in `projects.js`.
    3. Stage `js/data/projects.js` explicitly using `git add js/data/projects.js`.

    AVOID: Running `git add -A` or `git add .` (`DECISION-002`, `NFR-03`). Use explicit paths only.
  </action>
  <verify>
    Validate zero confidential terms via scratch scanner and confirm all 5 project tags (`Python 3.10`, `BUET BanglaBERT`, `Soft-Voting Ensemble`, `Banglish NLP`, `655.6k Benchmark`) exist (`PROJECT_JS_CARD_VERIFIED_CLEAN`).
  </verify>
  <done>
    `js/data/projects.js` `voc-telecom` entry contains clean project-only highlights, tags, and descriptions with zero paper terms, valid JavaScript syntax, and is explicitly staged in git.
  </done>
</task>

</tasks>

<verification>
After all tasks complete, verify:
- [ ] `css/styles.css` contains zero KaTeX rules and matches pre-paper styling baseline `bb837f7`
- [ ] `projects/voc-telecom.html` contains zero KaTeX CDN links, zero LaTeX math delimiters, zero secret paper terms, and preserves the 96-word Story card intact (`CON-01`)
- [ ] All 13 Python 300 DPI project visualization plots are embedded in `projects/voc-telecom.html`
- [ ] `js/data/projects.js` contains clean project highlights, canonical metrics (655,649 / 3,713-day), and clean tags
- [ ] All changes are explicitly staged via `git add` (`NFR-03`)
</verification>

<success_criteria>
- [ ] All 3 tasks executed and verified passing
- [ ] Zero secret paper ideas, figures, formulas, or references in target files (`CON-SEC`)
- [ ] Upfront 96-word executive narrative story card intact (`CON-01`)
- [ ] Git status clean of unstaged changes to target files with zero unrequested files staged (`DECISION-002`)
</success_criteria>

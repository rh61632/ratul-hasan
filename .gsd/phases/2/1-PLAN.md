---
phase: 2
plan: 1
wave: 1
depends_on: []
files_modified:
  - projects/voc-telecom.html
autonomous: true
gap_closure: false
must_haves:
  truths:
    - "projects/voc-telecom.html includes KaTeX 0.16.9 CDN (CSS + JS + auto-render) in <head> matching the projects/limiteye.html:19-22 pattern"
    - "4-Stage VoC-Intelligence System Architecture is integrated embedding ../assets/images/projects/voc/figure0_system_architecture.png with deep stage descriptions (Ingestion, Inference/Calibration, Diagnostic Decoupling, Decision Support)"
    - "Code-mixed text normalization cascade formula, hybrid TF-IDF representation, O(L + d*K) complexity, and 1.42 ms / 450 rps CPU hardware throughput benchmarks are rendered with KaTeX"
    - "ComplementNB Bayesian probability regularization is documented with Platt-scaled LinearSVC soft-voting ensemble formula and 84.76% down to 74.47% mean max predicted confidence reduction"
    - "Rogan-Gladen true prevalence formula p* is rendered with Se = 0.711 and Sp = 0.942 confirming true operator NSS stays within a +/-2.4 pp envelope"
    - "Two-stage Language Classifier (Unicode script filtering + Code-Mixing Index), full master corpus distribution (N = 661,160), 5-fold CV linguistic sub-cohort benchmark (Table 4), and 4 qualitative error modes are documented"
    - "Upfront Executive Story card (<140 words, 96 words) at lines 102-114 remains untouched per CON-01"
    - "DECISION-003 strictly maintained: zero links to manuscript.pdf, zero journal submission claims, and zero unverified live Hugging Face URLs"
  artifacts:
    - "projects/voc-telecom.html"
---

# Plan 2.1: 4-Stage Architecture, Mathematical & Bayesian Calibration, and Linguistic Sub-Cohorts

## Objective
Enrich `projects/voc-telecom.html` with KaTeX formula rendering (`0.16.9`), the complete 4-Stage VoC-Intelligence System Architecture (`figure0_system_architecture.png`), code-mixed text normalization, $\mathcal{O}(L + d \cdot K)$ asymptotic complexity & $1.42\text{ ms}$ / $450\text{ rps}$ CPU throughput benchmarks, ComplementNB Bayesian probability calibration ($84.76\% \to 74.47\%$), Rogan-Gladen prevalence adjustment ($p^*$), the two-stage Automated Language Detector (`ml/language_detector.py`), full-corpus language distribution ($N = 661,160$), 5-fold CV linguistic sub-cohort benchmarks (Table 4), and 4 qualitative socio-linguistic error modes.

## Context
Load these files for context:
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `.gsd/DECISIONS.md`
- `.gsd/phases/2/RESEARCH.md`
- `projects/limiteye.html` (lines 19-22 for KaTeX pattern)
- `projects/voc-telecom.html`

## Tasks

<task type="auto">
  <name>Add KaTeX CDN and integrate 4-Stage VoC Architecture, Normalization, Complexity, and Bayesian Calibration</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Add KaTeX CDN and embed the complete 4-Stage Architecture & Mathematical Calibration suite in `projects/voc-telecom.html`:

    1. KaTeX CDN in `<head>` (matching `projects/limiteye.html:19-22`):
       Insert directly after FontAwesome link (around line 21):
       ```html
       <!-- KaTeX for Publication-Grade LaTeX Formulas -->
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
       <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
       <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>
       ```

    2. Preserve Executive Story Card (CON-01):
       Ensure lines 102-114 (`The Story Behind the Data`, `96 Words • Executive Narrative`) remain completely unmodified.

    3. Insert 4-Stage Architecture & Mathematical Calibration Section:
       Place a new major section after Section 1 Scorecard (or before Section 2 Visual Suite) styled with glassmorphic cards (`rounded-2xl bg-white/70 dark:bg-surface-card/60 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-sm`):
       - **Architecture Diagram (`figure0_system_architecture.png`):**
         Embed `../assets/images/projects/voc/figure0_system_architecture.png` with zoomable/lightbox-ready styling, titled "4-Stage VoC-Intelligence System Architecture: Scrape-to-Strategy Pipeline".
       - **4-Stage Pipeline Breakdown:**
         - *Stage 1 — Ingestion & Code-Mixed NLP Preprocessing:* Automated asynchronous scraper across Google Play ($N = 655,649$ common-window reviews, 2016–2026), Trilingual / Code-Mixed normalizer (phonetic Banglish lemmatizer, sub-word char n-grams + word n-grams), and dual ground-truth sets (Seed $N = 4,499$ clean; blind Human Gold Set $N = 300$).
         - *Stage 2 — Multi-Model Inference & Calibration:* Production Soft-Voting Tri-Classifier (`Calibrated LinearSVC` Platt-scaled + `ComplementNB` + `Balanced Multinomial LR`, $87.44\%$ cat / $87.47\%$ sent CV acc, $1.42\text{ ms/review}$, $450\text{ rps}$ CPU), Deep Learning verification anchors (`BUET BanglaBERT` full 12-layer fine-tuned $91.60\%$ sent / $85.27\%$ cat, `BiLSTM + Multi-Head Attention`, `Multilingual MiniLM`), and Statistical Calibration (`Rogan-Gladen` true prevalence, Bayesian margin regularization, star-rating inversion filter).
         - *Stage 3 — Expert Diagnostic Rules & Decoupling Engine:* Rule 1 (Cross-Layer Diagnostic Decoupling: client software vs. core RF, $\chi^2(1) = 12.83, \text{OR} = 4.23, p = 0.0003$), Rule 2 (Dual-Track Changepoint & Surges: shocks $|\Delta\text{NSS}| \ge 10$, filters promo surges $\ge 50\%$, $N = 35$ shocks), Rule 3 (Strategic Priority Matrix Engine: Prevalence vs. Severity Index, Toxicity OR, Billing Quad II vs. App Bugs Quad I).
         - *Stage 4 — Decision Support & Executive Triage:* Real-time anomaly flagging, subsystem attribution, automated CTO/CCO alert levels & hotfix rollback gating, Longitudinal NSS & Four-Era dashboard, and 4 Managerial Protocols (Rule 1 SLA Decoupling, Rule 2 Dual Dashboards, Rule 3 Auth/Canary Telemetry, Rule 4 Prompt Regulation).
       - **Code-Mixed Text Normalization Cascade Formula:**
         Render KaTeX display formula:
         $$T_i^* = \mathcal{N}_{\text{slang}}\!\left(\mathcal{N}_{\text{punct}}\!\left(\mathcal{N}_{\text{case}}\!\left(\mathcal{N}_{\text{unicode}}(T_i)\right)\right)\right)$$
         Explain $\mathcal{N}_{\text{unicode}}$ (ZWNJ stripping, NFKD decomposition), $\mathcal{N}_{\text{case}}$ (Latin lowercasing), $\mathcal{N}_{\text{punct}}$ (punctuation boundary isolation), and $\mathcal{N}_{\text{slang}}$ (phonetic Banglish lemmatization, e.g., `"faltu"`, `"fal2"`, `"faaltu"` $\to$ root lemma *faltu*).
       - **Hybrid Feature Representation:**
         Render KaTeX formula:
         $$\mathbf{x}_i = \left[\mathbf{x}_{i,\text{char}(2-5)} \;\|\; \mathbf{x}_{i,\text{word}(1-3)}\right] \in \mathbb{R}^D$$
         with sublinear TF scaling ($1 + \log(\text{tf})$). Note category classifier uses Word (1-2) + Char (3-5) and sentiment uses Char (2-5).
       - **Asymptotic Complexity & Hardware Throughput:**
         State $\mathcal{O}(L + d \cdot K)$ time complexity and $\mathcal{O}(V \cdot K)$ memory complexity ($L$ char length, $V \approx 50{,}000$ vocab, $d \approx 20\text{--}45 \ll V$ non-zero features per review, $K \in \{3, 5\}$ classes), bypassing transformer self-attention $\mathcal{O}(L^2 \cdot D)$.
         Highlight CPU latency of **$1.42\text{ ms/review}$ ($450\text{ rps}$ on Intel Xeon CPU)** vs. BUET BanglaBERT **$32.6\text{ ms}$ ($12\text{ rps}$ on NVIDIA T4 GPU)** = **$37.5\times$ end-to-end throughput speedup** ($>80\times$ vs unbatched deep learning).
       - **ComplementNB Bayesian Probability Calibration & Platt Scaling:**
         Render ensemble soft-voting formula:
         $$\hat{\mathbf{p}}_i = \sum_{m=1}^3 \omega_m P_m(y \mid \mathbf{x}_i), \quad \boldsymbol{\omega} = [0.40, 0.40, 0.20]$$
         (Balanced LR $w=2$, Calibrated LinearSVC $w=2$, ComplementNB $w=1$). Platt sigmoid:
         $$P(y=c \mid f(\mathbf{x})) = \frac{1}{1 + \exp(A f(\mathbf{x}) + B)}$$
         Document empirical regularizing effect: zero discrete label flips on $N = 300$ gold set and $N = 5,000$ corpus sample, while taming mean maximum predicted confidence from **$84.76\%$ down to $74.47\%$**, suppressing uncalibrated overconfident tail predictions while preserving CPU latency.
       - **Rogan-Gladen Prevalence Adjustment:**
         Render Rogan-Gladen equation:
         $$p^* = \frac{\hat{p} + \mathrm{Sp} - 1}{\mathrm{Se} + \mathrm{Sp} - 1}$$
         with empirical sensitivity $\mathrm{Se} = 0.711$ and specificity $\mathrm{Sp} = 0.942$, verifying true operator NSS remains within a narrow $\pm 2.4$ percentage-point envelope, preserving all operator relative rankings.

    4. Explicit Git Commit (DECISION-002):
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "feat(voc): add KaTeX CDN, 4-stage architecture, and Bayesian calibration suite"`
       Wait for pre-commit hook (`python3 scripts/generate_thumbnails.py`, ~80s) to complete.
       Verify commit landed: `git log -1 --oneline`.
       AVOID: Never run `git add -A` or `git add .`.
  </action>
  <verify>
    Execute validation check via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    # Verify KaTeX CDN
    if (-not ($html -match "katex@0\.16\.9/dist/katex\.min\.css" -and $html -match "contrib/auto-render\.min\.js")) {
      throw "KaTeX CDN missing from projects/voc-telecom.html!"
    }
    # Verify Executive Story intact (CON-01)
    if (-not ($html -match "96 Words • Executive Narrative" -and $html -match "The Story Behind the Data")) {
      throw "Executive narrative story card missing or altered!"
    }
    # Verify figure0 embed
    if (-not ($html -match "figure0_system_architecture\.png")) {
      throw "figure0_system_architecture.png not embedded in projects/voc-telecom.html!"
    }
    # Verify formulas & calibration numbers
    $requiredTokens = @(
      "N_{\text{slang}}",
      "1.42 ms",
      "450 rps",
      "37.5",
      "84.76%",
      "74.47%",
      "Rogan-Gladen",
      "0.711",
      "0.942"
    )
    foreach ($token in $requiredTokens) {
      if (-not ($html -match [regex]::Escape($token))) {
        throw "Missing required token: $token"
      }
    }
    # DECISION-003 Anonymity Check
    if ($html -match "manuscript\.pdf" -or $html -match "Expert Systems with Applications" -or $html -match "Submitted to") {
      throw "Prohibited double-blind artifact or submission claim detected!"
    }
    Write-Host "Task 1 verification PASSED!" -ForegroundColor Green
    ```
  </verify>
  <done>
    KaTeX CDN is loaded in `<head>`, 4-Stage VoC Architecture with `figure0` is fully rendered, Normalization and Rogan-Gladen equations render via KaTeX, ComplementNB calibration (84.76% -> 74.47%) and 1.42 ms / 450 rps CPU throughput are documented, Executive Story is intact, zero double-blind leaks exist, and git commit is verified.
  </done>
</task>

<task type="auto">
  <name>Add Automated Language Detector, Linguistic Sub-Cohort Benchmarks, and Qualitative Error Analysis</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Add the comprehensive Automated Language Detector (`ml/language_detector.py`), Linguistic Sub-Cohort Benchmarks, and Qualitative Error Analysis suite to `projects/voc-telecom.html`:

    1. Two-Stage Automated Language Classifier (`ml/language_detector.py`):
       - Cite theoretical groundings: Barman et al. (2014, EMNLP) Unicode script filtering + Gambäck & Das (2016, LREC) Code-Mixing Index (CMI $\le 30$ / dominance threshold $\ge 70\%$).
       - Detail classifier architecture (`LanguageClassifier(script_threshold=0.25, dominance_threshold=0.70)`):
         - Native Bengali script detection via NFKD normalized block `[\u0980-\u09FF]`. Reviews with `bengali_ratio >= 0.25` classified as `"Bangla (Native Script)"` (flagged as code-mixed if $\ge 2$ Latin tokens present).
         - Latin-script evaluation utilizing NLTK English lexicon expanded with domain `TELECOM_DOMAIN_VOCAB` (`sim`, `mb`, `gb`, `4g`, `5g`, `taka`, `tk`, `gp`, `robi`, `banglalink`) and 78 phonetic Banglish markers (`kore`, `bhalo`, `kharap`, `faltu`, `kete`, `nai`, `parina`, `amader`).
         - Reviews with `banglish_matches > 0` and `banglish_ratio >= 0.15` classified as `"Romanized Banglish"`; pure Latin reviews with `english_ratio >= 0.70` classified as `"English"`; non-lexical reviews as `"Symbolic / Emoticons"`.
         - Integrated into `ml/predict.py` and `demo/app.py`.

    2. Master Corpus Language Distribution ($N = 661,160$, 2016–2026):
       - Present corpus distribution cards & breakdown (`global_language_distribution.json`, processed in `27.54 seconds` across `661,160` reviews):
         - **English (Standard Latin):** `509,887` reviews (**$77.12\%$**)
         - **Romanized Banglish:** `74,515` reviews (**$11.27\%$**)
         - **Bangla (Native Script):** `62,296` reviews (**$9.42\%$**)
         - **Symbolic / Emoticons:** `14,462` reviews (**$2.19\%$**)
         - *Intra-sentential Code-Mixed sub-segment:* `16,615` reviews (**$2.51\%$**)
         - *Combined Bengali language share:* **$20.69\%$** (`136,811` reviews; **$22.88\%$** non-English including symbolic).
       - Operator splits:
         - **Grameenphone ($N = 321,374$):** English $78.46\%$ (`252,149`), Banglish $10.86\%$ (`34,901`), Bangla $8.43\%$ (`27,104`), Symbolic $2.25\%$ (`7,220`).
         - **Robi ($N = 200,652$):** English $77.44\%$ (`155,386`), Banglish $10.50\%$ (`21,078`), Bangla $9.95\%$ (`19,960`), Symbolic $2.11\%$ (`4,228`).
         - **Banglalink ($N = 139,134$):** English $73.56\%$ (`102,352`), Banglish $13.32\%$ (`18,536`), Bangla $10.95\%$ (`15,232`), Symbolic $2.17\%$ (`3,014`).
       - Decade Native Script Shift: Native Bangla script usage expanded over **$>4\times$ from $2.83\%$ (2016) to $13.37\%$ (2026)**, demonstrating the imperative for code-mixed NLP support in emerging markets.

    3. 5-Fold Stratified CV Linguistic Sub-Cohort Benchmark Table (Table 4, Seed $N = 4,499$):
       Add formatted responsive table displaying verified 5-fold CV performance across language cohorts:
       | Linguistic Sub-Cohort | Seed $N$ | Share (%) | Category Acc (CV) | Category Macro-F1 (CV) | Sentiment Acc (CV) | Sentiment Macro-F1 (CV) |
       |---|---:|---:|---:|---:|---:|---:|
       | **Bangla (Native Script)** | 1,091 | 24.2% | **81.30%** | **0.7690** | **82.13%** | **0.7748** |
       | **Romanized Banglish** | 390 | 8.7% | **84.36%** | **0.7142** | **78.21%** | **0.7495** |
       | **English (Standard Latin)** | 3,005 | 66.8% | **90.52%** | **0.7996** | **91.08%** | **0.7743** |
       | **Overall Benchmark** | **4,499 / 4,500** | **100.0%** | **87.78%** | **0.7896** | **87.80%** | **0.7823** |
       - Add literature contrast: Drašković & Milanović (2025, *Journal of Big Data*) discarded non-English data entirely ($65.64\%$ acc, $0.5213$ Macro-F1 on English tweets), whereas VoC-Intelligence retains all three modalities with $87.78\%$ Category Acc and $0.7896$ Macro-F1.

    4. Four Qualitative Socio-Linguistic Error Modes:
       Detail four qualitative failure modes discovered during discordant prediction audits between Ensemble, BUET BanglaBERT, and human consensus:
       - **1. Sarcasm & Inverted Sentiment Polarity:** Praise tokens (*"osadharon"* [extraordinary], *"ki sundor"* [how beautiful]) juxtaposed with defect complaints (*"osadharon app! login korte gele crash kore, ki sundor service!"*). Linear TF-IDF assigns false positive ($P(\text{Pos}) = 0.84$), whereas BanglaBERT self-attention captures clause inversion ($P(\text{Neg}) = 0.91$).
       - **2. Polysemous Slang & Colloquial Deception Terms:** Vernacular grievance terms (*"batpari"* [swindling], *"dakat"* [robbers], *"MB joma"* — e.g., *"bhai pack kinlam kintu MB joma hoilo na, shob batpari"*) infrequently co-occur with formal billing terminology, causing routing to General/Other rather than Billing.
       - **3. Multi-Issue Boundary Overlap:** Compound grievances spanning client app and network layers (*"network e speed nai ar app open korlei crash kore"*). Mutually exclusive single-label classification assigns Network ($p = 0.54$) while suppressing concurrent App Login defect ($p = 0.42$), highlighting future multi-label opportunities.
       - **4. Ultra-Short Low-Context & Phonetic Variants:** Isolated pejoratives or phonetic spelling variants (*"fultu"*, *"baje"*, 1-star empty reviews) lack dense syntactic context; sub-word char n-grams partially rescue OOV tokens.

    5. Explicit Git Commit (DECISION-002):
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "feat(voc): add language detector, linguistic sub-cohort benchmarks, and error analysis"`
       Wait for pre-commit hook (~80s) to finish.
       Verify commit landed: `git log -1 --oneline`.
       AVOID: Never run `git add -A` or `git add .`.
  </action>
  <verify>
    Execute validation check via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    # Verify Language Detector & CMI tokens
    $requiredTokens = @(
      "LanguageClassifier",
      "Barman et al.",
      "Gambäck",
      "509,887",
      "77.12%",
      "74,515",
      "11.27%",
      "62,296",
      "9.42%",
      "16,615",
      "2.51%",
      "13.37%",
      "81.30%",
      "0.7690",
      "84.36%",
      "0.7142",
      "90.52%",
      "0.7996",
      "87.78%",
      "0.7896",
      "Drašković",
      "osadharon",
      "batpari"
    )
    foreach ($token in $requiredTokens) {
      if (-not ($html -match [regex]::Escape($token))) {
        throw "Missing required language detector / sub-cohort token: $token"
      }
    }
    # Verify CON-01
    if (-not ($html -match "96 Words • Executive Narrative")) {
      throw "CON-01 violation: Executive Narrative modified!"
    }
    # DECISION-003 check
    if ($html -match "manuscript\.pdf" -or $html -match "Expert Systems with Applications" -or $html -match "Submitted to") {
      throw "DECISION-003 violation: Prohibited double-blind artifact or submission claim detected!"
    }
    Write-Host "Task 2 verification PASSED!" -ForegroundColor Green
    ```
  </verify>
  <done>
    Two-stage Language Classifier, full corpus distribution ($N = 661,160$), 5-fold CV sub-cohort benchmark Table 4 ($87.78\%$ / $0.7896$), literature comparison with Drašković & Milanović, and 4 qualitative error modes are integrated into `projects/voc-telecom.html`, CON-01 and DECISION-003 checks pass, and git commit is verified.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `projects/voc-telecom.html` includes KaTeX 0.16.9 CDN (CSS + JS + auto-render) in `<head>`
- [ ] 4-Stage VoC-Intelligence System Architecture section embeds `figure0_system_architecture.png` with deep stage breakdown
- [ ] Code-mixed normalization cascade, hybrid TF-IDF, $\mathcal{O}(L + d \cdot K)$ complexity, and $1.42\text{ ms}$ / $450\text{ rps}$ CPU throughput benchmarks are rendered cleanly
- [ ] ComplementNB Bayesian probability calibration ($84.76\% \to 74.47\%$) and Rogan-Gladen true prevalence ($p^*$, $\mathrm{Se}=0.711, \mathrm{Sp}=0.942$) are documented
- [ ] Two-Stage Language Classifier (`ml/language_detector.py`), master corpus distribution ($N=661,160$), 5-fold CV sub-cohort benchmark (Table 4), and 4 qualitative socio-linguistic error modes are documented
- [ ] Upfront Executive Story card (<140 words, 96 words) remains untouched per CON-01
- [ ] Strict DECISION-003 compliance: zero manuscript PDF links and zero journal submission claims
- [ ] Every commit stages explicit file paths only (`git add projects/voc-telecom.html`) and lands cleanly

## Success Criteria
- [ ] All tasks verified passing via PowerShell test commands
- [ ] All must-haves confirmed
- [ ] No regressions in existing sections

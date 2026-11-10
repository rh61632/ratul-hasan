---
phase: 2
plan: 2
wave: 2
depends_on:
  - 1
files_modified:
  - projects/voc-telecom.html
  - js/data/projects.js
autonomous: true
gap_closure: false
must_haves:
  truths:
    - "projects/voc-telecom.html presents Cross-Layer Decoupling econometric proofs (chi^2(1) = 12.83, p = 0.0003, Yates 11.55, Fisher OR = 4.23, RR = 1.74, Non-Surge OR = 3.65) and 45.7% volume surge overlap"
    - "Surge-Filtered RMSSD is documented (-44.5% BL reduction, 13.61 -> 7.56 pts; BL/Robi ratio compressed from 2.43x to 1.67x) alongside verified threshold sensitivity counts (44 / 35 / 23 Ensemble vs 46 / 32 / 24 LinearSVC)"
    - "Reconciled 4 Market Eras (with figure1_monthly_nss_trajectory.png and figure2_yearly_leadership_strip.png), Spring 2024 v11.8.0/v11.9.1 telemetry (-11.2 pts drop to -7.59% NSS -> +32.8 pts recovery to +77.0%), and 2026 Banglalink Turnaround Decomposition (+15.54 = +10.33 [66.5%] surge + +5.21 [33.5%] technical with figure4_banglalink_reversal_decomposition.png) are embedded"
    - "Strategic Priority Matrix (figure3_priority_matrix.png) is embedded with N = 88,181, chi^2(3) = 11,027.6, Billing OR = 9.49, App Login OR = 6.44"
    - "Canary Release Gating (Algorithm 1: window W in [30, 100], alpha = 0.01, p_base = 0.046, tau_abort = 0.12, Binomial test) and Executive Operational Decision Matrix (Levels 1-4 & 4 Managerial Rules) are documented"
    - "Interactive Gradio demo (demo/app.py), Colab GPU suites, HF Hub model card pipeline, and 8-Module Automated Integrity Audit (audit_project_integrity.py) are integrated"
    - "js/data/projects.js highlights and tags reflect Phase 2 breakthroughs (1.42 ms CPU, Cross-Layer Decoupling chi^2=12.83, Canary Gating) with zero syntax errors"
    - "CON-01 and DECISION-003 fully preserved with zero manuscript PDF leaks or journal submission claims"
  artifacts:
    - "projects/voc-telecom.html"
    - "js/data/projects.js"
---

# Plan 2.2: Decoupling Proofs, Longitudinal Visual Suite, Strategic Priority Matrix, and Production Governance

## Objective
Enrich `projects/voc-telecom.html` with Cross-Layer Decoupling econometric proofs ($\chi^2(1) = 12.83, \text{OR} = 4.23$), Surge-Filtered RMSSD ($-44.5\%$ BL), verified threshold invariance ($44/35/23$ vs $46/32/24$), 4 Market Eras (`figure1` & `figure2`), Spring 2024 build telemetry, Banglalink 2026 Turnaround Decomposition (`figure4`: $+15.54 = +10.33\text{ surge } [66.5\%] + +5.21\text{ technical } [33.5\%]$), Strategic Priority Matrix (`figure3`: $\text{OR} = 9.49$ Billing, $\text{OR} = 6.44$ App Bugs), Canary Release Gating (Algorithm 1), Executive Operational Matrix (Levels 1–4 & 4 Managerial Rules), Gradio interactive demo (`demo/app.py`), Colab GPU suites, HF Hub tooling, and 8-Module Automated Integrity Audit (`scripts/audit_project_integrity.py`), while synchronizing `js/data/projects.js` highlights.

## Context
Load these files for context:
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `.gsd/DECISIONS.md`
- `.gsd/phases/2/RESEARCH.md`
- `projects/voc-telecom.html`
- `js/data/projects.js`

## Tasks

<task type="auto">
  <name>Integrate Cross-Layer Decoupling Econometric Proofs, Surge-Filtered RMSSD, 4 Market Eras, and Strategic Priority Matrix</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Enrich Section 2 (Visual Suite & Volatility), Section 3 (10-Year Trajectory), and Section 4 (Shock Attribution) in `projects/voc-telecom.html`:

    1. Cross-Layer Decoupling Econometric Proofs (Section 4 upgrade):
       - Scope: Modern Era (Jan 2020 – Sep 2026, 81 months, 80 transitions/operator = 240 total transitions).
       - Acute shocks ($|\Delta\text{NSS}| \ge 10.0\text{ pp}$): **35 shocks** (Grameenphone 6, Robi 7, Banglalink 22; 20 positive rises, 15 negative drops).
       - Domain attribution: App Login & Technical Bugs led functional domains in **27 of 35 shocks (77.1%)** vs. **91 of 205 normal transitions (44.4%)** [GP 30/74 (40.5%), Robi 32/73 (43.8%), BL 29/58 (50.0%)].
       - Statistical tests (KaTeX rendered):
         - Pearson $\chi^2(1) = 12.83, p = 0.0003$
         - Yates-corrected $\chi^2(1) = 11.55, p = 0.0007$
         - Fisher's Exact Test: $\text{OR} = 4.23$ (95% CI: $[1.78, 10.51], p = 0.0004$)
         - Relative Risk: $\text{RR} = 1.74$ (95% CI: $[1.34, 2.25]$)
       - Operator breakdown:
         - Banglalink: 20/22 (90.9%) shocks vs 29/58 (50.0%) normal $\to$ Fisher $\text{OR} = 10.00, p = 0.0007$ (non-surge $\text{OR} = 11.41, p = 0.0088$).
         - Robi: 4/7 (57.1%) vs 32/73 (43.8%), $\text{OR} = 1.71, p = 0.6949$.
         - Grameenphone: 3/6 (50.0%) vs 30/74 (40.5%), $\text{OR} = 1.47, p = 0.6866$.
       - Non-Surge Robustness: Excluding 32 volume surges ($|\Delta V/V| \ge 50\%$), App Login led 14 of 19 non-surge shocks (73.7%) vs 82 of 189 non-surge normal transitions (43.4%): $\chi^2(1) = 6.38, p = 0.0116$, Fisher $\text{OR} = 3.65, p = 0.0150$.

    2. Volume Surge Overlap & Surge-Filtered RMSSD (Section 2 Volatility upgrade):
       - Surge overlap: 45.7% of all shocks (16 of 35) occur during volume surges ($|\Delta V/V| \ge 50\%$), vs only 13.3% (32 of 240) across normal transitions. Linear regression against $\Delta\ln(\text{Vol})$ yields $R^2 = 0.5601$ ($\beta = 11.52$) for General Appreciation vs $R^2 = 0.4323$ for operational domains.
       - Surge-Filtered RMSSD Table & Callout:
         - Banglalink: Raw **13.61 pts** (95% CI $[8.53, 18.77]$) $\to$ Filtered **7.56 pts** (95% CI $[6.15, 8.93]$, **$-44.5\%$ reduction**, 67 non-surge transitions kept).
         - Grameenphone: Raw **6.28 pts** $\to$ Filtered **5.14–5.15 pts** (**$-18.0\%$ reduction**).
         - Robi: Raw **5.61 pts** $\to$ Filtered **4.53 pts** (**$-19.3\%$ reduction**).
         - BL/Robi Volatility Ratio: Compresses from **$2.43\times$** down to **$1.67\times$** (**$-31.3\%$**).
       - Threshold Sensitivity & Classifier Invariance Audit:
         - Document verified canonical counts from `scripts/audit_thresholds.py`:
           - $|\Delta\text{NSS}| \ge 8\text{ pp}$: **44** (Ensemble) vs **46** (LinearSVC)
           - $|\Delta\text{NSS}| \ge 10\text{ pp}$: **35** (Ensemble) vs **32** (LinearSVC)
           - $|\Delta\text{NSS}| \ge 12\text{ pp}$: **23** (Ensemble) vs **24** (LinearSVC)
           - Banglalink displays $3.1\times$–$3.8\times$ higher shock frequency across every threshold, with near-identical RMSSD under LinearSVC (GP 6.24 vs 6.28, Robi 5.43 vs 5.61, BL 13.76 vs 13.61).
           - AVOID: Never use older uncalibrated `README.md` threshold counts ($60/35/24$).

    3. Four Market Eras & Publication Figures (`figure1` & `figure2`):
       - Embed `../assets/images/projects/voc/figure1_monthly_nss_trajectory.png` (Monthly NSS Trajectory) and `../assets/images/projects/voc/figure2_yearly_leadership_strip.png` (Yearly Leadership Strip).
       - Document reconciled 4 Market Eras (computed from `yearly_intelligence_trends.json`):
         - *Era 1: Early Adoption (2016–2017):* Robi high customer friction ($-54.3$ unweighted, $-52.5$ weighted) vs Banglalink positive launch ($+45.9$ unweighted, $+45.7$ weighted); GP ($+8.0$ unweighted, $+8.8$ weighted).
         - *Era 2: 4G Transition & Lockdown Surge (2018–2020):* 2018 4G tariff dip (GP $-46.31$ pts drop on Feb 19, 2018) followed by $+616\%$ YoY pandemic surge in 2020 ($77,471$ reviews; GP Mar 2020 shock $+26.41$ pts). Unweighted: GP $+16.4$, Robi $+17.1$, BL $+26.1$.
         - *Era 3: Post-Pandemic Stability (2021–2022):* GP $+62.6$, Robi $+66.1$, BL $+51.1$.
         - *Era 4: SuperApp Divergence & Reversal (2023–2026):* GP $+66.9$, Robi $+67.4$, BL $+61.4$. Milestones: 5G launch Sep 1, 2025 (GP $-18.06$, BL $+27.69$).
         - AVOID: Never use stale draft text from `manuscript.tex:397,415` (e.g., GP $-53.2$, BL $-55.8$, or $-18.42 \pm 4.12$).

    4. Spring 2024 `v11.8.0` / `v11.9.1` Build Crash Telemetry:
       - 2024-03 Baseline: $N = 1,093$, NSS $= +42.82\%$.
       - 2024-04 `v11.8.0` Crash Shock: $N = 1,315$, $\Delta\text{NSS} = -11.18\text{ pts}$ (App Login contributed $-8.74\text{ pts}$ = $78.2\%$ of downturn). Deployed `v11.8.0` ($n=158$, $12.0\%$ of month / $34.1\%$ of versioned reviews) collapsed to **NSS $-7.59\%$ (95% CI $[-22.3, +7.1]$)** due to splash freezes and authentication timeouts.
       - 2024-05 `v11.9.1` Hotfix & Volume Surge: $N = 2,265$ ($+72.2\%$ surge), $\Delta\text{NSS} = +32.8\text{ pts}$ (App Login $+13.73\text{ pts}$), with `v11.9.1` ($n=708$) rebounding to **$+77.0\%$ (95% CI $[72.9, 81.0]$)**.

    5. Banglalink 2026 Turnaround Decomposition (`figure4_banglalink_reversal_decomposition.png`):
       - Embed `../assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png`.
       - Reconciled 2025 $\to$ 2026 Annual Turnaround Ground Truth:
         - Review volume surged $2.13\times$ ($10,238$ in 2025 $\to$ $21,810$ in Jan–Sep 2026).
         - Aggregate NSS rose **$+15.54\text{ percentage points}$** ($+66.39\% \to +81.93\%$).
         - **Track B / Branch B (Promotional Surface Distortion — 66.5%):** `General Appreciation / Other` expanded from $87.36\%$ to $92.71\%$ ($+5.35\text{ pp}$), contributing **$+10.33\text{ pts}$ ($66.5\%$)**.
         - **Track A / Branch A (Genuine Engineering & Operational Optimization — 33.5%):** Contributed **$+5.21\text{ pts}$ ($33.5\%$)** combined:
           - `App Login & Technical Bugs`: **$+2.80\text{ pts}$ ($18.0\%$)** (complaint rate fell $4.62\% \to 1.38\%$, $-3.24\text{ pp}$).
           - `Network Speed & 4G Latency`: **$+1.07\text{ pts}$ ($6.9\%$)**.
           - `Offers & Data Packs`: **$+0.98\text{ pts}$ ($6.3\%$)**.
           - `Billing & Airtime Deductions`: **$+0.36\text{ pts}$ ($2.3\%$)**.
         - AVOID: Never use stale `manuscript.tex:514` draft text ($+6.95 / 57.4\%$) or label the $+15.54\text{ delta}$ as monthly `2026-01`.

    6. $2 \times 2$ Strategic Priority Matrix (`figure3_priority_matrix.png`):
       - Embed `../assets/images/projects/voc/figure3_priority_matrix.png`.
       - Evaluated across $N = 88,181$ operational reviews (excluding General Appreciation).
       - Heterogeneity: $4 \times 2$ contingency test yields $\chi^2(3) = 11,027.6, p < 0.0001$, Cramér's $V = 0.3536$.
       - Four Quadrants & Verified Toxicity Odds Ratios:
         - **Quadrant II — Severe Latent Churn (Low Prev $<4.5\%$, Extreme Negativity $>85\%$):** `Billing & Airtime Deductions` ($91.9\%$ negative, $5,787/6,295$). **$\text{OR} = 9.49$ (95% CI: $[8.64, 10.42]$)** vs. Offers.
         - **Quadrant I — Urgent Crisis (High Prev $>4.5\%$, Severe Negativity $>75\%$):** `App Login & Technical Bugs` ($88.5\%$ negative, $28,955/32,701$). **$\text{OR} = 6.44$ (95% CI: $[6.18, 6.70]$)** vs. Offers, and **$\text{OR} = 2.57$ (95% CI: $[2.45, 2.70]$)** vs. Network.
         - **Quadrant III — Infrastructure Parity ($<4.5\%$ prev, $\sim 75\%$ neg):** `Network Speed & 4G Latency` ($75.0\%$ negative, $12,083/16,108$). **$\text{OR} = 2.50$ (95% CI: $[2.40, 2.61]$)** vs. Offers.
         - **Quadrant IV — Feature Optimization (High Prev $>4.5\%$, Moderate Neg $<75\%$):** `Offers & Data Packs` ($54.6\%$ negative, $18,046/33,077$). Reference category ($\text{OR} = 1.00$).

    7. Explicit Git Commit (DECISION-002):
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "feat(voc): integrate econometric decoupling proofs, 4 eras, 2026 reversal, and priority matrix"`
       Wait for pre-commit hook (~80s). Confirm with `git log -1 --oneline`.
       AVOID: Never run `git add -A` or `git add .`.
  </action>
  <verify>
    Execute validation check via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    # Verify Decoupling statistical proofs
    $requiredTokens = @(
      "12.83",
      "0.0003",
      "11.55",
      "4.23",
      "1.74",
      "3.65",
      "45.7%",
      "7.56 pts",
      "-44.5%",
      "1.67&times;",
      "figure1_monthly_nss_trajectory.png",
      "figure2_yearly_leadership_strip.png",
      "figure3_priority_matrix.png",
      "figure4_banglalink_reversal_decomposition.png",
      "v11.8.0",
      "-7.59%",
      "v11.9.1",
      "+15.54",
      "+10.33",
      "66.5%",
      "+5.21",
      "33.5%",
      "11,027.6",
      "9.49",
      "6.44"
    )
    foreach ($token in $requiredTokens) {
      if (-not ($html -match [regex]::Escape($token))) {
        throw "Missing required decoupling / volatility / matrix token: $token"
      }
    }
    # Verify rejection of stale tokens
    $staleTokens = @("6.95", "57.4%", "18.42")
    foreach ($stale in $staleTokens) {
      if ($html -match [regex]::Escape($stale)) {
        throw "Stale uncalibrated token detected in HTML: $stale"
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
    Write-Host "Task 1 verification PASSED!" -ForegroundColor Green
    ```
  </verify>
  <done>
    Cross-Layer Decoupling proofs ($\chi^2=12.83, \text{OR}=4.23$), Non-Surge test, Surge-Filtered RMSSD ($-44.5\%$), Threshold invariance ($44/35/23$), 4 Market Eras (`figure1` & `figure2`), Spring 2024 telemetry, 2026 Dual-Track turnaround (`figure4`), and Priority Matrix (`figure3`) are fully embedded in `projects/voc-telecom.html`, CON-01 and DECISION-003 pass, and git commit is verified.
  </done>
</task>

<task type="auto">
  <name>Integrate Canary Release Gating (Algorithm 1), Executive Decision Matrix, Gradio Demo, and 8-Module Audit</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Add the Production Governance, Canary Release Gating, Interactive Gradio Demo, Tooling, and 8-Module Integrity Audit suite to `projects/voc-telecom.html`:

    1. Canary Release Gating Protocol — Algorithm 1:
       - Implement visual pseudo-code card and mathematical formulation:
         - **Input Parameters:** Canary stream $\mathcal{R}_{\text{canary}} = \{r_1, \dots, r_n\}$, adaptive window $W \in [30, 100]$ reviews, significance $\alpha = 0.01$, historical baseline defect rate $p_{\text{base}} = 0.046$ ($4.6\%$), emergency abort threshold $\tau_{\text{abort}} = 0.12$ ($12\%$).
         - **Inference & Accumulation:** Infer $(\hat{c}_i, \hat{s}_i)$ for each review $r_i$; increment $N_{\text{login\_neg}}$ when $\hat{c}_i = \text{App Login \& Technical Bugs}$ AND $\hat{s}_i = \text{Negative}$.
         - **Exact Binomial Test:** Once $N_{\text{canary}} \ge W$, compute exact binomial test $p_{\text{val}} \leftarrow \text{BinomialTest}(k = N_{\text{login\_neg}}, n = N_{\text{canary}}, p = p_{\text{base}})$.
         - **Decision Gates:**
           - If $p_{\text{val}} < \alpha$ AND $(N_{\text{login\_neg}} / N_{\text{canary}}) \ge \tau_{\text{abort}}$ $\to$ **`ROLLBACK`** (halt CI/CD deployment and reroute traffic to previous stable build).
           - Else if $p_{\text{val}} < \alpha$ $\to$ **`HOLD`** (Alert Level 2: freeze rollout cohort expansion and trigger engineering triage).
           - Else $\to$ **`PROCEED`** (advance rollout tier).
         - Complementarity: Acts as a semantic early-warning circuit breaker alongside APM crash reporters (e.g., Firebase Crashlytics) for silent, unhandled authentication/session degradation.

    2. Executive Operational Decision Matrix (Alert Levels 1–4) & 4 Managerial Rules:
       - Format responsive glassmorphic table for Alert Levels 1–4:
         - **Level 1 (Routine):** $p \ge 0.05, |\Delta\text{NSS}| < 5.0$, balanced across categories $\to$ Standard customer service queue, routine sprint backlog logging $\to$ Maintain baseline satisfaction.
         - **Level 2 (Warning):** $p < 0.05, 5.0 \le |\Delta\text{NSS}| < 10.0$, centered in Offers & Data Packs $\to$ Alert Commercial Division, re-evaluate bundle validity & pricing $\to$ Commercial churn mitigation & pricing retention.
         - **Level 3 (Critical Circuit):** $p < 0.01, \Delta\text{NSS} \le -10.0$, centered in Client App Software $\to$ Immediate CI/CD canary freeze, rollback to previous stable APK, **zero RF field dispatch** $\to$ Protect high-CLV digital subscribers.
         - **Level 4 (Promotional Distortion):** $\Delta V \ge 50\%, \Delta\text{Gen} \ge 5.0$, centered in General Appreciation $\to$ Deploy Dual-Track Surge-Adjust Filter (Rule 2), isolate Track A for engineering evaluation $\to$ Prevent executive complacency from promo noise.
       - Highlight 4 Managerial Rules:
         - Rule 1: Cross-Layer SLA Decoupling (Core Infrastructure SLA vs. Digital Gateway SLA).
         - Rule 2: Dual-Track Surge-Adjusted Triage (separate Track A operational engineering from Track B promotional surges).
         - Rule 3: Canary Release Telemetry Gating (Algorithm 1 circuit breaker).
         - Rule 4: Regulatory In-App Prompt Transparency (countering inorganic prompt timing manipulation).

    3. Interactive Gradio Demo (`demo/app.py` & `demo/requirements.txt`):
       - Present Gradio Web GUI architecture (`gr.Blocks`, soft theme, port 7860).
       - Preloaded models: Hero Soft-Voting Ensemble + Category Model + Automated Language Classifier.
       - Real-time diagnostic outputs: Detected Language & Code-Mixed badge, Sentiment Polarity with confidence distribution, Operational Domain with top-5 confidence, and Subsystem Attribution routing at $1.42\text{ ms}$ CPU latency / $450\text{ rps}$.
       - 5 benchmark examples (Banglish login crash, Bangla 4G buffering, Banglish billing deduction, Banglish offer appreciation, English smooth app).

    4. Google Colab GPU Suites & Hugging Face Hub Model Card Pipeline:
       - Document 3 active Colab notebooks:
         - `dl/telecom_voc_master_unified_colab.ipynb` (unified ML + BiLSTM + MiniLM suite with 1-click export).
         - `dl/telecom_voc_banglabert_finetuning_colab.ipynb` (5-fold stratified CV & 12-layer fine-tuning of `csebuetnlp/banglabert`).
         - `dl/telecom_voc_deep_learning_colab.ipynb` (focused sentiment DL benchmarking on T4 GPU).
       - Document Hugging Face model deployment helper `scripts/upload_to_huggingface.py` with `transformers.pipeline` usage pattern (DECISION-003 compliant: no fabricated live Space URLs).

    5. 8-Module Automated Integrity Audit (`scripts/audit_project_integrity.py`):
       - Detail 8-Module Audit Architecture:
         - Module 1: Canonical dataset boundary & row integrity ($N = 655,649$, GP $320,140$, Robi $198,378$, BL $137,131$, dates 2016-08-01 to 2026-09-30).
         - Module 2: Gold standard independence & inter-annotator agreement ($\kappa = 0.5762$ sentiment, $\kappa = 0.5369$ category).
         - Module 3: Model benchmark reproducibility (5-fold CV accuracies).
         - Module 4: Exact mathematical invariants of NSS & additive decomposition ($0$ residual across all 240 transitions).
         - Module 5: Time-series aggregation & surge-filtered RMSSD.
         - Module 6: Proposition 1 & 2 econometric proofs ($\chi^2(1) = 12.83, p = 0.0003, \text{OR} = 4.23$).
         - Module 7: Spring 2024 counterfactual telemetry (`v11.8.0` vs. `v11.9.1`).
         - Module 8: Double-blind anonymity & deliverable completeness check.
       - Note: All active assertions passed 100% in live automated execution.

    6. Explicit Git Commit (DECISION-002):
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "feat(voc): add canary gating algorithm 1, executive matrix, gradio demo, and integrity audit"`
       Wait for pre-commit hook (~80s). Confirm with `git log -1 --oneline`.
       AVOID: Never run `git add -A` or `git add .`.
  </action>
  <verify>
    Execute validation check via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    # Verify Canary & Governance tokens
    $requiredTokens = @(
      "Algorithm 1",
      "p_{\text{base}}",
      "0.046",
      "\tau_{\text{abort}}",
      "0.12",
      "ROLLBACK",
      "HOLD",
      "PROCEED",
      "Level 1 (Routine)",
      "Level 2 (Warning)",
      "Level 3 (Critical Circuit)",
      "Level 4 (Promotional Distortion)",
      "demo/app.py",
      "telecom_voc_master_unified_colab.ipynb",
      "telecom_voc_banglabert_finetuning_colab.ipynb",
      "upload_to_huggingface.py",
      "audit_project_integrity.py",
      "Module 1",
      "Module 6",
      "Module 8"
    )
    foreach ($token in $requiredTokens) {
      if (-not ($html -match [regex]::Escape($token))) {
        throw "Missing required governance / demo / audit token: $token"
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
    Canary Release Gating Algorithm 1, Executive Decision Matrix (Levels 1–4), 4 Managerial Rules, Gradio Demo architecture, Colab suites, HF tooling, and 8-Module Automated Integrity Audit are integrated into `projects/voc-telecom.html`, CON-01 and DECISION-003 pass, and git commit is verified.
  </done>
</task>

<task type="auto">
  <name>Calibrate Portfolio Project Card Highlights in js/data/projects.js and Verify Compliance</name>
  <files>
    js/data/projects.js
    projects/voc-telecom.html
  </files>
  <action>
    Synchronize the portfolio project card in `js/data/projects.js` and execute complete compliance & quality verification across both files:

    1. Calibrate `js/data/projects.js` (`voc-telecom` entry):
       Update highlights to reflect the newly integrated Phase 2 breakthroughs:
       ```javascript
       highlights: [
         "BUET BanglaBERT SOTA: 91.60% CV Acc (0.8598 F1)",
         "Hero Soft-Voting: 1.42 ms / 450 rps CPU (87.4% Acc)",
         "Cross-Layer Decoupling: χ²(1)=12.83, OR=4.23 (p=0.0003)"
       ],
       tags: ["BUET BanglaBERT", "Hero Ensemble", "Cross-Layer Decoupling", "Canary Gating", "655.6k Benchmark"],
       ```

    2. Verify `js/data/projects.js` syntax using Python:
       Ensure `projectsData` remains valid ES6 module with correct brackets, quotes, and commas.

    3. Comprehensive Quality & Compliance Audit:
       - **CON-01:** Verify the upfront Executive Story card at `projects/voc-telecom.html:102-114` (`96 Words • Executive Narrative`, `The Story Behind the Data`) is untouched.
       - **DECISION-003:** Verify zero occurrences of `"manuscript.pdf"`, `"manuscript_twocolumn.pdf"`, `"Submitted to Expert Systems"`, or fake deployed Hugging Face Space URLs in both `projects/voc-telecom.html` and `js/data/projects.js`.
       - **Visual Asset Links:** Verify all 5 publication figures (`figure0_system_architecture.png`, `figure1_monthly_nss_trajectory.png`, `figure2_yearly_leadership_strip.png`, `figure3_priority_matrix.png`, `figure4_banglalink_reversal_decomposition.png`) are referenced and point to valid files in `assets/images/projects/voc/`.
       - **KaTeX Formulas:** Verify that math delimiters (`$$...$$` and `$...$`) are well-formed and paired.

    4. Explicit Git Commit (DECISION-002):
       Run: `git add js/data/projects.js projects/voc-telecom.html`
       Run: `git commit -m "refactor(voc): synchronize portfolio card highlights and verify compliance"`
       Wait for pre-commit hook (~80s). Confirm with `git log -1 --oneline`.
       AVOID: Never run `git add -A` or `git add .`.
  </action>
  <verify>
    Execute validation check via PowerShell and Python:
    ```powershell
    # 1. Verify js/data/projects.js content
    $js = Get-Content js/data/projects.js -Raw
    if (-not ($js -match "1\.42 ms / 450 rps CPU" -and $js -match "Cross-Layer Decoupling: χ²\(1\)=12\.83" -and $js -match "Canary Gating")) {
      throw "js/data/projects.js highlights or tags not properly updated!"
    }

    # 2. Verify all 5 publication figure files exist on disk
    $figFiles = @(
      "assets/images/projects/voc/figure0_system_architecture.png",
      "assets/images/projects/voc/figure1_monthly_nss_trajectory.png",
      "assets/images/projects/voc/figure2_yearly_leadership_strip.png",
      "assets/images/projects/voc/figure3_priority_matrix.png",
      "assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png"
    )
    foreach ($fig in $figFiles) {
      if (-not (Test-Path $fig)) {
        throw "Figure asset missing on disk: $fig"
      }
    }

    # 3. Verify HTML embeds all 5 figures
    $html = Get-Content projects/voc-telecom.html -Raw
    foreach ($fig in $figFiles) {
      $base = [System.IO.Path]::GetFileName($fig)
      if (-not ($html -match $base)) {
        throw "HTML does not embed figure: $base"
      }
    }

    # 4. Strict DECISION-003 check
    if ($html -match "manuscript\.pdf" -or $html -match "Expert Systems with Applications" -or $html -match "Submitted to") {
      throw "DECISION-003 violation: Prohibited text detected in HTML!"
    }
    if ($js -match "manuscript\.pdf" -or $js -match "Submitted to") {
      throw "DECISION-003 violation: Prohibited text detected in JS!"
    }

    # 5. CON-01 check
    if (-not ($html -match "96 Words • Executive Narrative")) {
      throw "CON-01 violation: Executive Narrative modified!"
    }

    Write-Host "Task 3 verification PASSED!" -ForegroundColor Green
    ```
  </verify>
  <done>
    `js/data/projects.js` highlights and tags are synchronized with Phase 2 breakthroughs, all 5 figures are confirmed present on disk and embedded in HTML, CON-01 and DECISION-003 compliance is verified, and git commit is verified.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `projects/voc-telecom.html` presents Cross-Layer Decoupling proofs ($\chi^2(1)=12.83, p=0.0003, \text{OR}=4.23, \text{RR}=1.74$) and Non-Surge robustness ($\text{OR}=3.65$)
- [ ] Surge-Filtered RMSSD is documented ($-44.5\%$ BL reduction; BL/Robi ratio $1.67\times$) alongside verified threshold counts ($44/35/23$ vs $46/32/24$)
- [ ] Reconciled 4 Market Eras (`figure1` & `figure2`), Spring 2024 build telemetry, and 2026 Banglalink Turnaround Decomposition (`figure4`: $+15.54 = +10.33\text{ surge } [66.5\%] + +5.21\text{ technical } [33.5\%]$) are embedded
- [ ] Strategic Priority Matrix (`figure3`) is embedded with $N=88,181$, $\chi^2(3)=11,027.6$, Billing $\text{OR}=9.49$, App Login $\text{OR}=6.44$
- [ ] Canary Release Gating (Algorithm 1) and Executive Operational Decision Matrix (Levels 1–4 & 4 Managerial Rules) are documented
- [ ] Interactive Gradio demo (`demo/app.py`), Colab GPU suites, HF tooling, and 8-Module Automated Integrity Audit (`audit_project_integrity.py`) are documented
- [ ] `js/data/projects.js` highlights and tags reflect Phase 2 breakthroughs with zero syntax errors
- [ ] CON-01 (<140-word Executive Story) and DECISION-003 (zero double-blind leaks) strictly preserved
- [ ] Every commit stages explicit file paths only (`git add ...`) and lands cleanly

## Success Criteria
- [ ] All tasks verified passing via PowerShell test commands
- [ ] All must-haves confirmed
- [ ] No regressions across portfolio pages

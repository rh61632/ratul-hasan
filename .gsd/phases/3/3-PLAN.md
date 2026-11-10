---
phase: 3
plan: 1
wave: 1
depends_on: []
files_modified:
  - projects/voc-telecom.html
autonomous: true
gap_closure: false

must_haves:
  truths:
    - "Hardcoded meta pill ('96 Words • Executive Narrative') is removed cleanly from 'The Story Behind the Data' card in projects/voc-telecom.html with zero vibe code meta labels remaining on the page (REQ-06)"
    - "The 96-word continuous Executive Story card prose is preserved verbatim at the top of the case study (CON-01)"
    - "A responsive, glassmorphic 3-button segmented Perspective Switcher is rendered at the top of main above Section 1 with zero horizontal overflow on 390px mobile viewports (REQ-07, NFR-01)"
    - "Overall Perspective (default active on load) renders the complete 7-section case study cleanly as established in Phase 1 and verified in Phase 2"
    - "Technical Perspective reveals a dedicated deep engineering architecture block (parallel scrapers, 661.2k -> 655.6k deduplication, Groq seed dataset, dual character n-gram TF-IDF, soft-voting ensemble [2, 2, 1] with ComplementNB probability calibration, BUET BanglaBERT fine-tuning, MiniLM embeddings, PyTorch BiLSTM + Attention, and rule-based language detector) alongside quantitative Sections 1–5 & 7, while hiding commercial marketing roadmaps"
    - "Business Perspective reveals a dedicated jargon-free executive suite (#view-business) with plain-English KPI cards, Market Standing table, 6 verified visual plots, 4 Core Business Discoveries, Cross-Industry Executive Implications, and Operator Strategic Action Playbooks, while completely hiding all technical and CLI sections"
    - "Strict zero-jargon audit confirms 0 occurrences of forbidden technical, ML, or statistical terms in visible innerText when Business mode is active"
    - "Vanilla JS controller supports live DOM click toggling with smooth transitions, aria-pressed accessibility, and URL query parameter initialization (?view=technical, ?view=business, ?view=overall)"
    - "Headless Microsoft Edge validates zero broken images, zero horizontal overflow (1440px and true 390px mobile iframe), and dark/light theme contrast across all 3 perspectives"
    - "Full zero-paper-leak scan confirms 0 confidential publication terms, 0 KaTeX dependencies, and 0 non-project figures across all tracked files (CON-SEC)"
    - "Working tree has clean git status with explicit staging of modified target files (DECISION-002, NFR-03)"
  artifacts:
    - "projects/voc-telecom.html"
  key_links:
    - "Top 3-button switcher buttons update aria-pressed and toggle data-perspective-group visibility via CSS hidden class"
    - "URL search parameters (?view=technical, ?view=business, ?view=overall) initialize the active perspective on load and synchronize on switch"
    - "Business perspective reuses verified 300 DPI plot assets (net_sentiment_score_comparison_bars.png, operator_sentiment_distribution_bars.png, multi_year_sentiment_trend_line.png, nss_stability_volatility_bars.png, operator_category_complaint_distribution_bars.png, category_sentiment_stacked_bars.png) with zero broken image paths"
---

# Plan 3.1: Interactive Perspective Switcher & Story Card Polish

<objective>
Polish the upfront story narrative card by removing the robotic meta label (`"96 Words • Executive Narrative"`) and implement an interactive, glassmorphic 3-button Perspective Switcher (`Overall Perspective` [default], `Technical Perspective` [deep engineering architecture], and `Business Perspective` [100% jargon-free executive suite]) at the top of `projects/voc-telecom.html`. Verify seamless view toggling, URL query synchronization, zero broken images, zero horizontal overflow across desktop (`1440px`) and true mobile (`390px` iframe viewport), dark/light theme parity, zero forbidden jargon in Business mode, and zero confidential paper leaks.

Purpose: Provide an adaptable case study experience tailored to diverse portfolio audiences—letting technical leads inspect end-to-end data pipelines, ML/DL models, and statistical tests, while executive leadership consumes actionable business discoveries and strategic operator playbooks completely free of engineering jargon.
Output: Enhanced `projects/voc-telecom.html` with polished story card, deep technical architecture block, comprehensive business suite, responsive vanilla JS perspective controller, and comprehensive Headless Edge verification suites in artifact scratch.
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/REQUIREMENTS.md
- .gsd/ROADMAP.md
- .gsd/DECISIONS.md
- projects/voc-telecom.html
- temp/telecom-Voice-of-Customer_intelligence/README.md
- temp/telecom-Voice-of-Customer_intelligence/ml/README.md
- temp/telecom-Voice-of-Customer_intelligence/ml/train_ensemble.py
- temp/telecom-Voice-of-Customer_intelligence/dl/README.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Story Card Polish, Top Perspective Switcher Control & Multi-Perspective HTML Architecture (REQ-06, REQ-07, CON-01)</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Modify `projects/voc-telecom.html` to remove the hardcoded story pill, add the top-of-page 3-button switcher, and structure page elements into three cleanly partitioned perspectives using data attributes (`data-perspective-group`):

    1. **Story Card Polish (REQ-06, CON-01):**
       - In Section 1, locate the Executive Narrative Story card (`The Story Behind the Data`).
       - Remove the hardcoded meta pill element: `<span class="text-[11px] font-mono text-slate-400 dark:text-slate-500">96 Words • Executive Narrative</span>` (line ~117).
       - Keep the `"The Story Behind the Data"` badge intact.
       - Preserve the 96-word continuous story paragraph verbatim:
         `"Over 180 million subscribers voice daily frustrations across app stores, yet their feedback remained buried in noisy Banglish and deceptively simple star ratings. We assumed standard AI could easily parse bilingual slang, and that negative reviews simply tracked network coverage drops. The reality was startling: abrupt app UI redesigns and unexpected tariff shifts triggered far more user churn than poor signal ever did. By fine-tuning a BanglaBERT intelligence engine across 655,000+ customer reviews, we transformed raw rants into instant root-cause attribution—empowering telecom leaders to diagnose and fix breaking customer pain points within hours instead of quarters."`
       - Audit the rest of the document to ensure zero other robotic meta pills or word-count tags exist on the page.

    2. **Glassmorphic 3-Button Perspective Switcher (REQ-07):**
       - At the very top of `<main>` (immediately before the Section 1 Hero container), insert a sleek, glassmorphic segmented perspective control:
         ```html
         <div class="mb-8 p-2 rounded-2xl bg-white/70 dark:bg-surface-card/70 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
           <div class="flex items-center gap-2.5 px-3 py-1">
             <span class="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse"></span>
             <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">View Perspective:</span>
           </div>
           <div class="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-white/5" role="group" aria-label="Perspective Switcher">
             <button id="btn-perspective-overall" data-perspective="overall" aria-pressed="true" class="perspective-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 bg-brand-600 text-white shadow-md">
               <i class="fa-solid fa-layer-group text-xs"></i> <span>Overall Perspective</span>
             </button>
             <button id="btn-perspective-technical" data-perspective="technical" aria-pressed="false" class="perspective-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5">
               <i class="fa-solid fa-microchip text-xs"></i> <span>Technical Perspective</span>
             </button>
             <button id="btn-perspective-business" data-perspective="business" aria-pressed="false" class="perspective-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5">
               <i class="fa-solid fa-briefcase text-xs"></i> <span>Business Perspective</span>
             </button>
           </div>
         </div>
         ```
       - Ensure `flex-wrap` is applied so that buttons wrap cleanly on true 390px mobile viewports without horizontal scroll overflow.

    3. **Perspective Group Tagging across Existing Sections:**
       - Tag Section 1 storytelling card (`The Story Behind the Data`) and Section 6 (`Operator Strategic Roadmaps`) with `data-perspective-group="overall-only"` (visible in Overall, hidden in Technical and Business).
       - Tag Section 1 Hero technical badges, CLT sampling box, Hero 4-stat cards, Section 2 (300 DPI Publication Suite), Section 3 (10-Year Annual Benchmarks), Section 4 (Shock Attribution Engine & Surge Diagnostics), Section 5 (Model Benchmarks, Human Gold Standard, Ablation Studies, Language Detector), and Section 7 (CLI Commands & Colab GPU Suites) with `data-perspective-group="overall-tech"` (visible in Overall and Technical, hidden in Business).

    4. **Deep Engineering Architecture Block for Technical Perspective (`data-perspective-group="tech-only"`):**
       - Create an authoritative, high-density system architecture section displayed exclusively in Technical Perspective (`class="tech-architecture-block hidden" data-perspective-group="tech-only"`):
         - **Header:** `Production Machine Learning Pipeline & Data Architecture Blueprint`
         - **Component 1: Parallel Scraper & Strict Deduplication Engine:**
           - Document multi-threaded review ingestion (`scraped_data_global/pipeline/run_parallel_scrapers.py`) fetching raw reviews with Google Play metadata (`review_id`, `app_version`, `thumbs_up`, `timestamp`).
           - Detail strict primary-key deduplication on canonical `review_id` compressing master raw repository (`661,160` reviews) to continuous 3,713-day window (`655,649` reviews, Aug 1, 2016 – Sep 30, 2026).
         - **Component 2: Weak Supervision & Seed Dataset Formulation:**
           - Groq cloud inference (`qwen/qwen3.8-27b`) generating initial weak labels for 4,500 balanced multi-operator seed reviews across Grameenphone, Robi, and Banglalink.
         - **Component 3: Dual Character N-Gram Feature Engineering:**
           - Configuration: `TfidfVectorizer(analyzer="char_wb", ngram_range=(2, 5), min_df=3, sublinear_tf=True)`.
           - Sub-word boundary slicing capturing phonetic roots across non-standardized Banglish spellings (`faltu`, `faaltu`, `faltoo`, `baje`, `vaalo`) while processing native Bengali script (`U+0980`–`U+09FF`) and English in a single sparse feature space.
         - **Component 4: Production Tri-Classifier Soft-Voting Ensemble:**
           - Ensemble voting architecture (`VotingClassifier(voting="soft", weights=[2, 2, 1])`) combining:
             1. Multinomial Logistic Regression (`class_weight="balanced"`, `max_iter=1000`, weight = 2) for well-regularized posterior bounds on minority neutral classes.
             2. Platt-Calibrated Support Vector Classifier (`CalibratedClassifierCV(LinearSVC(class_weight="balanced"))`, weight = 2) for maximum margin separation.
             3. Complement Naive Bayes (`ComplementNB(norm=True)`, weight = 1) acting as an empirical Bayesian prior regularizer that moderates overconfident probabilities (taming mean maximum confidence from `84.76% -> 74.47%`).
           - Benchmarked against statistical baseline floor: `DummyClassifier(strategy="most_frequent")` under `StratifiedKFold(n_splits=5, shuffle=True, random_state=42)`.
         - **Component 5: Neural Transformer Fine-Tuning & Semantic Embeddings:**
           - BUET BanglaBERT (`csebuetnlp/banglabert`, 110M params, 12 layers): Full end-to-end backpropagation delivering 91.60% Accuracy / 0.8598 Macro-F1 on Sentiment and 85.27% Accuracy on Categories (outperforming static frozen feature extractor by +10.39%).
           - Multilingual MiniLM (`paraphrase-multilingual-MiniLM-L12-v2`, 384-dim dense vectors) and PyTorch `BiLSTM + Bahdanau Attention` recurrent neural architecture.
         - **Component 6: Pre-Processing Linguistic Router:**
           - Standalone rule-based language detector (`ml/language_detector.py` integrated in `ml/predict.py`) executing Unicode Bengali script block check (`U+0980`–`U+09FF` >= 20%) followed by 80+ Banglish phonetic lexical marker matching and `is_code_mixed` telemetry.

    5. **Comprehensive Business Perspective Suite (`#view-business`, `data-perspective-group="business"`):**
       - Create a complete, standalone, executive-level business perspective container (`id="view-business" class="hidden" data-perspective-group="business"`):
         - **STRICT JARGON EXCLUSION RULE:** Confirm zero occurrences of ANY forbidden terms in this section:
           `NLP`, `BERT`, `BanglaBERT`, `Ensemble`, `TF-IDF`, `Logistic`, `LinearSVC`, `SVM`, `ComplementNB`, `BiLSTM`, `MiniLM`, `Stratified`, `Cross-Validation`, `Macro-F1`, `CLT`, `RMSSD`, `SSI`, `IQR`, `Chi-square`, `χ²`, `Fisher`, `p-value`, `Odds Ratio`, `R²`, `300 DPI`, `Sub-ms`, `CPU`, `GPU`, `Python`, `CLI`, `Colab`, `.ipynb`, `Cohen's Kappa`, `LLM`, `n-gram`.
         - **Executive Header & Overview:**
           - Title: `Telecom Customer Experience & Strategic Market Intelligence`
           - Subtitle: `Executive insights and operational playbooks derived from 655,000+ subscriber feedback records over a 10-year observation period across Bangladesh's three leading telecom operators.`
         - **4 Plain-English KPI Cards:**
           1. *Total Customer Feedback Analyzed:* `655,649` verified subscriber reviews across 10 continuous years (2016–2026).
           2. *Market Satisfaction Leader:* `+65.9%` Net Customer Approval for Robi (closely followed by Grameenphone at `+64.4%`).
           3. *Primary Customer Churn Driver:* Mobile app login failures and software bugs drive `4×` more negative feedback than cellular network drops.
           4. *Highest Dissatisfaction Category:* Over `90%` of all balance deduction and billing inquiries express critical user dissatisfaction.
         - **Operator Market Standing Comparison Table:**
           - Clean, readable table comparing Grameenphone (MyGP), Robi (My Robi), and Banglalink (MyBL):
             - Customer Approval Rating (Grameenphone +64.4%, Robi +65.9%, Banglalink +56.2% / +81.9% peak)
             - Core Customer Commendation (GP: expansive feature set; Robi: stable user experience; BL: agile promotions & rewards)
             - Primary Friction Point (GP: balance deduction transparency; Robi: login session timeouts; BL: app launch freezes & indoor coverage)
             - Market Role (GP: Market Anchor; Robi: Customer Experience Leader; BL: Fast-Growing Challenger)
         - **6 Intuitive Visual Charts (reusing existing verified plot PNGs with plain-English business captions):**
           1. *Customer Satisfaction Comparison:* `net_sentiment_score_comparison_bars.png` (Visualizing net customer approval across the 3 operators).
           2. *Customer Sentiment Share:* `operator_sentiment_distribution_bars.png` (Proportion of positive, neutral, and dissatisfied subscribers).
           3. *10-Year Long-Term Customer Trajectory (2016–2026):* `multi_year_sentiment_trend_line.png` (Longitudinal customer sentiment tracking major telecom transitions).
           4. *Month-to-Month Service Consistency:* `nss_stability_volatility_bars.png` (Measuring consistency of user satisfaction over 81 consecutive months).
           5. *Where Customers Voice Grievances:* `operator_category_complaint_distribution_bars.png` (Breakdown of customer complaints by operational department).
           6. *Grievance Intensity by Department:* `category_sentiment_stacked_bars.png` (Showing that billing and technical bugs are pure customer pain points).
         - **4 Core Business Discoveries:**
           1. *Software Stability Outweighs Network Strength:* Subscribers are significantly more likely to leave a 1-star review when an application update crashes than when cellular data speeds dip.
           2. *Review Surges Mask Chronic Dissatisfaction:* Promotional marketing campaigns flood app stores with short casual praise, temporarily masking recurring billing grievances.
           3. *Billing Deductions Generate Universal Dissatisfaction:* Over 9 out of 10 customer inquiries regarding balance deductions represent severe customer friction.
           4. *Abrupt Interface Changes Trigger Immediate Churn:* Unannounced user interface overhauls and authentication resets consistently cause steep double-digit declines in customer satisfaction.
         - **Cross-Industry Executive Implications:**
           - Strategic lessons for digital banks, fintech wallets, and mobile subscription platforms regarding release gating, automated token renewal, and transparent billing audit trails.
         - **Operator Strategic Action Playbooks:**
           - Plain-English strategic recommendations for Grameenphone (MyGP: proactive balance transparency and micro-pack rollover), Robi (My Robi: seamless biometric authentication and simplified subscription cancellation), and Banglalink (MyBL: staged rollout release governance and edge network caching).

    AVOID: Altering the 96-word continuous story card text (`CON-01`).
    AVOID: Using any forbidden technical, ML, or statistical jargon in `#view-business`.
    AVOID: Removing or modifying any of the 13 verified project PNG plot files.
  </action>
  <verify>
    powershell -NoProfile -Command "$content = Get-Content -Raw projects/voc-telecom.html; if ($content -match '96 Words • Executive Narrative') { Write-Error 'Meta pill still present'; exit 1 }; if ($content -notmatch 'btn-perspective-overall' -or $content -notmatch 'btn-perspective-technical' -or $content -notmatch 'btn-perspective-business') { Write-Error 'Switcher buttons missing'; exit 1 }; if ($content -notmatch 'view-business') { Write-Error 'Business view missing'; exit 1 }; Write-Output 'HTML_MARKUP_VERIFIED_CLEAN'"
  </verify>
  <done>
    `projects/voc-telecom.html` has the robotic meta pill removed, includes the 3-button switcher, tags sections with perspective groups, contains the deep technical architecture block, and embeds the complete jargon-free business suite.
  </done>
</task>

<task type="auto">
  <name>Task 2: Vanilla JavaScript Perspective Switcher Controller & URL Query State Synchronization (REQ-07, NFR-01, NFR-02)</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Implement an accessible, responsive, zero-dependency vanilla JavaScript perspective controller in the `<script>` section of `projects/voc-telecom.html`:

    1. **Perspective State Model & Configuration:**
       - Define supported perspective modes: `'overall'` (default), `'technical'`, `'business'`.
       - Map perspective modes to element display rules:
         - `'overall'`: Show `[data-perspective-group="overall-tech"]` and `[data-perspective-group="overall-only"]`; hide `[data-perspective-group="tech-only"]` and `[data-perspective-group="business"]`.
         - `'technical'`: Show `[data-perspective-group="overall-tech"]` and `[data-perspective-group="tech-only"]`; hide `[data-perspective-group="overall-only"]` and `[data-perspective-group="business"]`.
         - `'business'`: Show `[data-perspective-group="business"]`; hide `[data-perspective-group="overall-tech"]`, `[data-perspective-group="overall-only"]`, and `[data-perspective-group="tech-only"]`.

    2. **DOM Visibility & CSS Class Toggling:**
       - Use Tailwind CSS `hidden` class to show/hide containers cleanly.
       - Ensure hidden elements are set to `classList.add('hidden')` and visible elements are set to `classList.remove('hidden')`.
       - Update button visual states:
         - Active button: `classList.add('bg-brand-600', 'text-white', 'shadow-md')`, `classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-white/60')`, `setAttribute('aria-pressed', 'true')`.
         - Inactive buttons: `classList.remove('bg-brand-600', 'text-white', 'shadow-md')`, `classList.add('text-slate-600', 'dark:text-slate-300')`, `setAttribute('aria-pressed', 'false')`.

    3. **URL Query Parameter Synchronization:**
       - On page load (`DOMContentLoaded`), read `window.location.search`.
       - If `?view=technical`, activate Technical Perspective.
       - If `?view=business`, activate Business Perspective.
       - If `?view=overall` or omitted / invalid, activate Overall Perspective.
       - When user clicks a perspective button, update the URL query parameter using `history.replaceState({}, '', url.toString())` without reloading the page.

    4. **Image Loading & Layout Safety:**
       - Ensure all `<img>` elements within `#view-business` load their image assets properly upon reveal (`loading="eager"` or triggering lazy-load recalculation).
       - Ensure container has `overflow-hidden` or `overflow-x-auto min-w-0` where necessary so table containers or visual grids cause zero horizontal page overflow.

    5. **Keyboard & Screen Reader Accessibility:**
       - Ensure buttons are reachable via Tab key with visible focus outline.
       - Maintain valid ARIA attributes (`role="group"`, `aria-label="Perspective Switcher"`, `aria-pressed="true|false"`).

    AVOID: Relying on third-party frameworks (keep purely vanilla JavaScript).
    AVOID: Page reload on perspective toggle.
    AVOID: Layout shift or residual margin/padding from hidden containers.
  </action>
  <verify>
    powershell -NoProfile -Command "$content = Get-Content -Raw projects/voc-telecom.html; if ($content -notmatch 'data-perspective-group' -or $content -notmatch 'history.replaceState') { Write-Error 'Perspective JS controller missing'; exit 1 }; Write-Output 'PERSPECTIVE_CONTROLLER_VERIFIED_CLEAN'"
  </verify>
  <done>
    Vanilla JavaScript controller smoothly switches between Overall, Technical, and Business perspectives, synchronizes URL query parameters, updates button styling and ARIA states, and handles image visibility.
  </done>
</task>

<task type="auto">
  <name>Task 3: Automated Multi-Perspective Headless Edge Verification, Strict Zero-Jargon Audit & Explicit Git Commit (REQ-06, REQ-07, NFR-01-NFR-03, CON-SEC)</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Create and execute an automated Python verification test runner in the artifact scratch directory (`C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/verify_phase3_perspectives.py`) using `msedge.exe` in headless mode.

    The test script must rigorously validate:
    1. **Story Card Polish Verification (REQ-06):**
       - Parse `projects/voc-telecom.html` DOM to confirm `"96 Words • Executive Narrative"` does NOT exist anywhere in the document.
       - Confirm zero other "vibe code" meta pill badges exist.
       - Validate that the 96-word continuous Executive Story card (`CON-01`) is preserved verbatim.

    2. **Overall Perspective Verification (Default Initial Load):**
       - Load `http://localhost:8000/projects/voc-telecom.html`.
       - Confirm `btn-perspective-overall` has `aria-pressed="true"`.
       - Confirm all 7 case study sections are visible (`data-perspective-group="overall-tech"` and `"overall-only"`).
       - Confirm `tech-only` architecture block and `business` view are hidden (`classList.contains('hidden')`).
       - Validate 0 broken images (`img.complete && img.naturalWidth > 0`).
       - Validate zero horizontal overflow (`scrollWidth <= clientWidth`) on desktop (1440px) and true mobile (390px iframe viewport).

    3. **Technical Perspective Verification:**
       - Simulate click on `btn-perspective-technical` or load `?view=technical`.
       - Confirm `btn-perspective-technical` has `aria-pressed="true"`.
       - Confirm `tech-only` architecture block is visible and contains expected keywords (`review_id`, `qwen`, `TfidfVectorizer`, `char_wb`, `VotingClassifier`, `ComplementNB`, `StratifiedKFold`, `BanglaBERT`, `MiniLM`, `BiLSTM`, `language_detector.py`).
       - Confirm storytelling card and commercial roadmaps are hidden.
       - Validate 0 broken images and zero horizontal overflow on desktop (1440px) and true mobile (390px iframe viewport).

    4. **Business Perspective Verification & Strict Zero-Jargon Audit:**
       - Simulate click on `btn-perspective-business` or load `?view=business`.
       - Confirm `btn-perspective-business` has `aria-pressed="true"`.
       - Confirm `#view-business` is visible.
       - Confirm technical sections (`overall-tech` and `tech-only`) are hidden.
       - Extract visible text (`document.body.innerText` excluding hidden elements).
       - **FORBIDDEN JARGON SCAN:** Verify 0 occurrences of ANY of the following terms in the visible Business Perspective text:
         `NLP`, `BERT`, `BanglaBERT`, `Ensemble`, `TF-IDF`, `Logistic`, `LinearSVC`, `SVM`, `ComplementNB`, `BiLSTM`, `MiniLM`, `Stratified`, `Cross-Validation`, `Macro-F1`, `CLT`, `RMSSD`, `SSI`, `IQR`, `Chi-square`, `χ²`, `Fisher`, `p-value`, `Odds Ratio`, `R²`, `300 DPI`, `Sub-ms`, `CPU`, `GPU`, `Python`, `CLI`, `Colab`, `.ipynb`, `Cohen's Kappa`, `LLM`, `n-gram`.
       - Confirm all 6 business charts are visible and valid (`naturalWidth > 0`).
       - Validate zero horizontal overflow on desktop (1440px) and true mobile (390px iframe viewport).

    5. **Dark / Light Theme Parity & Screenshot Capture (NFR-02):**
       - Test light mode and dark mode across all 3 perspectives.
       - Capture visual proof screenshots to `C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/screenshots/`:
         - `perspective_overall_desktop_light.png`
         - `perspective_overall_desktop_dark.png`
         - `perspective_overall_mobile_light.png`
         - `perspective_overall_mobile_dark.png`
         - `perspective_tech_desktop_light.png`
         - `perspective_tech_mobile_light.png`
         - `perspective_business_desktop_light.png`
         - `perspective_business_mobile_light.png`

    6. **Comprehensive Security Zero-Paper-Leak Scan (CON-SEC):**
       - Re-run `run_asset_dom_leak_scan.py` to confirm 0 confidential publication terms, 0 KaTeX dependencies, 0 LaTeX math delimiters, and 0 non-project figures across all tracked files.

    7. **Explicit Git Staging & Commit (DECISION-002, NFR-03):**
       - Check `git status --porcelain`.
       - Stage modified target file explicitly: `git add projects/voc-telecom.html`.
       - Commit with clear message: `feat(voc): add 3-perspective switcher, polish story card, and create jargon-free business view`.
       - Note: Wait ~80s for pre-commit thumbnail hook if applicable.

    AVOID: `git add -A` or `git add .` (`DECISION-002`). Use explicit path `git add projects/voc-telecom.html`.
    AVOID: Leaving any broken images or unhandled perspective states.
  </action>
  <verify>
    powershell -NoProfile -Command "python C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/verify_phase3_perspectives.py"
  </verify>
  <done>
    All multi-perspective headless Edge checks pass with 0 errors. Business perspective verified 100% free of forbidden jargon. Zero broken images. Zero horizontal overflow at 1440px and 390px. Full zero-paper-leak scan passes. projects/voc-telecom.html explicitly staged and committed.
  </done>
</task>

</tasks>

<verification>
After all tasks complete, verify:
- [ ] Story narrative card is polished with `"96 Words • Executive Narrative"` removed and 0 robotic meta pills remaining (REQ-06)
- [ ] The 96-word continuous Executive Story card prose is preserved verbatim (CON-01)
- [ ] 3-button Perspective Switcher renders cleanly at top of `<main>` with zero horizontal overflow on true 390px mobile viewports (REQ-07, NFR-01)
- [ ] Overall Perspective renders complete case study as default on initial page load
- [ ] Technical Perspective reveals deep architecture block (`tech-only`) and technical sections while hiding commercial roadmaps
- [ ] Business Perspective reveals `#view-business` with plain-English KPI cards, Market Standing table, 6 visual charts, 4 discoveries, and strategic playbooks while hiding technical sections
- [ ] Strict zero-jargon audit confirms 0 forbidden technical/statistical terms in visible text of Business Perspective
- [ ] Vanilla JS controller synchronizes active state and URL query parameter (`?view=`) cleanly
- [ ] Headless Microsoft Edge confirms 0 broken images, valid light/dark contrast, and captures refreshed screenshots in `scratch/screenshots/`
- [ ] Tracked repository zero-paper-leak audit passes with 0 leaks (CON-SEC)
- [ ] Working tree has clean git status with explicit staging (DECISION-002, NFR-03)
</verification>

<success_criteria>
- [ ] All 3 tasks executed and verified passing
- [ ] Story card polished organically without robotic meta pill (REQ-06)
- [ ] Three choosable top buttons implemented and fully responsive (REQ-07)
- [ ] Business perspective 100% free of forbidden technical jargon
- [ ] Responsive parity across 1440px desktop and true 390px mobile iframe with 0 overflow (NFR-01)
- [ ] Full dark/light mode legibility matching css/styles.css?v=3.0 (NFR-02)
- [ ] Zero secret paper terms in target files or plan (CON-SEC)
- [ ] Explicit git staging discipline followed (DECISION-002, NFR-03)
</success_criteria>

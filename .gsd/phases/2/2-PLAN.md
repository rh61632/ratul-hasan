---
phase: 2
plan: 1
wave: 1
depends_on: []
files_modified:
  - projects/voc-telecom.html
  - css/styles.css
  - js/data/projects.js
autonomous: true
gap_closure: false

must_haves:
  truths:
    - "Automated HTTP server test validates all portfolio assets, HTML anchors, and 13 project PNG plots return HTTP 200 OK"
    - "Upfront Executive Narrative story card in projects/voc-telecom.html is intact at exactly 96 words (CON-01)"
    - "Tracked-repo zero-leak audit confirms 0 confidential publication terms, 0 KaTeX styles/scripts, 0 LaTeX math delimiters, and 0 non-project figure PNGs (CON-SEC)"
    - "Stale token scan confirms 0 occurrences of deprecated metrics (655,670, 3,716, 123-month) across all tracked web assets and .gsd/ files"
    - "Headless Microsoft Edge verifies ES6 #projects-grid hydration, zero broken images, zero KaTeX leakage, and correct dark/light computed contrast on desktop (1440x900)"
    - "Headless Microsoft Edge validates zero horizontal overflow (scrollWidth <= clientWidth) on true 390px mobile iframe viewport across light and dark modes"
    - "Refreshed verification screenshots are captured to artifact scratch directory scratch/screenshots/"
    - "Working tree has clean git status for target files with explicit staging discipline (DECISION-002, NFR-03)"
  artifacts:
    - "projects/voc-telecom.html"
    - "css/styles.css"
    - "js/data/projects.js"
  key_links:
    - "Local HTTP server serves index.html and projects/voc-telecom.html with all 13 project plots returning 200 OK"
    - "Headless Microsoft Edge evaluates live DOM state and captures screenshots to artifact scratch directory"
    - "js/data/projects.js hydrates index.html #projects-grid with 4+ project cards including voc-telecom"
---

# Plan 2.1: End-to-End Verification & Zero-Paper-Leak Audit

<objective>
Execute comprehensive end-to-end automated verification and zero-paper-leak security audits across the entire portfolio codebase, validating asset delivery (HTTP 200 OK), HTML anchor integrity, upfront 96-word narrative preservation (`CON-01`), stale token elimination, zero confidential publication leaks (`CON-SEC`), and live Headless Microsoft Edge rendering across desktop (`1440x900`) and true mobile (`390px` iframe viewport isolation) in both light and dark themes. Remediate any detected layout, contrast, or responsiveness defects, verify clean passes, and finalize milestone `v3.0`.

Purpose: Provide empirical, reproducible proof that the telecom VoC portfolio case study and index card are completely synchronized with the open-source engineering project, fully functional across responsive viewports, and 100% free of confidential publication IP.
Output: Verification test suites, JSON audit reports, and visual screenshots in artifact scratch directory, with clean code remediation in target portfolio files if needed.
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/REQUIREMENTS.md
- .gsd/ROADMAP.md
- .gsd/DECISIONS.md
- .gsd/phases/1/VERIFICATION.md
- index.html
- projects/voc-telecom.html
- js/data/projects.js
- css/styles.css
</context>

<tasks>

<task type="auto">
  <name>Task 1: Automated HTTP Asset, DOM, Anchor, CON-01, Stale Token, and Repo Zero-Leak Scan</name>
  <files>
    projects/voc-telecom.html
    js/data/projects.js
    css/styles.css
  </files>
  <action>
    Create and execute an automated Python verification script located strictly in the artifact scratch directory (`C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/run_asset_dom_leak_scan.py`).

    Script capabilities:
    1. **Local HTTP Server & Asset Verification (REQ-05):**
       - Spin up a background Python `http.server` on `localhost:8000`.
       - Test HTTP GET requests (200 OK) for:
         - `/index.html`
         - `/projects/voc-telecom.html`
         - `/css/styles.css?v=3.0`
         - `/js/data/projects.js`
         - All 13 project PNG plots in `/assets/images/projects/voc/`:
           `net_sentiment_score_comparison_bars.png`, `operator_sentiment_distribution_bars.png`, `multi_year_sentiment_trend_line.png`, `yearly_sentiment_trend_early_era.png`, `yearly_sentiment_trend_modern_era.png`, `operator_category_complaint_distribution_bars.png`, `category_sentiment_stacked_bars.png`, `monthly_nss_trend_line.png`, `monthly_nss_trend_early_era.png`, `monthly_nss_trend_modern_era.png`, `nss_stability_volatility_bars.png`, `sentiment_model_benchmark_bars.png`, `category_model_benchmark_bars.png`.
       - Confirm 0 failed asset requests (0 404s, 0 500s).
    2. **DOM & Anchor Integrity Audit:**
       - Parse `index.html` and `projects/voc-telecom.html` for all internal anchor tags (`<a href="#id">`).
       - Validate every hash anchor target exists as a corresponding `id` element in the document.
       - Validate relative link targets (e.g. `../index.html`, `projects/voc-telecom.html`) exist on disk.
    3. **Executive Narrative Story Card Verification (CON-01):**
       - Locate `"The Story Behind the Data"` card in `projects/voc-telecom.html`.
       - Extract text content from the narrative paragraph (`<p>` tag).
       - Validate exact word count equals 96 words (and `<140` words).
       - Validate that the narrative card precedes the sampling standards callout in the hero section.
    4. **Stale Token Scan:**
       - Search `projects/voc-telecom.html`, `js/data/projects.js`, `css/styles.css`, and `.gsd/` for obsolete tokens: `655,670`, `3,716`, `123-month`.
       - Confirm 0 occurrences of obsolete tokens.
       - Confirm canonical benchmark figures are present: `655,649` reviews, `3,713-day` common horizon, `122` continuous months, `661,160` (or `661.2k`) master corpus.
    5. **Confidential Publication Zero-Leak Scan (CON-SEC):**
       - Define a comprehensive blocklist inside the scratch script covering:
         - Confidential publication titles and acronyms
         - Theoretical framework terms, triage protocol labels, and priority quadrant names
         - Split-track turnaround designations and non-project operational throughput claims
         - Academic literature author citations
         - LaTeX formula delimiters and math rendering CDN stylesheet/script URLs or CSS classes in VoC files
         - Non-project figure filenames (`figure0` through `figure4`)
       - Scan `projects/voc-telecom.html`, `js/data/projects.js`, `css/styles.css`, `assets/images/projects/voc/`, and `.gsd/`.
       - Confirm 0 occurrences across all categories.
    6. Output structured JSON results to `C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/asset_dom_leak_report.json`.

    AVOID: Writing temporary test scripts or output reports into the git working tree (`DECISION-002`). Store only in the artifact scratch directory.
    AVOID: Hardcoding secret publication terms in this PLAN file (`CON-SEC`).
    USE: Python standard library (`urllib.request`, `http.server`, `re`, `json`, `pathlib`).
  </action>
  <verify>
    powershell -NoProfile -Command "python C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/run_asset_dom_leak_scan.py"
  </verify>
  <done>
    All HTTP assets return 200 OK. Internal anchors resolve cleanly. CON-01 card is verified at 96 words. 0 stale tokens found. 0 confidential publication terms, KaTeX dependencies, or non-project figures found. JSON report shows 100% PASS.
  </done>
</task>

<task type="auto">
  <name>Task 2: Live Headless Microsoft Edge Hydration, Viewport (1440px & true 390px), Contrast, and Screenshot Suite</name>
  <files>
    projects/voc-telecom.html
    css/styles.css
    js/data/projects.js
  </files>
  <action>
    Create and execute an automated Python verification runner (`C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/run_edge_e2e_verification.py`) using `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.

    Implementation Steps:
    1. **Test Server & Viewport Isolation Harness:**
       - Start a local HTTP server serving the repo root on `localhost:8000`.
       - Generate an iframe viewport harness HTML file in artifact scratch directory:
         `C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/iframe_viewport_harness.html`.
       - The harness creates an isolated container matching true mobile iPhone dimensions (`width: 390px; height: 844px;`) and desktop (`width: 1440px; height: 900px;`), embedding `index.html` and `projects/voc-telecom.html` in both default light and dark mode (`class="dark"` on `<html>`).
    2. **Automated Headless Edge Verification Queries:**
       Execute headless Edge instances to evaluate live DOM properties via harness or `--dump-dom` / script evaluation:
       a. **ES6 `#projects-grid` Hydration (index.html):**
          - Confirm `document.getElementById('projects-grid').children.length >= 4`.
          - Confirm the `voc-telecom` card rendered title, metrics, tags (`BUET BanglaBERT`, `Soft-Voting Ensemble`), and case study button link (`projects/voc-telecom.html`).
       b. **Zero Broken Images:**
          - Query `Array.from(document.querySelectorAll('img'))`.
          - Validate `img.complete && img.naturalWidth > 0` for every image element across both pages (including all 13 VoC plot images and index thumbnails).
          - Confirm 0 broken images.
       c. **Horizontal Overflow Analysis (NFR-01):**
          - For Desktop (`1440px`): Validate `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.
          - For Mobile (`390px` iframe viewport isolation): Validate `document.documentElement.scrollWidth <= 390` (or `clientWidth === 375` / `390`).
          - Inspect any offending elements if `scrollWidth > clientWidth` (e.g. check wide tables, monospace CLI pre blocks, or flex badges).
       d. **Theme Contrast & Legibility (NFR-02):**
          - Light mode: Validate `getComputedStyle(document.body).backgroundColor` is light surface (`#fbfbfd` / rgb > 240) and text is dark (`#1e293b` / rgb < 60).
          - Dark mode: Validate `getComputedStyle(document.body).backgroundColor` is dark surface (`#0c0e14` / rgb < 25) and text is light (`#f1f5f9` / rgb > 230).
          - Validate hero headings, table text, callout boxes, and tags maintain legible contrast.
       e. **Zero KaTeX / LaTeX Leakage:**
          - Confirm `document.querySelectorAll('.katex').length === 0`.
          - Confirm zero unrendered raw LaTeX math blocks (`$$...$$` or `$math$`) in visible text content.
    3. **Capture Refreshed Visual Proof Screenshots:**
       Capture screenshots using `msedge.exe` with `--headless=new --screenshot=...`:
       - `scratch/screenshots/desktop_index_light.png` (`--window-size=1440,900`)
       - `scratch/screenshots/desktop_index_dark.png` (`--window-size=1440,900`)
       - `scratch/screenshots/desktop_voc_light.png` (`--window-size=1440,900`)
       - `scratch/screenshots/desktop_voc_dark.png` (`--window-size=1440,900`)
       - `scratch/screenshots/mobile_index_light.png` (`--window-size=390,844`)
       - `scratch/screenshots/mobile_index_dark.png` (`--window-size=390,844`)
       - `scratch/screenshots/mobile_voc_light.png` (`--window-size=390,844`)
       - `scratch/screenshots/mobile_voc_dark.png` (`--window-size=390,844`)
    4. Save structured results to `C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/edge_e2e_report.json`.

    AVOID: Storing screenshots in `assets/images/` or any git-tracked directory (`DECISION-002`). Store only in artifact scratch path.
    AVOID: Relying on window resize without checking true inner scrollWidth/clientWidth.
  </action>
  <verify>
    powershell -NoProfile -Command "python C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/run_edge_e2e_verification.py"
  </verify>
  <done>
    Headless Edge confirms ES6 hydration, 0 broken images, 0 horizontal overflow at 1440px and 390px mobile iframe, valid light and dark contrast, 0 KaTeX DOM elements, and generates all 8 verification screenshots in scratch/screenshots/.
  </done>
</task>

<task type="auto">
  <name>Task 3: Remediation, Responsive Overflow Polish, and Verification Suite Re-run</name>
  <files>
    projects/voc-telecom.html
    css/styles.css
    js/data/projects.js
  </files>
  <action>
    Review reports from Task 1 and Task 2 (`asset_dom_leak_report.json` and `edge_e2e_report.json`):
    1. If any defects are discovered (such as a 390px mobile overflow caused by a wide table, inline code badge, pre block, missing CSS class, broken image path, or contrast issue):
       - Apply targeted, surgical fixes to `projects/voc-telecom.html`, `css/styles.css`, or `js/data/projects.js`.
       - For responsive table wrapping, ensure parent containers carry `overflow-x-auto` and `min-w-0`.
       - For monospace CLI code blocks, ensure `break-all` and `whitespace-pre-wrap` are present.
       - Re-run Task 1 and Task 2 verification test suites to confirm 100% pass rate.
       - Commit the changes explicitly via `git add <file>` and `git commit` (remembering `DECISION-002`: no `git add -A` or `git add .`, wait ~80s for thumbnail hook).
    2. If no defects are discovered:
       - Confirm with `git status --porcelain` that target files have zero unstaged modifications and no unrequested files are staged.
       - Create the final Phase 2 verification wrapper script `verify_all_phase2.py` in artifact scratch that runs both suites and exits with code 0.

    AVOID: `git add .` or `git add -A` (`DECISION-002`). Use explicit file paths only.
    AVOID: Modifying untracked `temp/` directory or paper assets.
  </action>
  <verify>
    powershell -NoProfile -Command "python C:/Users/user/.gemini/antigravity/brain/c18e5892-3f67-4f3f-9fcc-185722121a00/scratch/verify_all_phase2.py"
  </verify>
  <done>
    All verification suites pass with 0 errors. Target files are cleanly remediated (if needed) and explicitly committed, or verified clean. Working tree has zero unstaged modifications to target files.
  </done>
</task>

</tasks>

<verification>
After all tasks complete, verify:
- [ ] Local HTTP server confirms all pages, CSS, JS, and 13 VoC plot images return HTTP 200 OK
- [ ] Internal HTML anchors resolve to valid targets with 0 broken links
- [ ] CON-01 Executive Narrative story card is verified intact at exactly 96 words
- [ ] Stale token scan confirms 0 occurrences of deprecated metrics (655,670, 3,716, 123-month) across tracked files and .gsd/
- [ ] Zero-leak audit confirms 0 confidential publication terms, 0 KaTeX styles/scripts, 0 LaTeX math delimiters, and 0 non-project figures (CON-SEC)
- [ ] Headless Edge confirms ES6 #projects-grid hydration and 0 broken images across desktop and mobile
- [ ] Headless Edge confirms zero horizontal overflow (scrollWidth <= clientWidth) on desktop (1440px) and true 390px mobile iframe viewport
- [ ] Headless Edge confirms legible computed background/text contrast in light and dark themes
- [ ] 8 refreshed verification screenshots are captured in artifact scratch directory scratch/screenshots/
- [ ] Git status is clean with explicit staging discipline (DECISION-002)
</verification>

<success_criteria>
- [ ] All 3 tasks executed and verified passing
- [ ] Zero secret paper ideas, figures, formulas, or references in target files (CON-SEC)
- [ ] Upfront 96-word continuous Executive Story card intact (CON-01)
- [ ] Responsive parity across 1440px desktop and true 390px mobile iframe with 0 overflow (NFR-01)
- [ ] Full dark/light mode legibility matching css/styles.css?v=3.0 (NFR-02)
- [ ] Clean working tree with explicit git staging discipline (DECISION-002, NFR-03)
</success_criteria>

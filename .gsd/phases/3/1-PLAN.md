---
phase: 3
plan: 1
wave: 1
depends_on: []
files_modified:
  - scratch/audit_e2e_assets_dom.py
  - scratch/audit_headless_edge.py
  - projects/voc-telecom.html
  - css/styles.css
  - index.html
autonomous: true
gap_closure: false
must_haves:
  truths:
    - "Zero broken image, stylesheet, or script paths across index.html, js/data/projects.js, and projects/voc-telecom.html returning HTTP 200 OK over local server"
    - "Valid HTML DOM and anchor structure with zero broken internal #id links, zero duplicate element IDs, and all <img> tags containing descriptive alt text"
    - "Zero stale or obsolete tokens (655,670, 3,716, 123-month, 123 month, +6.95, 57.4%, 18.42) remain across portfolio code"
    - "Upfront 96-word continuous Executive Story card preserved 100% intact (<140 words) per CON-01"
    - "Strict double-blind compliance per CON-02 & DECISION-003: zero links to manuscript.pdf, zero journal submission claims, and zero unverified live Hugging Face URLs"
    - "Headless Edge verifies live KaTeX 0.16.9 math rendering with >=200 rendered .katex elements, >=6 .katex-display elements, 0 .katex-error classes, and 0 unrendered raw $$ delimiters"
    - "Headless Edge verifies index.html #projects-grid ES6 module hydration rendering the voc-telecom card with calibrated 655,649 / 3,713-day metrics and highlights"
    - "Responsive layout parity verified in headless Edge across Desktop (1440x900) and Mobile (390x844) with zero page-level horizontal overflow (scrollWidth <= clientWidth on html/body)"
    - "Dark and light theme visual parity verified with dark class support matching css/styles.css?v=3.0, ensuring high-contrast legibility for KaTeX, tables, figures, and cards"
    - "Explicit git staging discipline strictly enforced per DECISION-002 & NFR-03 with zero untracked harness files or temp/ contents committed"
  artifacts:
    - "scratch/audit_e2e_assets_dom.py"
    - "scratch/audit_headless_edge.py"
    - "scratch/asset_dom_report.json"
    - "scratch/headless_edge_report.json"
    - "scratch/screenshots/desktop_light.png"
    - "scratch/screenshots/desktop_dark.png"
    - "scratch/screenshots/mobile_light.png"
    - "scratch/screenshots/mobile_dark.png"
    - "projects/voc-telecom.html"
    - "css/styles.css"
  key_links:
    - "projects/voc-telecom.html links to css/styles.css?v=3.0 and KaTeX CDN (0.16.9)"
    - "index.html imports js/app.js which imports js/data/projects.js to hydrate #projects-grid"
    - "projects/voc-telecom.html embeds assets/images/projects/voc/ figure0-4 and 300 DPI plots"
---

# Plan 3.1: End-to-End Verification & Visual Polish

## Objective
Execute holistic, independent end-to-end verification and visual polish across `index.html`, `js/data/projects.js`, `projects/voc-telecom.html`, and `assets/images/projects/voc/`. This plan validates zero broken assets (HTTP 200), clean HTML/anchor integrity, live KaTeX `0.16.9` math rendering in headless Microsoft Edge, ES6 module hydration of `#projects-grid`, mobile (`390x844`) and desktop (`1440x900`) responsive layout parity without horizontal overflow, dark/light theme legibility matching `css/styles.css?v=3.0`, and preservation of both the 96-word Executive Story card (`CON-01`) and double-blind compliance (`CON-02`/`DECISION-003`), concluding with explicit git staging (`DECISION-002`/`NFR-03`).

## Context
Load these files for context:
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `.gsd/REQUIREMENTS.md`
- `.gsd/phases/2/VERIFICATION.md`
- `index.html`
- `projects/voc-telecom.html`
- `js/data/projects.js`
- `css/styles.css`

## Tasks

<task type="auto">
  <name>Automated E2E Integrity Suite: Local HTTP Server, Asset Resolution (200 OK), HTML/Anchor Structure & Stale Token Audit</name>
  <files>
    scratch/audit_e2e_assets_dom.py
    index.html
    projects/voc-telecom.html
    js/data/projects.js
  </files>
  <action>
    Create and execute a standalone Python stdlib verification suite `scratch/audit_e2e_assets_dom.py` that:

    1. Spawns an in-process daemon `ThreadingHTTPServer` on `127.0.0.1` binding to a free local port (defaulting to 8000).
    2. Parses `index.html`, `projects/voc-telecom.html`, and `js/data/projects.js` to extract all asset URLs:
       - Stylesheets (`<link rel="stylesheet" href="...">`)
       - Scripts (`<script src="...">`)
       - Image elements (`<img src="...">`)
       - Data references (`media: "..."`, `caseStudyUrl: "..."` in `js/data/projects.js`)
       Makes HTTP GET/HEAD requests over the local server for every asset and asserts HTTP status `200 OK`.
       Verifies each referenced image file exists on disk with size > 0 bytes.
    3. Analyzes HTML DOM structure using Python stdlib `html.parser`:
       - Extracts all element `id` attributes and all internal anchor links (`<a href="#...">`).
       - Asserts that every internal `#id` link points to an existing element on the same page.
       - Asserts zero duplicate `id` attributes on both `index.html` and `projects/voc-telecom.html`.
       - Asserts all `<img>` tags have non-empty `alt` attributes.
    4. Scans target files for obsolete/stale tokens:
       - `655,670`, `3,716`, `123-month`, `123 month`, `123 continuous`, `57.4%`, `+6.95`, `10.33 / 57.4%`, `18.42`, `3,716-day`.
       - Asserts exactly 0 occurrences across `index.html`, `projects/voc-telecom.html`, and `js/data/projects.js`.
    5. Enforces Project Constraints:
       - `CON-01`: Asserts that the Executive Story card in `projects/voc-telecom.html` is preserved intact with exactly 96 words (<140 words).
       - `CON-02` & `DECISION-003`: Asserts zero occurrences of `manuscript.pdf`, `manuscript_twocolumn.pdf`, `Expert Systems with Applications`, `Submitted to`, or fabricated Hugging Face Space URLs.
    6. Writes structured JSON results to `scratch/asset_dom_report.json` and prints clear PASS/FAIL diagnostics.

    AVOID: depending on `requests`, `beautifulsoup4`, or `node` packages because they are not installed in the environment.
    USE: Python stdlib (`http.server`, `urllib.request`, `html.parser`, `re`, `json`, `pathlib`, `threading`).
  </action>
  <verify>
    python scratch/audit_e2e_assets_dom.py
  </verify>
  <done>
    Script outputs "ALL ASSETS, ANCHORS, DOM CHECKS & STALE TOKEN SCANS PASSED (0 FAILURES)" and generates scratch/asset_dom_report.json with status "pass".
  </done>
</task>

<task type="auto">
  <name>Headless Edge Browser Rendering: KaTeX Math Verification, ES6 Hydration, Viewport Overflow & Dark/Light Theme Audit</name>
  <files>
    scratch/audit_headless_edge.py
    index.html
    projects/voc-telecom.html
  </files>
  <action>
    Create and execute a headless Microsoft Edge automation script `scratch/audit_headless_edge.py` using `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` via Python stdlib `subprocess`:

    1. Starts a local HTTP server that serves repository files and supports an audit probe middleware:
       - When requested with `?audit=true`, injects a lightweight client-side measurement script before `</body>` that executes after DOM hydration and KaTeX auto-rendering (`--virtual-time-budget=6000` ms).
       - Client probe inspects:
         a) KaTeX status: count of `.katex` elements (expect >= 200), `.katex-display` elements (expect >= 6), `.katex-error` elements (must be 0), and raw unrendered `$$` blocks in text nodes (must be 0).
         b) ES6 hydration: for `index.html`, inspects `#projects-grid` to verify the `voc-telecom` project card is present with title, updated `655,649` metrics, and highlights.
         c) DOM Geometry & Overflow: calculates `document.documentElement.scrollWidth`, `clientWidth`, `document.body.scrollWidth`, `clientWidth`. Identifies any elements where `scrollWidth > clientWidth + 2` without an `overflow-x-auto` wrapper.
         d) Theme styles: validates that applying the `dark` class on `<html>` switches background and surface tokens appropriately.
       - Appends `<div id="audit-geometry-results" style="display:none">JSON_PAYLOAD</div>` to the body.
    2. Runs headless Edge across 4 viewport & theme configurations:
       - Desktop Light (`1440x900`, default theme)
       - Desktop Dark (`1440x900`, `dark` class)
       - Mobile Light (`390x844`, default theme)
       - Mobile Dark (`390x844`, `dark` class)
       Runs:
       `msedge.exe --headless --dump-dom --virtual-time-budget=6000 --window-size={w},{h} http://127.0.0.1:{port}/{page}?audit=true`
       Also captures screenshots using `--screenshot=scratch/screenshots/{name}.png`.
    3. Parses dumped DOM in Python, extracts `#audit-geometry-results`, and asserts:
       - KaTeX elements >= 200, KaTeX display >= 6, KaTeX errors == 0, unrendered `$$` == 0.
       - `#projects-grid` hydrated on `index.html` with calibrated `voc-telecom` content.
       - Page horizontal overflow == 0 (`scrollWidth <= clientWidth` on `html` and `body`) across both Desktop (1440px) and Mobile (390px).
       - Dark/light mode classes applied cleanly with valid styling.
    4. Writes detailed results to `scratch/headless_edge_report.json` highlighting any overflowing elements.

    AVOID: invoking `playwright` or `selenium` commands.
    USE: headless `msedge.exe` CLI flags (`--headless`, `--dump-dom`, `--screenshot`, `--window-size`, `--virtual-time-budget`) via Python `subprocess.run()`.
  </action>
  <verify>
    python scratch/audit_headless_edge.py
  </verify>
  <done>
    Script confirms live KaTeX rendering (>=200 formulas, 0 errors), ES6 hydration of #projects-grid, zero page-level horizontal scroll on 1440x900 and 390x844 viewports, saves 4 PNG screenshots to scratch/screenshots/, and outputs status "pass" in scratch/headless_edge_report.json.
  </done>
</task>

<task type="auto">
  <name>Visual Polish, Responsive Layout Remediation, and Explicit Git Staging</name>
  <files>
    projects/voc-telecom.html
    css/styles.css
    index.html
  </files>
  <action>
    Review reports from `scratch/asset_dom_report.json` and `scratch/headless_edge_report.json` and perform targeted visual polish and layout remediation:

    1. Responsive Layout Polish & Overflow Safeguards:
       - Ensure KaTeX display equations in `css/styles.css` never cause horizontal scroll blowouts on mobile viewports by ensuring:
         ```css
         .katex-display {
           overflow-x: auto !important;
           overflow-y: hidden !important;
           max-width: 100% !important;
           -webkit-overflow-scrolling: touch !important;
           padding: 0.25rem 0 !important;
         }
         ```
       - Ensure all wide data tables (scorecards, 10-year trajectory, sub-cohort benchmarks, decision matrix) remain wrapped in containers with class `overflow-x-auto`.
       - Check any wide `<pre>` code blocks or flex badge rows for proper line-wrapping (`flex-wrap`).
    2. Dark/Light Theme Visual Contrast:
       - Verify KaTeX math text inherits appropriate contrast in dark mode (`.katex { color: inherit; }`).
       - Ensure card borders and figure frames retain glassmorphic clarity in both light and dark modes without muddy or unreadable text.
    3. Re-run Verification Suite:
       - Re-run `python scratch/audit_e2e_assets_dom.py`.
       - Re-run `python scratch/audit_headless_edge.py`.
       - Confirm zero failures and zero page-level horizontal overflow across all viewports.
    4. Integrity & Constraint Verification:
       - Confirm `CON-01`: Executive Story card remains exactly 96 words (<140 words).
       - Confirm `CON-02` & `DECISION-003`: Zero manuscript PDF links, zero journal submission claims.
    5. Explicit Git Staging & Clean State:
       - If any fixes were applied to `projects/voc-telecom.html`, `css/styles.css`, or `index.html`:
         Stage ONLY the explicitly modified files using `git add <file>` (e.g. `git add projects/voc-telecom.html css/styles.css`).
         NEVER use `git add -A` or `git add .` (protects 821MB `temp/` and scratch files per `DECISION-002` / `NFR-03`).
         Commit with conventional commit message (e.g. `fix(polish): refine mobile responsive overflow and KaTeX dark mode contrast`).
         Expect and allow the ~80s pre-commit thumbnail generator hook to complete.
       - Verify clean git status for tracked portfolio files.

    AVOID: modifying unrelated files or using wildcard `git add .`.
    USE: explicit file paths for git staging and single PowerShell commands.
  </action>
  <verify>
    python scratch/audit_e2e_assets_dom.py
  </verify>
  <done>
    Both verification suites pass with 0 failures, responsive layout has 0 overflow on 390px and 1440px viewports, light/dark themes are legible and polished, and git status shows clean working state.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] All local asset paths (images, CSS, JS) return HTTP 200 OK over local HTTP server
- [ ] All internal `#id` anchor links resolve cleanly with zero broken references and zero duplicate IDs
- [ ] Zero stale or obsolete tokens (`655,670`, `3,716`, `123-month`, `+6.95`, `57.4%`, `18.42`) remain
- [ ] Upfront 96-word continuous Executive Story card remains intact (<140 words) per `CON-01`
- [ ] Strict double-blind compliance per `CON-02` & `DECISION-003`: zero links to manuscript.pdf, zero journal claims
- [ ] Live KaTeX math rendering verified in headless Edge with >=200 `.katex` elements and 0 `.katex-error`
- [ ] ES6 module hydration of `#projects-grid` verified in headless Edge
- [ ] Zero page-level horizontal scroll (`scrollWidth <= clientWidth`) on Desktop (1440x900) and Mobile (390x844)
- [ ] Dark and light theme visual parity verified with legible contrast for math, tables, figures, and cards
- [ ] Explicit git staging discipline followed per `DECISION-002` with clean repo status

## Success Criteria
- [ ] All 3 tasks verified passing via automated Python and headless Edge commands
- [ ] 10/10 must-haves confirmed
- [ ] No regressions in portfolio navigation, responsiveness, or visual design

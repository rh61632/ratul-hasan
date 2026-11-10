# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: Specification finalized for GSD execution of the VoC portfolio synchronization milestone.

## Vision
Synchronize the portfolio website (`index.html`, `js/data/projects.js`, `projects/voc-telecom.html`, and `assets/images/projects/voc/`) with all major technical, empirical, architectural, and visual updates from the updated Telecom Voice-of-Customer (VoC) Intelligence Engine project staged in `temp/telecom-Voice-of-Customer_intelligence/`, while preserving the upfront <140-word flowing executive story and maintaining the site's glassmorphic design system and dark/light theme parity.

## Goals
1. **Data & Metric Synchronization** — Align all review counts, common duration dates, operator totals, yearly trajectories, and model benchmarks across the portfolio card (`js/data/projects.js`) and case study (`projects/voc-telecom.html`) to the canonical **3,713-day** common window (**Aug 1, 2016 – Sep 30, 2026**, **122 continuous months**, **$N = 655,649$** reviews: Grameenphone `320,140`, Robi `198,378`, Banglalink `137,131`).
2. **Visual Suite & Publication Figures Refresh** — Replace stale 300 DPI plots in `assets/images/projects/voc/` with the newly regenerated plots (including timeless `early_era` and `modern_era` series) and integrate the 5 new publication-grade system/analytical figures (`figure0_system_architecture.png`, `figure1_monthly_nss_trajectory.png`, `figure2_yearly_leadership_strip.png`, `figure3_priority_matrix.png`, `figure4_banglalink_reversal_decomposition.png`).
3. **Research, Architecture & Engineering Depth** — Showcase the major project additions: 4-Stage VoC-Intelligence architecture, Rogan-Gladen prevalence adjustment, Complement Naive Bayes calibration (`84.76% → 74.47%`), automated Unicode/CMI language detector & linguistic sub-cohort evaluation (`77.12%` EN / `11.27%` Banglish / `9.42%` Bangla), Cross-Layer Subsystem Decoupling proofs ($\chi^2(1) = 12.83, p = 0.0003, \text{OR} = 4.23, \text{RR} = 1.74$), Dual-Track Surge-Adjusted Volatility (`-44.5%` BL RMSSD reduction & 2026 turnaround decomposition `+10.33 / 66.5%` surge vs `+5.21 / 33.5%` technical), Strategic Priority Matrix, Canary Release Gating (Algorithm 1), Gradio interactive demo (`demo/app.py`), Hugging Face deployment workflow, and 8-module integrity audit (`scripts/audit_project_integrity.py`).

## Non-Goals (Out of Scope)
- Do **not** remove or revert the <140-word flowing Executive Story card at the top of `projects/voc-telecom.html`.
- Do **not** publish double-blind manuscript PDFs (`paper/manuscript.pdf`) or expose unpublished journal peer-review submission claims on the portfolio (consistent with commit `4d5aaad` in the VoC repo).
- Do **not** modify unrelated project pages (`prosthetic-arm.html`, `limiteye.html`, etc.) or stage `temp/` or untracked root GSD files into git commits.
- Do **not** invent live URLs for Hugging Face Spaces/Hub unless verified deployed (clearly present the Gradio app and HF upload script as repository modules/tooling).

## Constraints
- **Zero-build static site:** Pure HTML5, Tailwind Play CDN, `css/styles.css?v=3.0`, vanilla ES6 modules, and KaTeX if math rendering is added.
- **Git safety:** Never run `git add -A` or `git add .` (no root `.gitignore`; `temp/` contains an 821 MB zip and 347 MB CSVs). Always stage explicit file paths.
- **Shell discipline:** PowerShell on Windows — never chain commands with `&&` or `||`.
- **Empirical accuracy:** Every statistic, sample count, p-value, odds ratio, latency (`1.42 ms` / `450 rps`), and plot caption must match verified files in `temp/telecom-Voice-of-Customer_intelligence/`.

## Success Criteria
- [ ] All VoC benchmark metrics across `js/data/projects.js` and `projects/voc-telecom.html` match `common_duration_summary.json` (`N = 655,649`, `3,713 days`, `Aug 1, 2016 – Sep 30, 2026`, `122 months`) with zero stale `655,670` / `3,716` / `123 months` references.
- [ ] All updated plots and 5 new publication figures exist in `assets/images/projects/voc/` and resolve cleanly with HTTP 200 / valid image headers.
- [ ] `projects/voc-telecom.html` showcases the 4-stage architecture, linguistic sub-cohort analysis, cross-layer decoupling statistical proofs, surge-filtered RMSSD & 2026 turnaround decomposition, Priority Matrix, Canary Gating Algorithm 1, Bayesian calibration, Gradio demo, and integrity audit.
- [ ] Visual, link, math rendering, and responsive checks pass in both light and dark modes via headless/local verification.

---

*Last updated: 2026-11-10*

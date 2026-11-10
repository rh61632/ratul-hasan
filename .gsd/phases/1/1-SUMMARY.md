# Phase 1 Summary: Paper Removal & Project-Only Rebuild

**Plan:** `.gsd/phases/1/1-PLAN.md`  
**Milestone:** VoC Portfolio Project-Only Synchronization v3.0  
**Phase:** 1 — Paper Removal & Project-Only Rebuild  
**Status:** Completed  
**Commit:** `6f071ec` (`refactor(voc): reverse paper content and rebuild cleanly from project`)  

---

## Executive Summary

Phase 1 successfully executed the complete reversal and purge of confidential publication materials from the portfolio codebase, replacing them with a pristine, empirical, project-only presentation strictly aligned with the canonical open-source repository (`telecom-Voice-of-Customer_intelligence`).

All confidential frameworks, figures, formulas, academic citations, and KaTeX styling dependencies have been removed. The portfolio case study (`projects/voc-telecom.html`), styling system (`css/styles.css`), and portfolio data registry (`js/data/projects.js`) have been fully restored and calibrated to showcase verified project achievements across the canonical 655,649 review / 3,713-day benchmark (2016–2026).

---

## Tasks Completed

| Task | Name | Target Files | Key Deliverables & Validation |
|:---|:---|:---|:---|
| **Task 1** | Clean CSS Styles & Repository Asset Hygiene | `css/styles.css` | Reverted `css/styles.css` identically to pre-paper commit `bb837f7`. Purged all `.katex` CSS rules. Confirmed 0 non-project figure PNGs in `assets/images/projects/voc/`. Staged explicitly. |
| **Task 2** | Rebuild `projects/voc-telecom.html` Strictly from Project Sources | `projects/voc-telecom.html` | Rebuilt cleanly from baseline `98e4be9` and open-source project materials. 0 KaTeX CDN dependencies, 0 LaTeX math delimiters, 0 confidential publication terms. Preserved intact the 96-word `"The Story Behind the Data"` executive card (`CON-01`). Verified all 13 Python 300 DPI plot embeddings. Enriched with 5-domain distribution, True Complaint Rates, Within-Category Dissatisfaction (Option B), wireless generation transitions, review volume surge diagnostics, functional domain dominance tests, multi-threshold sensitivity audit, build version telemetry, ML benchmarks, ComplementNB Bayesian regularization, fine-tuning ablation, short-text filtering ablation, rule-based language detector, production CLI commands, and Google Colab GPU suites with mobile 390px overflow wrapping (`break-all`, `min-w-0`). |
| **Task 3** | Synchronize `js/data/projects.js` Card with Project Metrics | `js/data/projects.js` | Updated `voc-telecom` entry with project-only highlights and tags. Verified JavaScript syntax and balanced brackets. 0 non-project buzzwords. Staged explicitly. |

---

## Verification & Empirical Evidence

### 1. CSS & Asset Verification
- **KaTeX CSS Rules:** Confirmed 0 occurrences of `katex` in `css/styles.css`.
- **Pre-Paper Baseline:** `git diff bb837f7 -- css/styles.css` returns 0 differences.
- **Repository Figures:** Confirmed 0 non-project publication figures exist in `assets/images/projects/voc/`.

### 2. HTML Compliance & Confidential Isolation Verification (`CON-SEC`)
- **Prohibited Publication Terms (0 Leaks):** Automated scanning verified 0 occurrences of confidential publication terms, derivations, or author citations in `projects/voc-telecom.html` and `js/data/projects.js`.
- **LaTeX Math Delimiters:** 0 LaTeX math delimiter instances; all formulas rendered with semantic HTML / Unicode (`<i>R</i><sup>2</sup>`, `&Delta;NSS`, `&chi;&sup2;(1)`, `&kappa;`).
- **Stale Tokens:** 0 occurrences of pre-sync dataset counts, incorrect day spans, or unverified statistical claims.
- **Executive Narrative Story Card (`CON-01`):** Verified intact at exactly **96 words**.
- **Visual Suite:** Verified all 13 high-resolution 300 DPI project visualization plots are correctly embedded and linked:
  1. `net_sentiment_score_comparison_bars.png`
  2. `operator_sentiment_distribution_bars.png`
  3. `multi_year_sentiment_trend_line.png`
  4. `yearly_sentiment_trend_early_era.png`
  5. `yearly_sentiment_trend_modern_era.png`
  6. `monthly_nss_trend_line.png`
  7. `monthly_nss_trend_early_era.png`
  8. `monthly_nss_trend_modern_era.png`
  9. `nss_stability_volatility_bars.png`
  10. `operator_category_complaint_distribution_bars.png`
  11. `category_sentiment_stacked_bars.png`
  12. `sentiment_model_benchmark_bars.png`
  13. `category_model_benchmark_bars.png`

### 3. Live Project Metrics Integrated
- **Threshold Sensitivity Concordance (`scripts/audit_thresholds.py`):**
  - `|ΔNSS| >= 8.0 pp`: GP `10/11`, Robi `8/9`, BL `26/26` -> Total `44` (Ensemble) vs `46` (Linear SVM)
  - `|ΔNSS| >= 10.0 pp`: GP `6/7`, Robi `7/4`, BL `22/21` -> Total `35` (Ensemble) vs `32` (Linear SVM)
  - `|ΔNSS| >= 12.0 pp`: GP `4/4`, Robi `4/4`, BL `15/16` -> Total `23` (Ensemble) vs `24` (Linear SVM)
  - Banglalink exhibits 3.1&times;–3.7&times; higher shock frequency than GP and Robi across all thresholds and classifiers.
- **Build Version Telemetry (`scripts/check_version_bias.py`):**
  - Versioned: `492,224` (75.1%, NSS +65.43%) vs Unversioned: `163,425` (24.9%, NSS +54.47%).
  - Banglalink `v11.8.0` crash: -11.2 pts MoM NSS shock, -8.74 pts Login impact.
  - Banglalink `v11.9.1 / v11.10.x` hotfix: +32.8 pts MoM NSS shock, +13.73 pts Login impact.
- **Volume Surge Diagnostics (`scripts/analyze_surges.py`):**
  - 45.7% of shocks (16 of 35) occur in surges (&ge; 50% MoM volume change) vs 13.3% non-shocks.
  - General Appreciation tracks volume surges (<i>R</i><sup>2</sup> = 0.5601).
  - Raw vs Surge-Filtered RMSSD: BL 13.61 -> 7.56 (-44.5%), GP 6.28 -> 5.15 (-18.0%), Robi 5.61 -> 4.53 (-19.3%), BL/Robi ratio 2.43&times; -> 1.67&times; (-31.3%).
- **Functional Domain Dominance (`scripts/audit_point1.py`):**
  - App Login leads functional complaints in 27 of 35 shocks (77.1%) vs 91 of 205 non-shocks (44.4%).
  - Pooled: &chi;&sup2;(1) = 12.83 (<i>p</i> = 0.0003), Fisher's Exact OR = 4.23 (<i>p</i> = 0.0004).
  - Non-Surge: &chi;&sup2;(1) = 6.38 (<i>p</i> = 0.0116), Fisher's Exact OR = 3.65 (<i>p</i> = 0.0150).

### 4. Portfolio Card Synchronized (`js/data/projects.js`)
- **Highlights:**
  - `"BUET BanglaBERT SOTA: 91.60% CV Acc (0.8598 F1)"`
  - `"Soft-Voting Ensemble: 87.5% Sent / 87.4% Cat (Sub-ms CPU)"`
  - `"Surge-Filtered Stability: -44.5% BL noise (κ=0.77 Gold)"`
- **Tags:** `["Python 3.10", "BUET BanglaBERT", "Soft-Voting Ensemble", "Banglish NLP", "655.6k Benchmark"]`
- **Syntax:** Verified balanced brackets and valid ES module export.

---

## Git Commit Details

- **Commit SHA:** `6f071ec`
- **Commit Message:** `refactor(voc): reverse paper content and rebuild cleanly from project`
- **Files Committed:**
  - `css/styles.css` (28 deletions)
  - `js/data/projects.js` (6 edits)
  - `projects/voc-telecom.html` (2,253 edits: 709 insertions, 1,578 deletions)
- **Status:** Clean. Verified with `git log -1 --stat`.

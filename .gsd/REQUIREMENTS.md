---
milestone: VoC Portfolio Synchronization v2.0
updated: 2026-11-10T07:18:30+06:00
---

# Requirements

## Overview

Requirements derived from `.gsd/SPEC.md` for synchronizing the portfolio with the updated Telecom VoC Intelligence Engine in `temp/telecom-Voice-of-Customer_intelligence/`.

---

## Functional Requirements

| ID | Requirement | Source | Phase | Status |
|----|-------------|--------|-------|--------|
| REQ-01 | Sync regenerated 300 DPI plots (including timeless `early_era` & `modern_era` names) and copy 5 new ESWA figures (`figure0`–`figure4`) into `assets/images/projects/voc/` | SPEC Goal 2 | 1 | Complete |
| REQ-02 | Update `js/data/projects.js` (`voc-telecom` entry: summary, description, highlights, tags) with calibrated `655,649` / `3,713-day` metrics and key new breakthroughs | SPEC Goal 1 | 1 | Complete |
| REQ-03 | Update `projects/voc-telecom.html` metadata, hero tags/cards, common duration scorecard, and yearly trajectory table to `655,649` / `3,713 days` / `122 months` while preserving the <140-word flowing story card | SPEC Goal 1 | 1 | Complete |
| REQ-04 | Add 4-Stage VoC-Intelligence System Architecture (`figure0`), Code-Mixed Text Normalization, Rogan-Gladen correction, complexity/throughput (`1.42 ms` / `450 rps`), and ComplementNB Bayesian calibration (`84.76% → 74.47%`) sections | SPEC Goal 3 | 2 | Complete |
| REQ-05 | Add Automated Language Detector (`ml/language_detector.py`), Linguistic Sub-Cohort benchmarks ($N=661,160$ distribution + 5-fold CV table), and Qualitative Error Analysis (4 socio-linguistic failure modes) | SPEC Goal 3 | 2 | Complete |
| REQ-06 | Expand Shock Attribution & Analytics sections with Cross-Layer Decoupling proof ($\chi^2(1)=12.83, \text{OR}=4.23, \text{RR}=1.74$), Non-Surge robustness ($\text{OR}=3.65$), Threshold Sensitivity audit (`8/10/12 pp`), Surge-Filtered RMSSD (`-44.5%` BL), Spring 2024 `v11.8.0`/`v11.9.1` build telemetry, 2026 Dual-Track reversal (`figure4`), 4 Eras (`figure1`/`figure2`), and $2 \times 2$ Strategic Priority Matrix (`figure3`) | SPEC Goal 3 | 2 | Complete |
| REQ-07 | Add Canary Release Gating protocol (Algorithm 1), Executive Decision Matrix (Levels 1–4), Interactive Gradio Demo (`demo/app.py`), HF Hub upload pipeline, Colab notebooks, and 8-Module Automated Integrity Audit | SPEC Goal 3 | 2 | Complete |
| REQ-08 | Verify zero broken asset paths, accurate math rendering (KaTeX), zero stale `655,670`/`3,716` strings, valid HTML structure, and responsive/theme-safe rendering across `index.html` and `projects/voc-telecom.html` | SPEC Goal 1–3 | 3 | Pending |

---

## Non-Functional Requirements

| ID | Requirement | Category | Phase | Status |
|----|-------------|----------|-------|--------|
| NFR-01 | Responsive layout parity across desktop (`xl`) and mobile viewports using Tailwind utility classes | UX | 3 | Pending |
| NFR-02 | Full dark/light mode support matching `css/styles.css?v=3.0` and glassmorphic design language | Theme | All | Pending |
| NFR-03 | Explicit git staging only (zero `git add -A`, no `temp/` or unrequested root files committed) | Safety | All | Pending |

---

## Constraints

| ID | Constraint | Source | Impact |
|----|------------|--------|--------|
| CON-01 | Preserve the upfront <140-word continuous Executive Story card in `projects/voc-telecom.html` | SPEC Non-Goals | Phase 1, 2 |
| CON-02 | Keep double-blind manuscript PDFs and peer-review submission claims off the public portfolio | SPEC Non-Goals | Phase 2 |
| CON-03 | Invoke GSD subagents sequentially with `Workspace: "inherit"` when accessing `temp/` or mutating portfolio files | `PROJECT_RULES.md` | All Phases |
| CON-04 | Single PowerShell command per invocation (no `&&` or `||`) | `PROJECT_RULES.md` | All Phases |

---

## Traceability Matrix

| Requirement | Plans | Verification | Status |
|-------------|-------|--------------|--------|
| REQ-01 | 1.1 | Asset hash/existence check | Complete |
| REQ-02 | 1.1 | Grep + JSON/JS metric verification | Complete |
| REQ-03 | 1.2 | Grep + HTML table reconciliation | Complete |
| REQ-04 | 2.1 | DOM & math formula check | Complete |
| REQ-05 | 2.1 | Sub-cohort table metric check | Complete |
| REQ-06 | 2.2 | Statistical & figure embed check | Complete |
| REQ-07 | 2.2 | Algorithm/Demo/Audit section check | Complete |
| REQ-08 | 3.1 | Local server HTTP + Playwright/browser + grep verification | Pending |

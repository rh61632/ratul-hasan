---
milestone: VoC Portfolio Project-Only Synchronization v3.0
version: 3.0.0
updated: 2026-11-10T10:36:00+06:00
---

# Roadmap

> **Current Phase:** 1 - Paper Removal & Project-Only Rebuild
> **Status:** planning

## Must-Haves (from SPEC)

- [ ] All 5 paper PNGs removed from git and `assets/images/projects/voc/`
- [ ] All secret paper sections, equations, KaTeX dependencies, terminology, and citations stripped cleanly from `projects/voc-telecom.html`, `js/data/projects.js`, `css/styles.css`, and `.gsd/`
- [ ] Portfolio synchronized cleanly with public project capabilities (`README.md`, `3d9f889` `LanguageClassifier`, surge/dominance/threshold/version project scripts, filtering ablation, Colab notebooks, and `655,649` / `3,713-day` benchmark)
- [ ] Phase 2 end-to-end HTTP/DOM/Edge/390px/theme verification and zero-paper-leak audit pass cleanly

---

## Phases

### Phase 1: Paper Removal & Project-Only Rebuild
**Status:** 🔄 In Progress
**Objective:** Remove all 5 paper images (`figure0`–`figure4`), clean `css/styles.css`, and rebuild `projects/voc-telecom.html` plus `js/data/projects.js` strictly from the verified public project (`README.md`, `ml/language_detector.py`, `ml/predict.py`, `ml/reports/short_text_filtering_ablation_study.md`, `scripts/analyze_surges.py`, `scripts/audit_point1.py`, `scripts/audit_thresholds.py`, `scripts/check_version_bias.py`, `dl/*.ipynb`).
**Requirements:** REQ-01, REQ-02, REQ-03, REQ-04, NFR-02, NFR-03

**Plans:**
- Planning `/plan 1`

---

### Phase 2: End-to-End Verification & Zero-Paper-Leak Audit
**Status:** ⬜ Not Started
**Objective:** Execute full local HTTP asset checks, HTML/anchor validation, headless Microsoft Edge DOM/hydration/dark-light/true-390px viewport checks, and automated zero-paper-leak grep audits across all tracked files.
**Depends on:** Phase 1
**Requirements:** REQ-05, NFR-01, NFR-02, NFR-03

**Plans:**
- Pending `/plan 2`

---

## Progress Summary

| Phase | Status | Plans | Complete |
|-------|--------|-------|----------|
| 1 | 🔄 | 0/1 | — |
| 2 | ⬜ | 0/1 | — |

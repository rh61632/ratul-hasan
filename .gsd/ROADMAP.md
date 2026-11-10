---
milestone: VoC Portfolio Project-Only Synchronization v3.0
version: 3.0.0
updated: 2026-11-10T10:36:00+06:00
---

# Roadmap

> **Current Phase:** Milestone Complete (Phases 1–3)
> **Status:** complete

## Must-Haves (from SPEC)

- [x] All 5 paper PNGs removed from git and `assets/images/projects/voc/`
- [x] All secret paper sections, equations, KaTeX dependencies, terminology, and citations stripped cleanly from `projects/voc-telecom.html`, `js/data/projects.js`, `css/styles.css`, and `.gsd/`
- [x] Portfolio synchronized cleanly with public project capabilities (`README.md`, `3d9f889` `LanguageClassifier`, surge/dominance/threshold/version project scripts, filtering ablation, Colab notebooks, and `655,649` / `3,713-day` benchmark)
- [x] Phase 2 end-to-end HTTP/DOM/Edge/390px/theme verification and zero-paper-leak audit passed cleanly (`8/8` must-haves)
- [x] Hardcoded `"96 Words • Executive Narrative"` label removed cleanly from Story card; 3-perspective switcher (`Overall` [default], `Technical`, `Business`) implemented, verified in Headless Edge across all 3 views (`1440px` & `390px`, light & dark), and free of jargon in `Business` mode & free of paper leaks (`11/11` must-haves)

---

## Phases

### Phase 1: Paper Removal & Project-Only Rebuild
**Status:** ✅ Complete
**Objective:** Remove all 5 paper images (`figure0`–`figure4`), clean `css/styles.css`, and rebuild `projects/voc-telecom.html` plus `js/data/projects.js` strictly from the verified public project (`README.md`, `ml/language_detector.py`, `ml/predict.py`, `ml/reports/short_text_filtering_ablation_study.md`, `scripts/analyze_surges.py`, `scripts/audit_point1.py`, `scripts/audit_thresholds.py`, `scripts/check_version_bias.py`, `dl/*.ipynb`).
**Requirements:** REQ-01, REQ-02, REQ-03, REQ-04, NFR-02, NFR-03

**Plans:**
- [x] 1-PLAN.md: Clean CSS & Rebuild HTML/JS from Open-Source Project (`6f071ec`)

---

### Phase 2: End-to-End Verification & Zero-Paper-Leak Audit
**Status:** ✅ Complete
**Objective:** Execute full local HTTP asset checks, HTML/anchor validation, headless Microsoft Edge DOM/hydration/dark-light/true-390px viewport checks, and automated zero-paper-leak grep audits across all tracked files.
**Depends on:** Phase 1
**Requirements:** REQ-05, NFR-01, NFR-02, NFR-03

**Plans:**
- [x] 2-PLAN.md: End-to-End Verification & Zero-Paper-Leak Audit (`a21665f`)

---

### Phase 3: Interactive Perspective Switcher & Story Card Polish
**Status:** ✅ Complete
**Objective:** Remove hardcoded Story meta label (`"96 Words • Executive Narrative"`) and implement the 3-button Perspective Switcher (`Overall Perspective` default, `Technical Perspective`, and jargon-free `Business Perspective`) on `projects/voc-telecom.html`, verifying all 3 perspectives in Headless Edge (`1440px` & `390px`, light & dark) plus zero-leak compliance.
**Depends on:** Phase 2
**Requirements:** REQ-06, REQ-07, NFR-01, NFR-02, NFR-03

**Plans:**
- [x] 3-PLAN.md: Story card polish, 3-perspective switcher, deep tech blueprint, jargon-free business suite (`26721ad` + calibration)

---

## Progress Summary

| Phase | Status | Plans | Complete |
|-------|--------|-------|----------|
| 1 | ✅ | 1/1 | 2026-11-10 |
| 2 | ✅ | 1/1 | 2026-11-10 |
| 3 | ✅ | 1/1 | 2026-11-10 |

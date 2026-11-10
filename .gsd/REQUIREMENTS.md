---
milestone: VoC Portfolio Project-Only Synchronization v3.0
updated: 2026-11-10T10:36:00+06:00
---

# Requirements

## Functional Requirements

| ID | Requirement | Source | Phase | Status |
|----|-------------|--------|-------|--------|
| REQ-01 | Delete all 5 paper PNGs (`figure0`–`figure4`) via `git rm` while preserving the 13 project 300 DPI plot PNGs in `assets/images/projects/voc/` | SPEC Goal 1–2 | 1 | Complete |
| REQ-02 | Restore `css/styles.css` to pre-paper baseline by removing KaTeX styling rules | SPEC Goal 1 | 1 | Complete |
| REQ-03 | Rebuild `projects/voc-telecom.html` strictly from project sources (`README.md`, `3d9f889` language detector, project analytics & ablation reports, `dl/*.ipynb`) with zero paper ideas/KaTeX CDN and preserving the 96-word Story card (`CON-01`) | SPEC Goal 1–3 | 1 | Complete |
| REQ-04 | Update `js/data/projects.js` (`voc-telecom` card) strictly with project highlights/tags and canonical `655,649` / `3,713-day` metrics (zero paper terms) | SPEC Goal 1, 3 | 1 | Complete |
| REQ-05 | Verify zero broken local assets (`HTTP 200 OK`), clean HTML/anchors, `#projects-grid` ES6 hydration, dark/light contrast, zero `390px` horizontal overflow (`scrollWidth <= clientWidth`), `CON-01` 96-word preservation, zero stale tokens, and zero secret paper leaks across all tracked files | SPEC Goal 1–3 | 2 | Complete |
| REQ-06 | Remove hardcoded meta badge (`"96 Words • Executive Narrative"`) beside `"The Story Behind the Data"` card (`CON-01` prose intact without robotic metadata) | SPEC Goal 4 | 3 | Complete |
| REQ-07 | Implement 3-button interactive Perspective Switcher at the very top of `projects/voc-telecom.html` (`Overall Perspective` [default], `Technical Perspective` [complete pipeline & modeling engineering], `Business Perspective` [strictly jargon-free findings & business strategy]) verified across 1440px & 390px light/dark viewports | SPEC Goal 4 | 3 | Complete |

## Non-Functional Requirements

| ID | Requirement | Category | Phase | Status |
|----|-------------|----------|-------|--------|
| NFR-01 | Responsive layout parity across desktop (`1440px`) and true mobile (`390px`) viewports without horizontal overflow | UX | 2 | Complete |
| NFR-02 | Full dark/light mode legibility matching `css/styles.css?v=3.0` | Theme | All | Complete |
| NFR-03 | Explicit git staging only (zero `git add -A`, no `temp/` or unrequested root files committed) | Safety | All | Complete |

## Constraints

| ID | Constraint | Source | Impact |
|----|------------|--------|--------|
| CON-SEC | Zero secret paper ideas, figures, formulas, or references anywhere in tracked files at `HEAD` | User Request | All Phases |
| CON-01 | Preserve upfront 96-word continuous Executive Story card in `projects/voc-telecom.html` | User Request | Phase 1, 2 |
| CON-03 | Invoke GSD subagents sequentially with `Workspace: "inherit"` | `PROJECT_RULES.md` | All Phases |
| CON-04 | Single PowerShell statements only (no `&&` or `||`) | `PROJECT_RULES.md` | All Phases |

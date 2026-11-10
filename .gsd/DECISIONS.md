# DECISIONS.md — Architecture Decision Records

> **Purpose**: Log significant technical decisions and their rationale.

---

## [DECISION-001] Use `Workspace: "inherit"` for Sequential GSD Subagents Reading `temp/` or Mutating Files
**Date**: 2026-11-10
**Status**: Accepted

### Context
During `/map`, `gsd-researcher` in `share` (git worktree) mode could not see `temp/telecom-Voice-of-Customer_intelligence/` because `temp/.gitignore` excludes everything inside `temp/` from git checkouts. Furthermore, worktrees leave uncommitted `.gsd/` artifacts isolated from the primary working directory unless manually copied or merged.

### Decision
Invoke sequential single-subagent tasks (`gsd-researcher`, `gsd-planner`, `gsd-executor`, `gsd-verifier`) in `inherit` workspace mode when reading `temp/` or executing single-plan waves directly on the workspace.

### Rationale
Guarantees all subagents see the exact `temp/telecom-Voice-of-Customer_intelligence/` artifacts on disk and write `.gsd/` summaries/verifications directly to the workspace.

### Consequences
Must run one writer subagent at a time sequentially (which already matches GSD wave rules for single-plan waves).

---

## [DECISION-002] Strict Explicit `git add` Staging (Never `git add -A`)
**Date**: 2026-11-10
**Status**: Accepted

### Context
The root portfolio repository has no root `.gitignore`. Untracked files include the newly installed GSD harness (`.agent/`, `.agents/`, `.gemini/`, `PROJECT_RULES.md`, etc.) and `temp/telecom-Voice-of-Customer_intelligence/` (containing `banglabert_finetuned_models.zip` at 821 MB and 347 MB CSVs).

### Decision
All task commits MUST stage only the exact modified/created portfolio files (and `.gsd/` planning/state files when appropriate), never `git add -A` or `git add .`.

### Rationale
Prevents accidentally staging an 821 MB zip file that breaks GitHub remote pushes or mixing GSD harness files into portfolio feature commits.

---

## [DECISION-003] Showcase Research Findings & Architecture Publicly Without Exposing Blinded Manuscript PDFs
**Date**: 2026-11-10
**Status**: Accepted

### Context
Commit `4d5aaad` in `temp/telecom-Voice-of-Customer_intelligence` deliberately stripped unpublished manuscript PDF/DOCX attachments from the public `README.md` to preserve double-blind peer review compliance.

### Decision
Update `projects/voc-telecom.html` with the full scientific findings, mathematical formulations, architecture diagram (`figure0`), analytical figures (`figure1`–`figure4`), linguistic sub-cohort evaluations, Canary Gating protocol (Algorithm 1), Gradio interactive demo coverage, and 8-module audit — without linking `paper/manuscript.pdf` or claiming published/submitted journal status.

### Rationale
Maximizes technical depth and portfolio impact while respecting double-blind academic integrity.

---

*Last updated: 2026-11-10*

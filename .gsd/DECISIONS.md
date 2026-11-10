# Architecture & Workflow Decisions

## DECISION-001: Subagent Workspace Mode for `temp/` Access
- **Decision:** Always invoke GSD subagents sequentially with `Workspace: "inherit"`.
- **Rationale:** `temp/telecom-Voice-of-Customer_intelligence/` is nested/untracked in the root working tree and omitted in `share` worktrees.

## DECISION-002: Explicit Git Staging Discipline
- **Decision:** Always run explicit `git add <file>` / `git rm <file>`; never run `git add -A` or `git add .`.
- **Rationale:** Protects against accidentally staging large `temp/` assets or untracked GSD harness scripts. Pre-commit runs `scripts/generate_thumbnails.py` (~80s).

## DECISION-003: Strict Public-Project-Only Boundary
- **Decision:** Reverse and permanently exclude everything originating from `temp/telecom-Voice-of-Customer_intelligence/paper/` and paper-only scripts/artifacts. Only source facts from the open-source public project (`README.md`, `scraped_data_global/`, `ml/`, `dl/`, `data/gold_set/`, and project CLI scripts `analyze_surges.py`, `audit_point1.py`, `audit_thresholds.py`, `check_version_bias.py`).
- **Rationale:** Explicit user confidentiality directive (`"the paper is a secret idea. reverse all the information pulled from the paper. ignore the paper and only write from the project"`).

## DECISION-004: Preserve Upfront 96-Word Continuous Executive Story Card
- **Decision:** Retain the 96-word `"The Story Behind the Data"` narrative card upfront in `projects/voc-telecom.html`.
- **Rationale:** Directly authored and approved in this session prior to synchronization; zero paper dependencies.

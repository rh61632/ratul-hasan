---
phase: 1
verified: 2026-11-10T08:06:00+06:00
status: passed
score: 8/8 must-haves verified
is_re_verification: false
---

# Phase 1 Verification: Benchmark Calibration, Asset Sync & Portfolio Card Update

## Summary

Phase 1 successfully synchronized all visual plot assets (including timeless `early_era` and `modern_era` series) and 5 new ESWA publication figures (`figure0`–`figure4`) from `temp/telecom-Voice-of-Customer_intelligence/` into `assets/images/projects/voc/`, calibrated the top-level portfolio card in `js/data/projects.js`, and fully aligned `projects/voc-telecom.html` to the canonical **3,713-day** common duration window (`August 1, 2016 – September 30, 2026`, `122 continuous months`, $N = 655,649$). The upfront 96-word continuous Executive Story card is strictly preserved per `CON-01`, and all stale tokens have been eliminated across the codebase.

---

## Must-Haves Verification

### Truths

| # | Observable Truth | Status | Empirical Evidence |
|---|---|---|---|
| 1 | All updated plots and 5 new publication figures exist in `assets/images/projects/voc/` with byte-for-byte SHA256 hash matches against `temp/telecom-Voice-of-Customer_intelligence/` | ✓ VERIFIED | Automated PowerShell SHA256 loop verified 22/22 files matching source hashes (17 plot assets from `assets/plots/` and 5 figures from `paper/eswa_latex/figures/`). All files > 100 KB. |
| 2 | `js/data/projects.js` reflects the canonical 655,649 review benchmark, 3,713-day window, and `655.6k Benchmark` tag with zero syntax errors | ✓ VERIFIED | Python module assertion verified `655,649` at L7-8, `3,713-day` at L8, and `"655.6k Benchmark"` at L14. Node/ES module regex check passed; zero syntax errors. |
| 3 | `projects/voc-telecom.html` reflects canonical 655,649 review count, 3,713-day window, and August 1, 2016 common start across metadata, hero cards, Table 1 scorecard, plot captions, and yearly trajectories | ✓ VERIFIED | Grep verified `655,649` (8 occurrences), `3,713` (9 occurrences), `August 1, 2016` (2 occurrences), and `Aug 1, 2016` (2 occurrences). |
| 4 | Table 1 Scorecard displays GP 320,140 / Robi 198,378 / Banglalink 137,131 / BL NSS +53.0% / Pooled 655,649 | ✓ VERIFIED | Lines 187–245 verified: GP `320,140` (L210), Robi `198,378` (L221), BL `137,131` (L232), BL NSS `+53.0%` (L236), Pooled `655,649` (L241). Sum: $320,140 + 198,378 + 137,131 = 655,649$. |
| 5 | Section 2 Visual Suite `img` `src` attributes reference timeless `*_early_era.png` and `*_modern_era.png` plot assets which resolve cleanly on disk | ✓ VERIFIED | All 13 image references in `projects/voc-telecom.html` resolve cleanly to disk with non-zero bytes; lines 344, 351, 388, 395 reference `yearly_sentiment_trend_early_era.png`, `yearly_sentiment_trend_modern_era.png`, `monthly_nss_trend_early_era.png`, and `monthly_nss_trend_modern_era.png`. |
| 6 | Yearly Trajectory table 2016 row reflects verified Aug–Dec 2016 common-window counts (GP 438, BL 744, BL +45.3%, 63.2% positive) summing with 2017–2026 to exactly 655,649 | ✓ VERIFIED | Lines 538–542 verified: 2016 `(Aug–Dec)`, GP `438`, BL `744`, BL NSS `+45.3%`, prose `63.2% positive`. Python sum of 2016–2026 columns: GP = 320,140, Robi = 198,378, BL = 137,131, Total = 655,649. |
| 7 | Upfront Executive Story card (<140 words, 96 words) is preserved intact per `CON-01` | ✓ VERIFIED | Lines 102–114 verified intact. Python `len(text.split())` confirmed exact word count of 96 words (<140 words), starting with *"Over 180 million subscribers voice daily frustrations..."*. |
| 8 | Zero stale tokens (`655,670`, `3,716`, `Jul 28, 2016`, `July 28, 2016`, `123 Months`, `42 Months`, `20,678`, `320,143`, `137,149`, `pre2020`, `2020_2026`, `+53.1%`, `655.7k`) remain across target files | ✓ VERIFIED | Exhaustive regex scan across `js/data/projects.js` and `projects/voc-telecom.html` returned exactly 0 matches across all 15 stale tokens. |

---

### Artifacts

| Path | Exists | Substantive | Wired | Status |
|---|---|---|---|---|
| `assets/images/projects/voc/category_sentiment_stacked_bars.png` | ✓ | ✓ (183,724 B) | ✓ (used at L499) | ✓ Level 3 Passed |
| `assets/images/projects/voc/monthly_nss_trend_all_months.png` | ✓ | ✓ (720,558 B) | ✓ (on disk) | ✓ Level 3 Passed |
| `assets/images/projects/voc/monthly_nss_trend_line.png` | ✓ | ✓ (720,558 B) | ✓ (used at L372) | ✓ Level 3 Passed |
| `assets/images/projects/voc/monthly_nss_trend_early_era.png` | ✓ | ✓ (471,362 B) | ✓ (used at L388) | ✓ Level 3 Passed |
| `assets/images/projects/voc/monthly_nss_trend_modern_era.png` | ✓ | ✓ (665,746 B) | ✓ (used at L395) | ✓ Level 3 Passed |
| `assets/images/projects/voc/multi_year_sentiment_trend_line.png` | ✓ | ✓ (393,312 B) | ✓ (used at L328) | ✓ Level 3 Passed |
| `assets/images/projects/voc/yearly_sentiment_trend_early_era.png` | ✓ | ✓ (222,891 B) | ✓ (used at L344) | ✓ Level 3 Passed |
| `assets/images/projects/voc/yearly_sentiment_trend_modern_era.png` | ✓ | ✓ (293,812 B) | ✓ (used at L351) | ✓ Level 3 Passed |
| `assets/images/projects/voc/net_sentiment_score_comparison_bars.png` | ✓ | ✓ (151,844 B) | ✓ (used at L280) | ✓ Level 3 Passed |
| `assets/images/projects/voc/operator_category_complaint_distribution_bars.png` | ✓ | ✓ (219,178 B) | ✓ (used at L478) | ✓ Level 3 Passed |
| `assets/images/projects/voc/operator_sentiment_distribution_bars.png` | ✓ | ✓ (142,552 B) | ✓ (used at L301) | ✓ Level 3 Passed |
| `assets/images/projects/voc/figure0_system_architecture.png` | ✓ | ✓ (704,731 B) | Prepared for Phase 2 | ✓ Level 3 Passed |
| `assets/images/projects/voc/figure1_monthly_nss_trajectory.png` | ✓ | ✓ (680,696 B) | Prepared for Phase 2 | ✓ Level 3 Passed |
| `assets/images/projects/voc/figure2_yearly_leadership_strip.png` | ✓ | ✓ (194,664 B) | Prepared for Phase 2 | ✓ Level 3 Passed |
| `assets/images/projects/voc/figure3_priority_matrix.png` | ✓ | ✓ (517,546 B) | Prepared for Phase 2 | ✓ Level 3 Passed |
| `assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png` | ✓ | ✓ (236,891 B) | Prepared for Phase 2 | ✓ Level 3 Passed |
| `js/data/projects.js` | ✓ | ✓ (6,119 B) | ✓ (imported by `index.html`) | ✓ Level 3 Passed |
| `projects/voc-telecom.html` | ✓ | ✓ (82,173 B) | ✓ (linked from `index.html`) | ✓ Level 3 Passed |

---

### Key Links

| From | To | Via | Status | Evidence |
|---|---|---|---|---|
| `index.html` | `js/data/projects.js` | ES6 dynamic import `projectsData` | ✓ WIRED | Line 7-14 in `js/data/projects.js` exports `id: "voc-telecom"` with valid syntax; renders card on homepage |
| `js/data/projects.js` | `projects/voc-telecom.html` | `caseStudyUrl: "projects/voc-telecom.html"` | ✓ WIRED | Link target exists and opens valid case study |
| `projects/voc-telecom.html` | `assets/images/projects/voc/*` | HTML `<img>` `src` tags | ✓ WIRED | 13/13 image tags verified resolving to disk with matching bytes |

---

## Empirical Verification Commands & Results

### 1. SHA256 Hash Verification (temp/ vs assets/images/projects/voc/)

#### Plot Assets (17 files):
```powershell
$plotFiles = @("category_sentiment_stacked_bars.png", "monthly_nss_trend_all_months.png", "monthly_nss_trend_line.png", "monthly_nss_trend_early_era.png", "monthly_nss_trend_pre2020.png", "monthly_nss_trend_modern_era.png", "monthly_nss_trend_2020_2026.png", "multi_year_sentiment_trend_line.png", "monthly_sentiment_trend_line.png", "yearly_sentiment_trend_all_years.png", "yearly_sentiment_trend_early_era.png", "yearly_sentiment_trend_pre2020.png", "yearly_sentiment_trend_modern_era.png", "yearly_sentiment_trend_2020_2026.png", "net_sentiment_score_comparison_bars.png", "operator_category_complaint_distribution_bars.png", "operator_sentiment_distribution_bars.png")
foreach ($f in $plotFiles) {
  $src = "temp/telecom-Voice-of-Customer_intelligence/assets/plots/$f"
  $dst = "assets/images/projects/voc/$f"
  $hSrc = (Get-FileHash -Algorithm SHA256 $src).Hash
  $hDst = (Get-FileHash -Algorithm SHA256 $dst).Hash
  [PSCustomObject]@{ File = $f; Match = ($hSrc -eq $hDst); Hash = $hDst.Substring(0,12) }
}
```
**Output:** 17/17 `Match: True`.

#### Publication Figures (5 files):
```powershell
$figFiles = @("figure0_system_architecture.png", "figure1_monthly_nss_trajectory.png", "figure2_yearly_leadership_strip.png", "figure3_priority_matrix.png", "figure4_banglalink_reversal_decomposition.png")
foreach ($f in $figFiles) {
  $src = "temp/telecom-Voice-of-Customer_intelligence/paper/eswa_latex/figures/$f"
  $dst = "assets/images/projects/voc/$f"
  $hSrc = (Get-FileHash -Algorithm SHA256 $src).Hash
  $hDst = (Get-FileHash -Algorithm SHA256 $dst).Hash
  [PSCustomObject]@{ File = $f; Match = ($hSrc -eq $hDst); Hash = $hDst.Substring(0,12) }
}
```
**Output:** 5/5 `Match: True` (`7738D321BFE6`, `A591ED26F554`, `6AF54B687B21`, `0D687E2648C1`, `5F6B227882C3`).

### 2. Stale Token Elimination Scan

```powershell
$tokens = @("655,670", "3,716", "123-month", "123 month", "123 Months", "20,678", "320,143", "137,149", "pre2020", "2020_2026", "655.7k", "Jul 28, 2016", "July 28, 2016", "42 Months", "\+53\.1%")
$targetFiles = @("js/data/projects.js", "projects/voc-telecom.html")
$totalFound = 0
foreach ($f in $targetFiles) {
  foreach ($t in $tokens) {
    $m = Select-String -Path $f -Pattern $t
    if ($m) { $totalFound += $m.Count }
  }
}
Write-Output "Total stale tokens found: $totalFound"
```
**Output:** `Total stale tokens found: 0`.

### 3. Canonical Token Presence

- `655,649`: Present in `js/data/projects.js` (lines 7, 8) and `projects/voc-telecom.html` (8 occurrences).
- `3,713-day` / `3,713`: Present in `js/data/projects.js` (line 8) and `projects/voc-telecom.html` (9 occurrences).
- `August 1, 2016` / `Aug 1, 2016`: Present in `projects/voc-telecom.html` (4 occurrences).
- `122 Months`: Present in `projects/voc-telecom.html` (lines 358, 363, 373).
- `41 Months`: Present in `projects/voc-telecom.html` (line 386).
- `20,657`: Present in `projects/voc-telecom.html` (line 342).
- `320,140`: Present in `projects/voc-telecom.html` (lines 210, 878).
- `198,378`: Present in `projects/voc-telecom.html` (lines 221, 894).
- `137,131`: Present in `projects/voc-telecom.html` (lines 232, 910).
- `+53.0%`: Present in `projects/voc-telecom.html` (lines 236, 287, 910).

### 4. Mathematical Reconciliation of Yearly Sums

```python
gp = [438, 587, 605, 2392, 27600, 40535, 45702, 60609, 75059, 54262, 12351]
robi = [126, 367, 1418, 4186, 32333, 30296, 34418, 16784, 16804, 42743, 18903]
bl = [744, 2518, 3041, 4235, 17538, 25471, 21442, 14761, 15333, 10238, 21810]
assert sum(gp) == 320140
assert sum(robi) == 198378
assert sum(bl) == 137131
assert sum(gp) + sum(robi) + sum(bl) == 655649
```
**Output:** Sums verified exact.

### 5. Git Safety & Commit Traceability

Commits landing cleanly:
- `3f8bddc`: `feat(phase-1): sync updated plot assets and 5 publication figures`
- `dd45db1`: `feat(phase-1): calibrate VoC portfolio card to canonical 655,649 / 3,713-day benchmark`
- `79beed1`: `fix(voc): align hero, scorecard, and visual suite to canonical 655,649 baseline`
- `98e4be9`: `fix(voc): calibrate yearly trajectory table and roadmaps to 655,649 dataset`

Diff against base `85e56f8` touches only `assets/images/projects/voc/`, `js/data/projects.js`, and `projects/voc-telecom.html`. Zero unrequested files or `temp/` contents were staged.

---

## Anti-Patterns Found

Zero blocker anti-patterns detected:
- No `TODO`, `FIXME`, `XXX`, `HACK`, `PLACEHOLDER`, or `coming soon` strings found.
- No broken `<img>` tags or 404 links.
- No double-blind manuscript leaks or unpublished submission claims per `CON-02`.

---

## Human Verification Needed

None for Phase 1. All verifications are programmatically proven via SHA256 checksums, DOM AST / regex parsing, and mathematical equality assertions. Full end-to-end visual and theme parity will be verified holistically in Phase 3.

---

## Verdict

**Status: passed**  
**Score: 8/8 must-haves verified**

Phase 1 has achieved 100% of its objectives with empirical backing. All requirements REQ-01, REQ-02, and REQ-03 are satisfied. Ready to proceed to Phase 2.

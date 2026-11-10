---
phase: 1
plan: 2
wave: 2
depends_on:
  - 1
files_modified:
  - projects/voc-telecom.html
autonomous: true
gap_closure: false
must_haves:
  truths:
    - "projects/voc-telecom.html reflects canonical 655,649 review count, 3,713-day window, and August 1, 2016 common start across all metadata, hero cards, Table 1 scorecard, plot captions, and yearly trajectories"
    - "Table 1 Scorecard displays GP 320,140 / Robi 198,378 / Banglalink 137,131 / BL NSS +53.0% / Pooled 655,649"
    - "Section 2 Visual Suite img src attributes reference timeless *_early_era.png and *_modern_era.png plot assets which resolve cleanly on disk"
    - "Yearly Trajectory table 2016 row reflects verified Aug-Dec 2016 common-window counts (GP 438, BL 744, BL +45.3%, 63.2% positive) summing with 2017-2026 to exactly 655,649"
    - "Upfront Executive Story card (<140 words, 96 words) is preserved intact per CON-01"
    - "Zero occurrences of stale tokens (655,670, 3,716, Jul 28, 2016, 123 Months, 42 Months, 20,678, 320,143, 137,149, pre2020, 2020_2026, +53.1%) remain in projects/voc-telecom.html"
  artifacts:
    - "projects/voc-telecom.html"
---

# Plan 1.2: Align Case Study to Canonical Benchmark & Synchronized Visual Suite

## Objective
Update `projects/voc-telecom.html` to align every metric, date boundary, operator total, yearly trajectory, image source, and plot caption with the canonical 3,713-day common window (`August 1, 2016 – September 30, 2026`, `122 months`, `N = 655,649`: GP `320,140`, Robi `198,378`, Banglalink `137,131`), while strictly preserving the upfront <140-word Executive Story card and switching all legacy era plot image sources to timeless `*_early_era.png` and `*_modern_era.png` assets.

## Context
Load these files for context:
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `.gsd/DECISIONS.md`
- `.gsd/phases/1/RESEARCH.md`
- `projects/voc-telecom.html`

## Tasks

<task type="auto">
  <name>Align OpenGraph metadata, Hero cards, Table 1 Scorecard, and Section 2 Visual Suite</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Calibrate metadata, hero elements, Table 1 scorecard, and Section 2 visual suite in `projects/voc-telecom.html`:

    1. OpenGraph metadata:
       - Line 10: Replace `655,670` with `655,649`, and replace `3,716-day` with `3,713-day`.

    2. Hero Section:
       - CRITICAL (CON-01): Preserve the Executive Narrative Story card at lines 102-114 completely intact (`Over 180 million subscribers voice daily frustrations across app stores...`, `96 Words • Executive Narrative`). DO NOT remove or modify this card.
       - Line 123 (Methodological Equity): Replace `3,716-Day Common Duration Window (July 28, 2016 – September 30, 2026 | N = 655,670)` with `3,713-Day Common Duration Window (August 1, 2016 – September 30, 2026 | N = 655,649)`.
       - Line 126 (CLT Normality Rule): Retain the July 2016 exclusion example (`such as July 2016 where Grameenphone had 3 reviews and Robi had 0`) as documented in SPEC and RESEARCH.
       - Line 132: Replace `655,670 Common Benchmark` with `655,649 Common Benchmark`.
       - Line 133: Replace `3,716-Day Window (2016–2026)` with `3,713-Day Window (Aug 2016–Sep 2026)`.
       - Line 147: Replace `655,670` with `655,649`.
       - Line 151: Replace `Exact continuous 3,716-day window (Jul 28, 2016 – Sep 30, 2026)` with `Exact continuous 3,713-day window (Aug 1, 2016 – Sep 30, 2026)`.

    3. Section 1 Scorecard Table:
       - Line 187: Replace `Common Duration Benchmark (July 28, 2016 – September 30, 2026 | 3,716 Days)` with `Common Duration Benchmark (August 1, 2016 – September 30, 2026 | 3,713 Days)`.
       - Line 189: Replace `N = 655,670 Reviews` with `N = 655,649 Reviews`.
       - Line 210: Replace Grameenphone total `320,143` with `320,140`.
       - Line 232: Replace Banglalink total `137,149` with `137,131`.
       - Line 236: Replace Banglalink NSS `+53.1%` with `+53.0%`.
       - Line 241: Replace Industry Benchmark total `655,670` with `655,649`.

    4. Section 2 Visual Suite:
       - Line 264: Replace `655,670 Reviews across 3,716 Shared Days` with `655,649 Reviews across 3,713 Shared Days`.
       - Line 287 (Fig 1.1 caption): Replace `3,716-day common window` with `3,713-day common window`, and replace `+53.1% NSS` with `+53.0% NSS`.
       - Line 321 (Plot 3 subtitle): Replace `3,716 Shared Days (Jul 28, 2016 – Sep 30, 2026)` with `3,713 Shared Days (Aug 1, 2016 – Sep 30, 2026)`.
       - Line 342 (Early Era Yearly label): Replace `N = 20,678` with `N = 20,657`.
       - Line 344 (Early Era Yearly img src): Replace `../assets/images/projects/voc/yearly_sentiment_trend_pre2020.png` with `../assets/images/projects/voc/yearly_sentiment_trend_early_era.png`.
       - Line 351 (Modern Era Yearly img src): Replace `../assets/images/projects/voc/yearly_sentiment_trend_2020_2026.png` with `../assets/images/projects/voc/yearly_sentiment_trend_modern_era.png`.
       - Lines 358, 363, 373 (Plot 4 Monthly NSS): Replace `123 Months · Jul 2016 – Sep 2026` with `122 Months · Aug 2016 – Sep 2026`, and `(123 Months)` with `(122 Months)`.
       - Line 386 (Early Era Monthly label): Replace `42 Months · Jul 2016 – Dec 2019` with `41 Months · Aug 2016 – Dec 2019`.
       - Line 388 (Early Era Monthly img src): Replace `../assets/images/projects/voc/monthly_nss_trend_pre2020.png` with `../assets/images/projects/voc/monthly_nss_trend_early_era.png`.
       - Line 395 (Modern Era Monthly img src): Replace `../assets/images/projects/voc/monthly_nss_trend_2020_2026.png` with `../assets/images/projects/voc/monthly_nss_trend_modern_era.png`.
       - Line 506 (Fig 1.7 caption): Calibrate `>90% negative across all three operators` to `~90–93% negative` (`>89.7%`), and `~88%` for App Login (`87.1%–89.3%`).

    5. Stage and commit explicitly per DECISION-002:
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "fix(voc): align hero, scorecard, and visual suite to canonical 655,649 baseline"`
       AVOID: Never run `git add -A` or `git add .`.
       NOTE: Pre-commit hook runs `python3 scripts/generate_thumbnails.py` (~80s). Wait and verify with `git log -1 --oneline`.
  </action>
  <verify>
    Execute validation check via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    # Verify executive narrative card preserved
    if (-not ($html -match "The Story Behind the Data" -and $html -match "96 Words • Executive Narrative")) {
      throw "Executive narrative story card missing or altered!"
    }
    # Verify image sources point to early_era and modern_era
    if ($html -match "yearly_sentiment_trend_pre2020\.png" -or $html -match "monthly_nss_trend_pre2020\.png") {
      throw "Legacy pre2020 image sources still present in HTML!"
    }
    if (-not ($html -match "yearly_sentiment_trend_early_era\.png" -and $html -match "monthly_nss_trend_early_era\.png")) {
      throw "Early era image sources missing in HTML!"
    }
    # Verify Scorecard numbers
    if (-not ($html -match "320,140" -and $html -match "137,131" -and $html -match "122 Months")) {
      throw "Scorecard or monthly duration calibration missing!"
    }
    Write-Output "Task 1 verification passed: Hero, Scorecard, and Visual Suite calibrated."
    ```
  </verify>
  <done>
    `projects/voc-telecom.html` hero badges, Table 1 scorecard, and Section 2 visual suite reflect the canonical 655,649 / 3,713-day dataset, `img` tags reference valid `*_early_era.png` and `*_modern_era.png` files, and the Executive Story card remains intact.
  </done>
</task>

<task type="auto">
  <name>Calibrate Yearly Trajectory Table, Strategic Roadmaps, and verify zero stale references</name>
  <files>
    projects/voc-telecom.html
  </files>
  <action>
    Calibrate Section 3 yearly table rows, Section 6 strategic roadmap totals, and run a full stale-token audit across `projects/voc-telecom.html`:

    1. Section 3 Year-by-Year Strategic Inflection Points Table:
       - Line 521: Replace `3,716-day window (N = 655,670)` with `3,713-day window (N = 655,649)`.
       - Line 538: Replace `2016 <span class="text-[10px] text-slate-400 block font-normal">(Jul–Dec)</span>` with `2016 <span class="text-[10px] text-slate-400 block font-normal">(Aug–Dec)</span>`.
       - Line 539: In GP 2016 cell, replace `(441)` with `(438)`.
       - Line 541: In Banglalink 2016 cell, replace `+46.3% <span class="text-[10px] text-slate-400 block font-normal">(762)</span>` with `+45.3% <span class="text-[10px] text-slate-400 block font-normal">(744)</span>`.
       - Line 542: In 2016 prose, replace `63.8% positive feedback` with `63.2% positive feedback` (exact CSV: 470 / 744 = 63.17%).
       - Line 549: In 2017 prose, replace `67.8% negative reviews` with `68.4% negative reviews` (`yearly_intelligence_trends.json:57`, live CSV).
       - Line 556: In 2018 prose, replace `47.9%` with `50.4%`, and replace `53.6%` with `56.7%` (`yearly_intelligence_trends.json:83,95`, live CSV).
       - Line 563: In 2019 prose, replace `51.5%` with `50.9%` (`yearly_intelligence_trends.json:132`, live CSV).
       - Line 612: In 2026 prose, replace `86.8% positive` with `87.1% positive` (`yearly_intelligence_trends.json:410`, live CSV).
       - Confirm that 2017–2026 annual review volumes and NSS figures in lines 545–611 remain accurate and match canonical trends.

    2. Section 6 Strategic Roadmaps:
       - Line 878: In GP roadmap card, replace `(320,143 reviews)` with `(320,140 reviews)`.
       - Line 910: In Banglalink roadmap card, replace `+53.1%</span> (137,149 reviews)` with `+53.0%</span> (137,131 reviews)`.

    3. Comprehensive Stale-Token Audit:
       Run an exhaustive check confirming 0 instances of each stale token:
       - `655,670`
       - `3,716`
       - `July 28, 2016` or `Jul 28, 2016`
       - `123 Months`
       - `42 Months`
       - `20,678`
       - `320,143`
       - `137,149`
       - `+53.1%`
       - `yearly_sentiment_trend_pre2020.png`
       - `monthly_nss_trend_pre2020.png`

    4. Stage and commit explicitly per DECISION-002:
       Run: `git add projects/voc-telecom.html`
       Run: `git commit -m "fix(voc): calibrate yearly trajectory table and roadmaps to 655,649 dataset"`
       AVOID: Never run `git add -A` or `git add .`.
       NOTE: Pre-commit hook runs `python3 scripts/generate_thumbnails.py` (~80s). Wait and verify with `git log -1 --oneline`.
  </action>
  <verify>
    Execute full audit script via PowerShell:
    ```powershell
    $html = Get-Content projects/voc-telecom.html -Raw
    $stalePatterns = @(
      "655,670", "3,716", "Jul 28, 2016", "July 28, 2016",
      "123 Months", "42 Months", "20,678", "320,143", "137,149",
      "\+53\.1%", "yearly_sentiment_trend_pre2020\.png", "monthly_nss_trend_pre2020\.png"
    )
    $found = @()
    foreach ($pat in $stalePatterns) {
      if ($html -match $pat) { $found += $pat }
    }
    if ($found.Count -gt 0) {
      throw "Stale tokens still detected in projects/voc-telecom.html: $($found -join ', ')"
    }

    # Verify canonical presence
    $required = @("655,649", "3,713", "August 1, 2016", "122 Months", "41 Months", "20,657", "320,140", "137,131", "+53.0%")
    foreach ($req in $required) {
      if (-not ($html.Contains($req))) {
        throw "Required calibrated token missing in projects/voc-telecom.html: $req"
      }
    }
    Write-Output "Audit passed: Zero stale tokens and all canonical tokens verified."
    ```
  </verify>
  <done>
    Zero stale tokens remain in `projects/voc-telecom.html`. Yearly table rows, Section 6 roadmap cards, Table 1 scorecard, and hero metrics all align with the canonical 655,649 / 3,713-day dataset.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `projects/voc-telecom.html` reflects canonical `655,649` review count, `3,713-day` window, and `August 1, 2016` common start
- [ ] Table 1 Scorecard shows GP `320,140` / Robi `198,378` / Banglalink `137,131` / BL NSS `+53.0%` / Pooled `655,649`
- [ ] Section 2 Visual Suite `img` `src` attributes reference `*_early_era.png` and `*_modern_era.png` plot assets
- [ ] Yearly Trajectory table 2016 row reflects verified Aug–Dec 2016 counts (`438` GP, `744` BL, `+45.3%` BL NSS, `63.2%` positive)
- [ ] Upfront Executive Story card (<140 words, 96 words) is preserved intact per CON-01
- [ ] Zero stale tokens (`655,670`, `3,716`, `Jul 28, 2016`, `123 Months`, `42 Months`, `20,678`, `320,143`, `137,149`, `pre2020`, `2020_2026`, `+53.1%`) exist in `projects/voc-telecom.html`

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] Pre-commit hook completed cleanly and `git log -1 --oneline` shows expected commit

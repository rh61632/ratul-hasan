---
phase: 1
plan: 1
wave: 1
depends_on: []
files_modified:
  - assets/images/projects/voc/category_sentiment_stacked_bars.png
  - assets/images/projects/voc/monthly_nss_trend_all_months.png
  - assets/images/projects/voc/monthly_nss_trend_line.png
  - assets/images/projects/voc/monthly_nss_trend_early_era.png
  - assets/images/projects/voc/monthly_nss_trend_pre2020.png
  - assets/images/projects/voc/monthly_nss_trend_modern_era.png
  - assets/images/projects/voc/monthly_nss_trend_2020_2026.png
  - assets/images/projects/voc/multi_year_sentiment_trend_line.png
  - assets/images/projects/voc/monthly_sentiment_trend_line.png
  - assets/images/projects/voc/yearly_sentiment_trend_all_years.png
  - assets/images/projects/voc/yearly_sentiment_trend_early_era.png
  - assets/images/projects/voc/yearly_sentiment_trend_pre2020.png
  - assets/images/projects/voc/yearly_sentiment_trend_modern_era.png
  - assets/images/projects/voc/yearly_sentiment_trend_2020_2026.png
  - assets/images/projects/voc/net_sentiment_score_comparison_bars.png
  - assets/images/projects/voc/operator_category_complaint_distribution_bars.png
  - assets/images/projects/voc/operator_sentiment_distribution_bars.png
  - assets/images/projects/voc/figure0_system_architecture.png
  - assets/images/projects/voc/figure1_monthly_nss_trajectory.png
  - assets/images/projects/voc/figure2_yearly_leadership_strip.png
  - assets/images/projects/voc/figure3_priority_matrix.png
  - assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png
  - js/data/projects.js
autonomous: true
gap_closure: false
must_haves:
  truths:
    - "All updated plots and all 5 new publication figures exist in assets/images/projects/voc/ with verified SHA256 hashes matching source files in temp/telecom-Voice-of-Customer_intelligence/"
    - "js/data/projects.js reflects the canonical 655,649 review benchmark, 3,713-day window, and 655.6k benchmark badge with zero syntax errors"
  artifacts:
    - "assets/images/projects/voc/figure0_system_architecture.png"
    - "assets/images/projects/voc/figure1_monthly_nss_trajectory.png"
    - "assets/images/projects/voc/figure2_yearly_leadership_strip.png"
    - "assets/images/projects/voc/figure3_priority_matrix.png"
    - "assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png"
    - "assets/images/projects/voc/monthly_nss_trend_early_era.png"
    - "assets/images/projects/voc/monthly_nss_trend_modern_era.png"
    - "assets/images/projects/voc/yearly_sentiment_trend_early_era.png"
    - "assets/images/projects/voc/yearly_sentiment_trend_modern_era.png"
    - "js/data/projects.js"
---

# Plan 1.1: Visual Asset Synchronization & Portfolio Project Card Update

## Objective
Synchronize the visual suite in `assets/images/projects/voc/` by copying the updated high-resolution 300 DPI plots and 5 new publication-grade system/analytical figures from `temp/telecom-Voice-of-Customer_intelligence/`, and calibrate the top-level VoC portfolio card in `js/data/projects.js` to the canonical 655,649 / 3,713-day / 122-month common duration dataset.

## Context
Load these files for context:
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `.gsd/DECISIONS.md`
- `.gsd/phases/1/RESEARCH.md`
- `js/data/projects.js`

## Tasks

<task type="auto">
  <name>Sync updated plot PNGs and 5 new publication figures to assets/images/projects/voc/</name>
  <files>
    assets/images/projects/voc/category_sentiment_stacked_bars.png
    assets/images/projects/voc/monthly_nss_trend_all_months.png
    assets/images/projects/voc/monthly_nss_trend_line.png
    assets/images/projects/voc/monthly_nss_trend_early_era.png
    assets/images/projects/voc/monthly_nss_trend_pre2020.png
    assets/images/projects/voc/monthly_nss_trend_modern_era.png
    assets/images/projects/voc/monthly_nss_trend_2020_2026.png
    assets/images/projects/voc/multi_year_sentiment_trend_line.png
    assets/images/projects/voc/monthly_sentiment_trend_line.png
    assets/images/projects/voc/yearly_sentiment_trend_all_years.png
    assets/images/projects/voc/yearly_sentiment_trend_early_era.png
    assets/images/projects/voc/yearly_sentiment_trend_pre2020.png
    assets/images/projects/voc/yearly_sentiment_trend_modern_era.png
    assets/images/projects/voc/yearly_sentiment_trend_2020_2026.png
    assets/images/projects/voc/net_sentiment_score_comparison_bars.png
    assets/images/projects/voc/operator_category_complaint_distribution_bars.png
    assets/images/projects/voc/operator_sentiment_distribution_bars.png
    assets/images/projects/voc/figure0_system_architecture.png
    assets/images/projects/voc/figure1_monthly_nss_trajectory.png
    assets/images/projects/voc/figure2_yearly_leadership_strip.png
    assets/images/projects/voc/figure3_priority_matrix.png
    assets/images/projects/voc/figure4_banglalink_reversal_decomposition.png
  </files>
  <action>
    Synchronize plot assets and new publication figures from the staged source repository:

    1. Copy updated plots and era-specific renders from `temp/telecom-Voice-of-Customer_intelligence/assets/plots/` to `assets/images/projects/voc/`:
       - Overwrite changed plots: `category_sentiment_stacked_bars.png`, `monthly_nss_trend_all_months.png`, `monthly_nss_trend_line.png`, `multi_year_sentiment_trend_line.png`, `net_sentiment_score_comparison_bars.png`, `operator_category_complaint_distribution_bars.png`, `operator_sentiment_distribution_bars.png`.
       - Copy timeless early/modern era plots: `monthly_nss_trend_early_era.png`, `monthly_nss_trend_modern_era.png`, `yearly_sentiment_trend_early_era.png`, `yearly_sentiment_trend_modern_era.png`.
       - Sync alias files to maintain binary parity: `monthly_nss_trend_pre2020.png`, `monthly_nss_trend_2020_2026.png`, `monthly_sentiment_trend_line.png`, `yearly_sentiment_trend_all_years.png`, `yearly_sentiment_trend_pre2020.png`, `yearly_sentiment_trend_2020_2026.png`.
       - Preserve existing unreferenced operator logos (`gp.png`, `robi.png`, `banglalink.png`) and unchanged plots (`nss_stability_volatility_bars.png`, `sentiment_model_benchmark_bars.png`, `category_model_benchmark_bars.png`).

    2. Copy all 5 new publication figures from `temp/telecom-Voice-of-Customer_intelligence/paper/eswa_latex/figures/` to `assets/images/projects/voc/`:
       - `figure0_system_architecture.png` (~705 KB)
       - `figure1_monthly_nss_trajectory.png` (~681 KB)
       - `figure2_yearly_leadership_strip.png` (~195 KB)
       - `figure3_priority_matrix.png` (~518 KB)
       - `figure4_banglalink_reversal_decomposition.png` (~237 KB)

    3. Stage explicit file paths in git per DECISION-002:
       Stage only the exact modified/new files in `assets/images/projects/voc/`.
       AVOID: Never run `git add -A` or `git add .` because `temp/` contains an 821 MB zip and untracked harness files.
       NOTE: `.githooks/pre-commit` executes `python3 scripts/generate_thumbnails.py` (~80s). Wait for commit to finish and verify with `git log -1 --oneline`.
  </action>
  <verify>
    Run PowerShell verification commands to confirm all files exist, have non-zero size (> 100 KB), and match source hashes:
    ```powershell
    $files = @(
      "category_sentiment_stacked_bars.png", "monthly_nss_trend_all_months.png", "monthly_nss_trend_line.png",
      "monthly_nss_trend_early_era.png", "monthly_nss_trend_pre2020.png", "monthly_nss_trend_modern_era.png",
      "monthly_nss_trend_2020_2026.png", "multi_year_sentiment_trend_line.png", "monthly_sentiment_trend_line.png",
      "yearly_sentiment_trend_all_years.png", "yearly_sentiment_trend_early_era.png", "yearly_sentiment_trend_pre2020.png",
      "yearly_sentiment_trend_modern_era.png", "yearly_sentiment_trend_2020_2026.png", "net_sentiment_score_comparison_bars.png",
      "operator_category_complaint_distribution_bars.png", "operator_sentiment_distribution_bars.png",
      "figure0_system_architecture.png", "figure1_monthly_nss_trajectory.png", "figure2_yearly_leadership_strip.png",
      "figure3_priority_matrix.png", "figure4_banglalink_reversal_decomposition.png"
    )
    foreach ($f in $files) {
      $p = "assets/images/projects/voc/$f"
      if (-not (Test-Path $p)) { throw "Missing file: $p" }
      $len = (Get-Item $p).Length
      if ($len -lt 100000) { throw "File too small ($len bytes): $p" }
    }
    Write-Output "All 22 plot and publication figure files verified successfully."
    ```
  </verify>
  <done>
    All 17 updated/new plots and 5 new publication figures exist in `assets/images/projects/voc/`, have non-zero sizes > 100 KB, and match source SHA256 hashes.
  </done>
</task>

<task type="auto">
  <name>Calibrate VoC card metrics in js/data/projects.js</name>
  <files>
    js/data/projects.js
  </files>
  <action>
    Update the VoC project card entry (`id: "voc-telecom"`) in `js/data/projects.js`:

    1. In `shortSummary` (line 7):
       Replace `655,670` with `655,649`.
       Keep operator color spans and BUET BanglaBERT / Soft-Voting wording unchanged.

    2. In `description` (line 8):
       Replace `655,670` with `655,649`.
       Replace `3,716-day` with `3,713-day`.
       Keep `661.2k master corpus`, `91.6% CV Acc`, and `87.4% Category Acc` unchanged.

    3. In `tags` (line 14):
       Replace `"655.7k Benchmark"` with `"655.6k Benchmark"`.

    4. Stage and commit explicitly per DECISION-002:
       Run: `git add js/data/projects.js`
       Run: `git commit -m "fix(data): calibrate VoC portfolio card to canonical 655,649 / 3,713-day benchmark"`
       AVOID: Never run `git add -A` or `git add .`.
       NOTE: Wait for `.githooks/pre-commit` (~80s) and verify with `git log -1 --oneline`.
  </action>
  <verify>
    Execute validation check via PowerShell and Node:
    ```powershell
    $c = Get-Content js/data/projects.js -Raw
    if ($c -match "655,670" -or $c -match "3,716" -or $c -match "655\.7k Benchmark") {
      throw "Stale benchmark tokens still found in js/data/projects.js!"
    }
    if (-not ($c -match "655,649" -and $c -match "3,713-day" -and $c -match "655\.6k Benchmark")) {
      throw "Expected calibrated tokens not found in js/data/projects.js!"
    }
    node --input-type=module -e "import('./js/data/projects.js').then(m => { const v = m.projectsData.find(p => p.id === 'voc-telecom'); console.log('Parsed card:', v.id, v.tags); if (!v.shortSummary.includes('655,649')) process.exit(1); })"
    ```
  </verify>
  <done>
    `js/data/projects.js` loads cleanly as valid ES module syntax, contains canonical `655,649`, `3,713-day`, and `"655.6k Benchmark"`, and contains zero occurrences of `655,670`, `3,716`, or `655.7k Benchmark`.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] All 17 updated/new plots and 5 new publication figures exist in `assets/images/projects/voc/` and match source SHA256 hashes
- [ ] `js/data/projects.js` reflects canonical `655,649` review count, `3,713-day` window, and `"655.6k Benchmark"` tag
- [ ] Zero instances of `655,670`, `3,716`, or `655.7k` remain in `js/data/projects.js`
- [ ] Commit staged only explicit files (`assets/images/projects/voc/*.png`, `js/data/projects.js`) without touching `temp/` or root harness files

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] Pre-commit hook completed cleanly and `git log -1 --oneline` shows expected commit

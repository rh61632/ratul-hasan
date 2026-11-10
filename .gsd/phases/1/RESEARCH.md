---
phase: 1
researched_at: 2026-11-10
discovery_level: 2
---

# Phase 1 Research: Benchmark Calibration, Asset Sync & Portfolio Card Update

## Objective
Verify every file difference, metric calibration, date boundary, and stale reference between the staged VoC source repository (`temp/telecom-Voice-of-Customer_intelligence/`) and the portfolio files (`assets/images/projects/voc/`, `js/data/projects.js`, and `projects/voc-telecom.html`), answering the three Phase 1 research questions with exact `file:line` citations and empirical hash/CSV checks.

## Discovery Level
**Level 2** — Standard research (directory SHA256 comparison, cross-file benchmark reconciliation across JSON/MD/CSV/Python generators, and line-by-line audit of `js/data/projects.js` and `projects/voc-telecom.html`).

---

## Key Decisions

### Decision 1: Authoritative Source for 2016 Yearly Split (`N = 655,649` vs `yearly_intelligence_trends.json` `655,670`)
**Question:** `common_duration_summary.json` (`N = 655,649`), `merge_and_sync_all_datasets.py`, and `audit_project_integrity.py` enforce `2016-08-01` to `2026-09-30` (`3,713 days`, `122 months`), whereas `yearly_intelligence_trends.json` (lines `1–420`), `global_multi_year_intelligence_report.md` (lines `32–34`), and `README.md` (line `120`) still display pre-trim `Jul 28 – Dec 31, 2016` totals (`441` GP / `126` Robi / `762` BL = `1,329`, summing all years to `655,670`). Which numbers should Phase 1 use?
**Options Considered:**
1. Copy `yearly_intelligence_trends.json` verbatim (`441 / 126 / 762`), leaving the yearly table summing to `655,670` while the scorecard shows `655,649` (creates an internal `21`-review inconsistency).
2. Reconcile 2016 directly from `all_operators_common_duration_classified.csv` (`438` GP / `126` Robi / `744` BL = `1,308`), matching `common_duration_summary.json`, `README.md:86` (`N = 20,657` Early Era), `generate_global_visualizations.py:622`, and `generate_paper_figures.py:170` (`+45.3` BL 2016 NSS).

**Decision:** Use Option 2 (`438` GP / `126` Robi / `744` BL = `1,308` for Aug–Dec 2016; `2017–2026` unchanged; total `20,657 + 634,992 = 655,649`).
**Confidence:** High — verified directly against `all_operators_common_duration_classified.csv`, `merge_and_sync_all_datasets.py:290`, and `generate_paper_figures.py:170`.

### Decision 2: Handling `early_era`/`modern_era` vs `pre2020`/`2020_2026` & Legacy Gold-Set PNGs in `assets/images/projects/voc/`
**Question:** Should `assets/images/projects/voc/` keep or replace `pre2020`/`2020_2026` aliases and the 4 unreferenced legacy gold-set plots (`confusion_*`, `model_benchmark_f1_accuracy_bars.png`, `operator_accuracy_gold_set_bars.png`)?
**Options Considered:**
1. Sync updated plots from `temp/.../assets/plots/` using timeless `early_era`/`modern_era` filenames in `projects/voc-telecom.html`, copy the 5 new figures from `temp/.../paper/eswa_latex/figures/`, and either sync/remove stale `pre2020` aliases.
2. Keep `pre2020` filenames in `assets/images/projects/voc/` alongside `early_era` copies.

**Decision:** Switch all `projects/voc-telecom.html` `<img>` `src` attributes (`lines 344, 351, 388, 395`) to the timeless `*_early_era.png` and `*_modern_era.png` names (`README.md:88, 109`), copy all updated/new plots plus `figure0`–`figure4` into `assets/images/projects/voc/`, and remove or overwrite stale `pre2020`/`2020_2026` duplicates in `assets/images/projects/voc/` (if removed, confirm zero references remain; overwriting them if kept prevents stale bytes). Note the 4 legacy gold-set PNGs (`archive/scraped_data_2020/gold_set/archived_600_plan/plots/`) and 3 operator logos (`assets/logos/`) are currently unreferenced in HTML/JS (`Select-String` returned 0 hits).
**Confidence:** High.

### Decision 3: `Banglalink` Common NSS Display (`+53.0%` vs `+53.1%`) & Year-by-Year Prose Percentages
**Question:** `projects/voc-telecom.html` (`lines 236, 287, 910`) and `README.md:416` show `+53.1%` for Banglalink, whereas `common_duration_summary.json:38` gives `53.04` and `README.md:52` gives `+53.0%`.
**Decision:** Use `+53.0%` (or `+53.04%` in precision tables) matching `common_duration_summary.json:38` and `global_multi_year_intelligence_report.md:19`. Similarly, align 2017/2018/2019/2026 prose percentages in the yearly table to `yearly_intelligence_trends.json` / live CSV (`68.4%`, `50.4%`, `56.7%`, `50.9%`, `87.1%`).
**Confidence:** High.

---

## Findings

### Question 1: File Inventory Diff (`temp/.../assets/plots/` & `temp/.../paper/eswa_latex/figures/` vs `assets/images/projects/voc/`)

Verified via `Get-ChildItem` + `Get-FileHash -Algorithm SHA256` across all 23 existing files in `assets/images/projects/voc/`, 20 files in `temp/telecom-Voice-of-Customer_intelligence/assets/plots/`, and 5 files in `temp/telecom-Voice-of-Customer_intelligence/paper/eswa_latex/figures/`.

#### A. Plot Comparison (`temp/.../assets/plots/` vs `assets/images/projects/voc/`)

| Source File (`temp/.../assets/plots/`) | Source Size / SHA256 (12) | Existing Target (`assets/images/projects/voc/`) | Target Size / SHA256 (12) | Status & Action |
|---|---|---|---|---|
| `category_sentiment_stacked_bars.png` | `183,724` / `ACB916F2B994` | Same name | `184,305` / `E3B53E49F91B` | **Changed** — overwrite |
| `monthly_nss_trend_all_months.png` | `720,558` / `70E96A6365FF` | Same name | `722,136` / `B52506D1ED98` | **Changed** (byte-identical to `monthly_nss_trend_line.png`) |
| `monthly_nss_trend_line.png` | `720,558` / `70E96A6365FF` | Same name | `722,136` / `B52506D1ED98` | **Changed** — overwrite (used at `voc-telecom.html:372`) |
| `monthly_nss_trend_early_era.png` | `471,362` / `ACE61FC041A3` | *Not present* (replaces `pre2020`) | — | **New / Renamed** — copy (`voc-telecom.html:388`) |
| `monthly_nss_trend_pre2020.png` | `471,362` / `ACE61FC041A3` | Same name | `470,020` / `6E534FFE1F64` | **Changed alias** (identical to `early_era`) |
| `monthly_nss_trend_modern_era.png` | `665,746` / `B6E057F951A1` | *Not present* (replaces `2020_2026`) | — | **New / Renamed** — copy (`voc-telecom.html:395`) |
| `monthly_nss_trend_2020_2026.png` | `665,746` / `B6E057F951A1` | Same name | `665,746` / `B6E057F951A1` | **Unchanged** (identical to `modern_era`) |
| `multi_year_sentiment_trend_line.png` | `393,312` / `B1542ABE175A` | Same name | `392,806` / `6633D6900933` | **Changed** — overwrite (used at `voc-telecom.html:328`) |
| `monthly_sentiment_trend_line.png` | `393,312` / `B1542ABE175A` | Same name | `392,806` / `6633D6900933` | **Changed alias** (identical to `multi_year_sentiment_trend_line.png`) |
| `yearly_sentiment_trend_all_years.png` | `393,312` / `B1542ABE175A` | Same name | `392,806` / `6633D6900933` | **Changed alias** (identical to `multi_year_sentiment_trend_line.png`) |
| `yearly_sentiment_trend_early_era.png` | `222,891` / `158449EFD5AD` | *Not present* (replaces `pre2020`) | — | **New / Renamed** — copy (`voc-telecom.html:344`) |
| `yearly_sentiment_trend_pre2020.png` | `222,891` / `158449EFD5AD` | Same name | `223,698` / `EB3E29902441` | **Changed alias** (identical to `early_era`) |
| `yearly_sentiment_trend_modern_era.png` | `293,812` / `4F9750BA8231` | *Not present* (replaces `2020_2026`) | — | **New / Renamed** — copy (`voc-telecom.html:351`) |
| `yearly_sentiment_trend_2020_2026.png` | `293,812` / `4F9750BA8231` | Same name | `293,812` / `4F9750BA8231` | **Unchanged** (identical to `modern_era`) |
| `net_sentiment_score_comparison_bars.png` | `151,844` / `AA4E3BE888DF` | Same name | `150,977` / `48AF231106E1` | **Changed** — overwrite (`voc-telecom.html:280`) |
| `operator_category_complaint_distribution_bars.png` | `219,178` / `F9B4E1AF50B3` | Same name | `218,162` / `A49E4197384C` | **Changed** — overwrite (`voc-telecom.html:478`) |
| `operator_sentiment_distribution_bars.png` | `142,552` / `21DB3A286CE6` | Same name | `141,141` / `C8A799CC4B01` | **Changed** — overwrite (`voc-telecom.html:301`) |
| `nss_stability_volatility_bars.png` | `213,409` / `B8B7A918BD71` | Same name | `213,409` / `B8B7A918BD71` | **Unchanged** (`voc-telecom.html:416`) |
| `sentiment_model_benchmark_bars.png` | `233,548` / `AB816588538D` | Same name | `233,548` / `AB816588538D` | **Unchanged** (`voc-telecom.html:767`) |
| `category_model_benchmark_bars.png` | `236,683` / `C957A6F5BFCA` | Same name | `236,683` / `C957A6F5BFCA` | **Unchanged** (`voc-telecom.html:797`) |

*Note on duplicate render:* `temp/.../paper/figures/monthly_nss_trend_modern_era.png` (`520,603` bytes) is an older/different aspect render; `temp/.../assets/plots/monthly_nss_trend_modern_era.png` (`665,746` bytes) is the canonical output from `generate_global_visualizations.py:660` referenced in `README.md:109`.

#### B. New Publication Figures (`temp/.../paper/eswa_latex/figures/`)
All 5 files are **NEW** (not currently in `assets/images/projects/voc/`):
1. `figure0_system_architecture.png` (`704,731` bytes, `7738D321BFE6`) — generated by `scripts/generate_eswa_architecture_diagram.py:4-100`
2. `figure1_monthly_nss_trajectory.png` (`680,696` bytes, `A591ED26F554`) — generated by `scripts/generate_paper_figures.py:56-161`
3. `figure2_yearly_leadership_strip.png` (`194,664` bytes, `6AF54B687B21`) — generated by `scripts/generate_paper_figures.py:166-209`
4. `figure3_priority_matrix.png` (`517,546` bytes, `0D687E2648C1`) — generated by `scripts/generate_paper_figures.py:214-301`
5. `figure4_banglalink_reversal_decomposition.png` (`236,891` bytes, `5F6B227882C3`) — generated by `scripts/generate_paper_figures.py:306-349`

#### C. Existing Files in `assets/images/projects/voc/` Absent from `assets/plots/` (7 files)
- **3 Official Logos** (unchanged vs `temp/.../assets/logos/`): `gp.png` (`58,667` / `7B4E4BAC359F`), `robi.png` (`53,153` / `06BEB1A73535`), `banglalink.png` (`66,355` / `D4DB17240C31`). Currently unused in `projects/voc-telecom.html`.
- **4 Archived Legacy Gold-Set Plots** (moved in `temp/` to `archive/scraped_data_2020/gold_set/archived_600_plan/plots/`): `confusion_matrices_comparison_grid.png` (`465,742`), `confusion_matrix_hero_ensemble.png` (`178,750`), `model_benchmark_f1_accuracy_bars.png` (`327,651`), `operator_accuracy_gold_set_bars.png` (`185,213`). Unreferenced in HTML/JS (`Select-String` returned 0 hits).

---

### Question 2: Exact Metric, Date & Text Updates Required in `js/data/projects.js` and `projects/voc-telecom.html`

#### A. Canonical Common-Period Benchmark (`common_duration_summary.json:1-41` & `global_multi_year_intelligence_report.md:1-24`)
- **Common Window:** `August 1, 2016 – September 30, 2026` (`common_window_start: "2016-08-01 00:00:00"` to `"2026-09-30 23:16:00"`, **3,713 days**, **122 continuous months**: 41 early-era months `Aug 2016 – Dec 2019` [`N = 20,657`] + 81 modern-era months `Jan 2020 – Sep 2026` [`N = 634,992`]).
- **Total Common Benchmark:** `N = 655,649` (`audit_project_integrity.py:36`; Master Corpus remains `N = 661,160`, Oct 2014 – Oct 2026 per `README.md:16,36` & `global_voc_intelligence_report.json`).
- **Operator Scorecard (`common_duration_summary.json:6-40`, `global_multi_year_intelligence_report.md:17-20`, `README.md:50-54`):**
  - **Grameenphone (MyGP):** `320,140` (`48.83%` share) | Pos `77.0%` (`246,500`) | Neu `10.85%` -> `10.9%` (`34,746`) | Neg `12.15%` -> `12.1%` (`38,894`) | NSS **`+64.85%`** (`+64.9%`, Scale Leader)
  - **Robi (My Robi):** `198,378` (`30.26%` share) | Pos `77.87%` -> `77.9%` (`154,477`) | Neu `10.17%` -> `10.2%` (`20,166`) | Neg `11.96%` -> `12.0%` (`23,735`) | NSS **`+65.91%`** (`+65.9%`, NSS Leader)
  - **Banglalink (MyBL):** `137,131` (`20.92%` share) | Pos `70.38%` -> `70.4%` (`96,509`) | Neu `12.29%` -> `12.3%` (`16,851`) | Neg `17.33%` -> `17.3%` (`23,771`) | NSS **`+53.04%`** (`+53.0%`, Agile Growth)
  - **Industry Benchmark (Pooled):** `655,649` | Pos `75.9%` (`497,486`) | Neu `10.9%` (`71,763`) | Neg `13.2%` (`86,400`) | NSS **`+62.70%`** (`+62.7%`)

#### B. Exact Updates in `js/data/projects.js` (Lines `1-20`)
- `js/data/projects.js:7` (`shortSummary`): Replace `655,670` -> `655,649`.
- `js/data/projects.js:8` (`description`): Replace `655,670` -> `655,649`; `3,716-day` -> `3,713-day`. (Note: `87.4% Category Acc` remains accurate per `87.44%` in `README.md:349`; `661.2k` master corpus and `91.6%` BanglaBERT remain exact.)
- `js/data/projects.js:11` (`highlights`): Optional calibration — `Sub-ms CPU inference (87.4%)` can optionally note `1.42 ms CPU / 450 rps (87.4%)` (`manuscript.tex:37, 652`), though Phase 2 adds detailed throughput cards.
- `js/data/projects.js:14` (`tags`): Replace `"655.7k Benchmark"` -> `"655.6k Benchmark"` (matching `README.md:15` badge `655,649` / `655.6k`).

#### C. Exact Updates in `projects/voc-telecom.html`
1. **OpenGraph & Hero (`projects/voc-telecom.html:10, 112, 123, 132-133, 147, 151`):**
   - `L10`: `655,670` -> `655,649`; `3,716-day` -> `3,713-day`.
   - `L112` (Executive Narrative Story): Keep untouched per `CON-01` (`655,000+` remains accurate; `96 Words`).
   - `L123`: `3,716-Day Common Duration Window (July 28, 2016 – September 30, 2026 | N = 655,670)` -> `3,713-Day Common Duration Window (August 1, 2016 – September 30, 2026 | N = 655,649)` (`README.md:36`).
   - `L126`: Keep July 2016 example (`such as July 2016 where Grameenphone had 3 reviews and Robi had 0`) — matches `README.md:37` explaining why July 2016 is excluded under the CLT rule.
   - `L132`: `655,670 Common Benchmark` -> `655,649 Common Benchmark`.
   - `L133`: `3,716-Day Window (2016–2026)` -> `3,713-Day Window (Aug 2016–Sep 2026)` (or `3,713-Day Window (2016–2026)`).
   - `L147`: `655,670` -> `655,649`.
   - `L151`: `3,716-day window (Jul 28, 2016 – Sep 30, 2026)` -> `3,713-day window (Aug 1, 2016 – Sep 30, 2026)`.
2. **Scorecard Table (`projects/voc-telecom.html:187, 189, 210, 232, 236, 241`):**
   - `L187`: `(July 28, 2016 – September 30, 2026 | 3,716 Days)` -> `(August 1, 2016 – September 30, 2026 | 3,713 Days)`.
   - `L189`: `N = 655,670 Reviews` -> `N = 655,649 Reviews`.
   - `L210`: GP `320,143` -> `320,140`.
   - `L232`: Banglalink `137,149` -> `137,131`.
   - `L236`: Banglalink `+53.1%` -> `+53.0%` (`common_duration_summary.json:38` `53.04`, `README.md:52` `+53.0%`).
   - `L241`: Pooled `655,670` -> `655,649`.
3. **Visual Suite Headers, Image Sources & Captions (`projects/voc-telecom.html:264-508`):**
   - `L264`: `655,670 Reviews across 3,716 Shared Days` -> `655,649 Reviews across 3,713 Shared Days`.
   - `L287` (Fig 1.1 caption): `3,716-day common window` -> `3,713-day common window`; `+53.1% NSS` -> `+53.0% NSS`.
   - `L321` (Plot 3 subtitle): `3,716 Shared Days (Jul 28, 2016 – Sep 30, 2026)` -> `3,713 Shared Days (Aug 1, 2016 – Sep 30, 2026)`.
   - `L342` (Early Era Yearly label): `N = 20,678` -> `N = 20,657` (`README.md:86`, CSV).
   - `L344`: `yearly_sentiment_trend_pre2020.png` -> `yearly_sentiment_trend_early_era.png` (`README.md:88`).
   - `L351`: `yearly_sentiment_trend_2020_2026.png` -> `yearly_sentiment_trend_modern_era.png` (`README.md:88`).
   - `L358, L363, L373` (Plot 4 Monthly NSS): `123 Months · Jul 2016 – Sep 2026` -> `122 Months · Aug 2016 – Sep 2026` (`README.md:97`).
   - `L386` (Early Era Monthly label): `42 Months · Jul 2016 – Dec 2019` -> `41 Months · Aug 2016 – Dec 2019` (`README.md:107`, `generate_global_visualizations.py:622`).
   - `L388`: `monthly_nss_trend_pre2020.png` -> `monthly_nss_trend_early_era.png` (`README.md:109`).
   - `L395`: `monthly_nss_trend_2020_2026.png` -> `monthly_nss_trend_modern_era.png` (`README.md:109`).
   - `L485` (Fig 1.6 caption): Current figures (`7.25%`, `2.72%`, `2.99%`, `1.03%`) match live CSV (`all_operators_common_duration_classified.csv`) after rounding to 2 decimals.
   - `L506` (Fig 1.7 caption): Note `>90% negative across all three operators` slightly overstates Robi Billing (`89.77%`, vs GP `92.89%`, BL `91.87%` in `README.md:311`); update to `~90–93%` (`>89.7%`), and `~88%` for App Login (`87.1%–89.3%` in `README.md:312` & `generate_paper_figures.py:223,229`).
4. **Yearly Trajectory Table (`projects/voc-telecom.html:521-614`):**
   - `L521`: `3,716-day window (N = 655,670)` -> `3,713-day window (N = 655,649)`.
   - `L538`: `2016 (Jul–Dec)` -> `2016 (Aug–Dec)`.
   - `L539`: GP `441` -> `438` (NSS `+2.5%` unchanged; verified via CSV).
   - `L541`: Banglalink `+46.3% (762)` -> `+45.3% (744)` (verified via CSV and `generate_paper_figures.py:170`).
   - `L542`: `63.8% positive feedback` -> `63.2% positive feedback` (`470 / 744 = 63.17%`).
   - `L549`: Robi 2017 `67.8% negative` -> `68.4% negative` (`yearly_intelligence_trends.json:57`, `global_multi_year_intelligence_report.md:36`, CSV).
   - `L556`: GP 2018 `47.9%` -> `50.4%`, Robi 2018 `53.6%` -> `56.7%` (`yearly_intelligence_trends.json:83,95`, `global_multi_year_intelligence_report.md:38-39`, CSV).
   - `L563`: Robi 2019 `51.5%` -> `50.9%` (`yearly_intelligence_trends.json:132`, `global_multi_year_intelligence_report.md:42`, CSV).
   - `L570`: Robi 2020 `76.5%` (`yearly_intelligence_trends.json:170` `76.55%`, `global_multi_year_intelligence_report.md:45` `76.5%`, CSV `76.6%` 1-dec).
   - `L612`: Banglalink 2026 `86.8% positive` -> `87.1% positive` (`yearly_intelligence_trends.json:410`, `global_multi_year_intelligence_report.md:64`, CSV `87.14%`).
   - *All 2017–2026 annual review volumes and NSS figures in lines `545–611` already match `yearly_intelligence_trends.json`, `global_multi_year_intelligence_report.md`, and live CSV.*
5. **Complaint & Operational Category Tables (Currently Missing from `projects/voc-telecom.html` Section 2):**
   - `projects/voc-telecom.html:465-511` currently only displays Plot 6 & Plot 7 captions without HTML tables. If adding/populating the 3 operational category tables from `README.md:246-262, 309-314` and `global_multi_year_intelligence_report.md:72-80`, use the **CSV-verified** common-period counts (`N = 655,649`):
     - **Overall Share (`global_multi_year_intelligence_report.md:72-80` & CSV):** General Appreciation `86.55%` (`567,468`), Offers & Data Packs `5.04%` (`33,077`), App Login & Technical Bugs `4.99%` (`32,701`), Network Speed & 4G Latency `2.46%` (`16,108`), Billing & Airtime Deductions `0.96%` (`6,295`).
     - **Per-Operator Category Share (All Sentiments — CSV & `README.md:246-252` reconciled for 21 Jul 2016 rows):**
       - General Appreciation: GP `87.85%` (`281,253`), Robi `86.86%` (`172,312`), BL `83.06%` (`113,903`)
       - Offers & Data Packs: GP `5.27%` (`16,878`), Robi `5.18%` (`10,283`), BL `4.31%` (`5,916`)
       - App Login & Bugs: GP `3.88%` (`12,432`), Robi `4.60%` (`9,129`), BL `8.12%` (`11,140`)
       - Network Speed & 4G: GP `1.88%` (`6,017`), Robi `2.57%` (`5,100`), BL `3.64%` (`4,991`)
       - Billing & Deductions: GP `1.11%` (`3,560`), Robi `0.78%` (`1,554`), BL `0.86%` (`1,181`)
     - **True Complaint Rates (Negative Only / Operator Total — CSV & `generate_paper_figures.py:217-232`):**
       - App Login & Bugs: GP `3.45%` (`11,058`), Robi `4.01%` (`7,951`), BL `7.25%` (`9,946`)
       - Offers & Data Packs: GP `2.99%` (`9,557`), Robi `2.61%` (`5,168`), BL `2.42%` (`3,321`)
       - Network Speed & 4G: GP `1.39%` (`4,453`), Robi `1.96%` (`3,895`), BL `2.72%` (`3,735`)
       - Billing & Deductions: GP `1.03%` (`3,307`), Robi `0.70%` (`1,395`), BL `0.79%` (`1,085`)
     - **Within-Category Dissatisfaction % (`Neg / Total_Cat` — `README.md:309-314` & `generate_paper_figures.py:217-232`):**
       - Billing: GP `92.89%`, Robi `89.77%`, BL `91.87%`
       - App Login: GP `88.95%`, Robi `87.10%`, BL `89.28%`
       - Network Speed: GP `74.01%`, Robi `76.37%`, BL `74.83%`
       - Offers & Packs: GP `56.62%`, Robi `50.26%`, BL `56.13%`
6. **Section 4 Shock Table (`projects/voc-telecom.html:666-737`):**
   - Current 9 rows match `nss_significant_shocks.csv` lines `464–547, 825–855, 888–899`. Optional Phase 1/2 sync: add the 10th shock row from `README.md:195` (`Robi | 2023-11 -> 2023-12 | +10.0 pts | Offers & Data Packs | +2.67 pts`) and update Banglalink `2024-03 -> 2024-04` / `2024-04 -> 2024-05` descriptions (`L728, L736`) to cite build `v11.8.0` crash and `v11.9.1/v11.10.x` hotfix (`README.md:197-198`).
7. **Section 6 Strategic Roadmaps (`projects/voc-telecom.html:878, 894, 910`):**
   - `L878`: GP `(320,143 reviews)` -> `(320,140 reviews)`.
   - `L894`: Robi `(198,378 reviews)` -> already exact.
   - `L910`: Banglalink `+53.1% (137,149 reviews)` -> `+53.0% (137,131 reviews)`.

---

### Question 3: Exact Inventory of Stale References in `projects/voc-telecom.html`

| Stale Token / Pattern | Exact Line Numbers in `projects/voc-telecom.html` | Replacement / Fix |
|---|---|---|
| `655,670` | `L10`, `L123`, `L132`, `L147`, `L189`, `L241`, `L264`, `L521` (8 occurrences) | `655,649` (and `L14` `"655.7k Benchmark"` in `js/data/projects.js:14` -> `"655.6k Benchmark"`) |
| `3,716` | `L10`, `L123`, `L133`, `L151`, `L187`, `L264`, `L287`, `L321`, `L521` (9 occurrences) | `3,713` (also `js/data/projects.js:8`) |
| `July 28, 2016` / `Jul 28, 2016` | `L123`, `L151`, `L187`, `L321` (4 occurrences) | `August 1, 2016` / `Aug 1, 2016` |
| `123` (`123 Months` / `123-month`) | `L358`, `L363`, `L373` (3 occurrences) | `122 Months` |
| `Jul 2016` (in window headings) | `L363`, `L386`, `L538` (3 occurrences; keep `L126` CLT exclusion example) | `Aug 2016` (`L363, L386`) and `(Aug–Dec)` (`L538`) |
| `42 Months` (Early Era monthly) | `L386` (1 occurrence) | `41 Months` |
| `20,678` (Early Era N) | `L342` (1 occurrence) | `20,657` |
| `320,143` (GP total) | `L210`, `L878` (2 occurrences) | `320,140` |
| `137,149` (BL total) | `L232`, `L910` (2 occurrences) | `137,131` |
| `+53.1%` (BL common NSS) | `L236`, `L287`, `L910` (3 occurrences) | `+53.0%` |
| `441` / `762` / `+46.3%` / `63.8%` (2016 row) | `L539`, `L541`, `L542` (3 lines) | `438` (GP), `+45.3% (744)` (BL), `63.2%` |
| Old `pre2020` / `2020_2026` plot filenames | `L344` (`yearly_sentiment_trend_pre2020.png`), `L351` (`yearly_sentiment_trend_2020_2026.png`), `L388` (`monthly_nss_trend_pre2020.png`), `L395` (`monthly_nss_trend_2020_2026.png`) | Switch to `*_early_era.png` and `*_modern_era.png` |
| Other stale plot binaries (same filename, old hash) | `L280`, `L301`, `L328`, `L372`, `L478`, `L499` | Overwrite PNGs from `temp/.../assets/plots/` |

---

## Patterns to Follow
- **Single source of truth for common-window counts:** Validate every table cell against `all_operators_common_duration_classified.csv` and `common_duration_summary.json` rather than copying markdown summaries blindly.
- **Explicit git staging (`DECISION-002`):** Stage only modified portfolio PNGs, `js/data/projects.js`, `projects/voc-telecom.html`, and `.gsd/` artifacts — never `git add -A`.
- **Preserve Executive Story & Design System (`CON-01`):** Keep `projects/voc-telecom.html:102-114` intact (`96 Words`) and retain Tailwind Play CDN + `css/styles.css?v=3.0` glassmorphic cards and dark/light theme parity.

## Anti-Patterns to Avoid
- Do **not** copy `2016` rows from `yearly_intelligence_trends.json:2-39` (`441` / `762` / `+46.3%`) verbatim — that file wasn't regenerated after `start_common` moved from `Jul 28` to `Aug 1` (`438` / `744` / `+45.3%`).
- Do **not** blindly copy `README.md:416` (`+53.1%`) or `README.md:432-433` (`123 Months` / `42 Months`) or `README.md:250,259` (`12,434` / `11,059`) — those lines in `README.md` are unpatched leftovers compared to `common_duration_summary.json` and the live CSV.
- Do **not** source `monthly_nss_trend_modern_era.png` from `temp/.../paper/figures/` (`520,603` bytes); use `temp/.../assets/plots/` (`665,746` bytes).

## Dependencies Identified
| Package / Tool | Version / Path | Purpose |
|---|---|---|
| Local PNG assets | `temp/.../assets/plots/*.png`, `temp/.../paper/eswa_latex/figures/figure*.png` | Source binaries for `assets/images/projects/voc/` |
| PowerShell `Get-FileHash` / `Select-String` | OS built-in | Deterministic binary SHA256 and stale-string verification |
| Python / `http.server` | `python 3.10+` | Local static serving & verification during Phase 1/3 |

## Risks
- **Embedded chart title quirk in `yearly_sentiment_trend_early_era.png`:** `generate_global_visualizations.py:366` hardcodes `(N = 20,678)` in the plot title string even though the script loads the `N = 655,649` CSV (`monthly_nss_trend_early_era.png` at `L622` correctly prints `20,657 Reviews`). *Mitigation:* Keep HTML caption at `N = 20,657` matching `README.md:86` and note the upstream plot-title quirk if inspected visually (or note as out-of-scope upstream `temp/` issue since `temp/` is read-only reference).
- **Cache-busting query strings / browser cache:** Updating image binaries under the same filenames (`net_sentiment_score_comparison_bars.png`, etc.) requires hard-refresh verification in Phase 1/3.

## Recommendations for Planning
1. **Plan 1.1 (Asset Sync):** Copy all updated plots (including `*_early_era.png` and `*_modern_era.png`) from `temp/.../assets/plots/` and all 5 ESWA figures (`figure0`–`figure4`) from `temp/.../paper/eswa_latex/figures/` into `assets/images/projects/voc/`. Decide whether to overwrite `pre2020`/`2020_2026` copies or delete them after updating `projects/voc-telecom.html` references (and verify zero dangling `<img>` paths).
2. **Plan 1.2 (Metric & Text Calibration):** Update `js/data/projects.js:7-14` and all stale tokens in `projects/voc-telecom.html` (`655,670` -> `655,649`, `3,716` -> `3,713`, `Jul 28, 2016` -> `Aug 1, 2016`, `123` -> `122 Months`, `42` -> `41 Months`, `20,678` -> `20,657`, `320,143` -> `320,140`, `137,149` -> `137,131`, `+53.1%` -> `+53.0%`, 2016 row `438` / `744` / `+45.3%` / `63.2%`, yearly prose `%`, and `pre2020`/`2020_2026` srcs -> `early_era`/`modern_era`). Add/update the operational category share & complaint tables (`N = 655,649`) if included in Phase 1 or coordinate cleanly with Phase 2 `figure3_priority_matrix.png`.
3. **Verification Gate:** Run `Select-String` confirming zero occurrences of `655,670`, `3,716`, `123 Months`, `Jul 28`, `pre2020`, `2020_2026`, `320,143`, `137,149`, or `+53.1%` in `js/data/projects.js` and `projects/voc-telecom.html`, plus SHA256 checks on all synced PNGs.

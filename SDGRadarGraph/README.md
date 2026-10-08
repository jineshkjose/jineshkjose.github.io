# SDG Radar Chart Builder

A single-file web tool for plotting UN Sustainable Development Goal coverage as a radar chart. Score each of the 17 goals from 0 to 5, compare several subjects or courses side by side, and export the result as a PNG.

Built for the Department of Mechatronics Engineering, Jyothi Engineering College (Autonomous), to produce the SDG coverage charts required in course files and accreditation records.

---

## Quick start

No installation, no build step, no dependencies to fetch.

1. Download or clone this repository.
2. Open `index.html` in any modern browser.

That is the whole setup. The page is self-contained apart from Chart.js, which loads from a CDN, so an internet connection is needed the first time it opens.

To publish it instead, enable **GitHub Pages** on the repository (Settings → Pages → deploy from branch) and the tool becomes available at your Pages URL.

---

## Using the tool

### 1. Choose how many subjects to compare

Set **Number of subjects** to anything from 1 to 6. The scores table grows a column for each, and every subject is drawn on the radar in its own colour and dash pattern.

### 2. Name each subject

Type over `Subject 1`, `Subject 2` and so on in the column headers. The name becomes the legend label and appears in the tooltip.

### 3. Enter scores

Score each of the 17 goals from 0 to 5 in each column. The chart redraws as you type. A **goals mapped** count at the foot of each column shows how many goals scored above zero.

### 4. Or paste a whole column at once

Choose the target column under **Paste into**, paste your values, then press **Read values**. Two formats are accepted.

One goal per line, where the leading number identifies the goal and the last number on the line is the score:

```
1: No Poverty	0
2: Zero Hunger	1
3: Good Health and Well-being	4
```

Or 17 plain numbers separated by commas, spaces or newlines:

```
0, 1, 4, 4, 0, 1, 0, 2, 5, 3, 5, 1, 2, 0, 0, 0, 0
```

Any goal you leave out is set to 0.

### 5. Export

**Download PNG** saves the chart at full resolution for dropping into a report, course file or presentation.

---

## What the 0–5 score means

The scale is **relative, not absolute**. It describes the shape of a department's or course's SDG emphasis, not the magnitude of its impact.

If you are deriving scores from a project-by-project SDG matrix, the standard method is:

| Step | Calculation |
|---|---|
| 1. Mark each project | `P` for a primary (direct) contribution, `S` for a secondary (indirect) one |
| 2. Count per goal | `P count = COUNTIF(range,"P")`, `S count = COUNTIF(range,"S")` |
| 3. Weight | `weighted = P + 0.5 × S` |
| 4. Normalise | `score = ROUND(5 × weighted ÷ MAX(all 17 weighted), 0)` |

Because of step 4, whichever goal has the highest weighted count is always forced to 5. Two charts can therefore be compared for **shape** but not for size — a 5 on one chart does not represent the same absolute activity as a 5 on another.

---

## Design notes

- **Fixed 0–5 axis.** The radial axis does not auto-scale, so charts produced at different times remain directly comparable.
- **Colour plus pattern.** Each series carries both a distinct colour and a distinct dash pattern, so the chart stays readable in greyscale print and for colour-blind readers.
- **Input validation.** Values outside 0–5 are clamped, decimals are rounded, and blank cells count as 0 with an inline warning.
- **No persistence.** Values live in the page only; nothing is stored or transmitted. Keep the source numbers in your spreadsheet and use the PNG export for the record.

---

## The 17 goals

| # | Goal | # | Goal |
|---|---|---|---|
| 1 | No poverty | 10 | Reduced inequality |
| 2 | Zero hunger | 11 | Sustainable cities and communities |
| 3 | Good health and well-being | 12 | Responsible consumption and production |
| 4 | Quality education | 13 | Climate action |
| 5 | Gender equality | 14 | Life below water |
| 6 | Clean water and sanitation | 15 | Life on land |
| 7 | Affordable and clean energy | 16 | Peace, justice and strong institutions |
| 8 | Decent work and economic growth | 17 | Partnerships for the goals |
| 9 | Industry, innovation and infrastructure | | |

Each goal has numbered **targets** beneath it — `9.1`, `11.2` and so on. A number is an outcome target; a letter such as `9.c` or `3.d` is a means-of-implementation target. Naming the specific target rather than the whole goal makes a mapping far easier to defend.

---

## Repository contents

```
index.html    the tool, self-contained
README.md     this file
```

---

## Browser support

Any current version of Chrome, Edge, Firefox or Safari. The tool uses Chart.js v4 loaded from jsDelivr with subresource integrity.

---

## Contributing

Issues and pull requests are welcome. Useful directions:

- CSV or XLSX import so a matrix sheet can be loaded directly
- Saving and reloading named profiles in browser storage
- SVG export alongside PNG
- A bar-chart view, which reads better than a radar when only one subject is plotted

---

## Credits

**Jinesh K J**
Department of Mechatronics Engineering, Jyothi Engineering College (Autonomous)
Email: jineshkjose@gmail.com
Phone: 9400086378

---

## Licence

Add a licence before publishing — [MIT](https://choosealicense.com/licenses/mit/) is a reasonable default for a tool like this. Create a `LICENSE` file in the repository root.

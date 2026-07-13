# Evidence — PM Job Dashboard Design Audit

## Structural (from structural subagent)

- **42 interactive elements** at initial render (23 buttons, 19 links, 0 inputs)
- **Max JSX depth:** 7 — `components/job-radar/RadarCard.tsx:29`
- **10 repeated section-eyebrow patterns** — `text-[10px] font-semibold tracking-widest uppercase` inlined across HomeBase.tsx, JobTracker.tsx, JobRadar.tsx, PMTraining.tsx, Contacts.tsx, NextSteps.tsx — not extracted to a shared component
- **4 repeated list-container patterns** — `divide-y divide-[#ececf1] rounded-xl border border-[#e6e6ec] bg-[#ffffff] overflow-hidden` duplicated across JobTracker.tsx:75, JobRadar.tsx:35, Contacts.tsx:43, NextSteps.tsx:24 — duplicates Card styling rather than reusing `<Card>`
- **2 repeated link-out card patterns** — HomeBase.tsx:19–36, Contacts.tsx:19–39
- **Empty states:** present in JobTracker (JobTracker.tsx:76), JobRadar (JobRadar.tsx:36), NextSteps (NextSteps.tsx:25)
- **Column grid:** `grid-cols-1 md:grid-cols-2 xl:grid-cols-4` — `app/page.tsx:31`
- **No unused imports or dead props** found

## Visual (from visual subagent)

- **Spacing:** 28 distinct values from 2px to 32px — not a tight scale; no 8px base system
- **Type scale:** 5 sizes — 10px, 11px, 12px, 14px, 20px (`text-xl` for stats only)
- **Color count:** 21 unique hex colors + 11 distinct rgba() values + 4 `${accentColor}18` alpha-suffix variants = **36+ distinct color references** across components
- **CSS custom properties defined in `app/globals.css:3–19` but NONE referenced in any component** — all components hardcode hex values directly; token system exists but is inert
- **Theme consistency:** No dark-theme remnants after Claude Code switch; all bg references are `#ffffff` / light grays
- **Contrast failures (INFERRED):**
  - `#7a7a90` on `#ffffff` — ~4.2:1 — likely FAIL normal text — `HomeBase.tsx:14`
  - `#7a7a90` on `#f4f4f7` — ~3.9:1 — likely FAIL — `JobCard.tsx:60`
  - `#22c55e` on `#ffffff` — ~3.4:1 — FAIL normal text, PASS large — `PipelineStats.tsx:48`
  - `#6b7280` on rgba(107,114,128,0.15) badge — ~3.8:1 — FAIL at 11px — `JobCard.tsx:77`
- **States present:** empty ✓, hover ✓ — loading ✗, error ✗, success ✗, focus ring ✗, disabled ✗
- **Visual inconsistencies:**
  - 4 border-radius tiers: `rounded` (badge), `rounded-md` (buttons), `rounded-lg` (row hovers), `rounded-xl` (cards)
  - Icon sizes: 12px, 13px, 14px, 18px — no single icon scale
  - Opacity notation: Tailwind `/15`/`/20`/`/25`/`/30` mixed with `rgba(...)` style props and 8-digit hex `18` suffix
  - Padding: `p-4` on Card, `px-3 py-3` on ResourceCard, `px-3 py-2.5` on rows
  - Primary text: `#16161f` vs `text-black` on hover — `HomeBase.tsx:30`, `ResourceCard.tsx:20`

## Copy & Honesty (from copy subagent)

- **No marketing inflations found**
- **Label → behavior mismatches (5):**
  1. "Add job" button → no `onClick` — `JobTracker.tsx:37–40`
  2. "Add link" button → no `onClick` — `PMTraining.tsx:16–19`
  3. "Save" in Job Radar → removes from radar only, does not add to Job Tracker — `JobRadar.tsx:15–17` vs `RadarCard.tsx:41–44`
  4. "PM network sheet" → `href="#"` — `Contacts.tsx:20–21`
  5. "open PM Training" in Next Steps → static text, no navigation — `NextStepItem.tsx:26`
- **Jargon flagged:**
  - "Pipeline" — `HomeBase.tsx:42` (recruiting metaphor, unexplained)
  - "Job Radar" — `JobRadar.tsx:29` (metaphor with no in-UI definition)
  - Depth labels (Transactional / Cordial / Warm professional / Advisory / Mentor/Sponsor) — `ContactRow.tsx:8–12`
  - "depth-{n} contact" exposed in generated nudge text — `computeNextSteps.ts:61`
  - "Warm up {name}" — networking jargon — `computeNextSteps.ts:60`
  - "nudges" — `NextSteps.tsx:27`
- **Casing violations:** Section eyebrows written in Title Case in source strings (rendered uppercase via CSS `uppercase` class) — spec calls for uppercase; the CSS does it correctly but strings are inconsistent. "Dashboard" pill uses `uppercase` class on non-eyebrow label — `app/page.tsx:17–18`

## Weight & Friction (from weight subagent)

- **Initial JS:** ~115–155 KB gzipped (ESTIMATED) — under 500 KB threshold
- **API requests:** 0 — all data is in-memory static modules confirmed (`data/*.ts`)
- **TTI:** ~1.5–3.5 s fast broadband (ESTIMATED) — `new Date()` in server component at `app/page.tsx:22–26` forces **dynamic SSR** instead of static; no lazy loading (`dynamic()`, `Suspense`) anywhere
- **Idle animations:** 0 — all transitions are hover-triggered only; 0 `animate-*`, `@keyframes`, or autoplay
- **Attention grabbers on load:** 0 modals, 0 autoplay; 6 numeric badges (depth), colored stat numbers, tab count pills, "Add job"/"Add link" indigo buttons
- **Unused installed packages:** `@radix-ui/react-checkbox`, `@radix-ui/react-progress`, `@radix-ui/react-slot`, `@radix-ui/react-tabs`, `class-variance-authority` — installed in `package.json`, zero imports in source
- **Icon-only interactive elements without text labels:** `X` dismiss button in RadarCard — `RadarCard.tsx:49` (has `title` attr but no visible text)

# Verdict — PM Job Dashboard Design Audit

## REDESIGN — 13/30

The dashboard has the right information architecture and a functional layout, but the implementation is so inconsistent at the detail level — 36+ hardcoded color references bypassing an inert token system, five dead interactive affordances, five missing states including focus rings entirely absent, and 10 repeated structural fragments not extracted to components — that iterating on top of this surface would be patching symptoms rather than fixing the underlying lack of a design system.

## Why redesign and not refine

Total score 13/30 is below the 20-point REFINE threshold. Additionally, principle #8 (thorough) scored 0 — focus rings are completely absent on a dashboard with 42 interactive elements, which is an accessibility failure that is load-bearing for any user relying on keyboard navigation.

## Preserve from current design

- **4-column grid layout** (`app/page.tsx:31`) — information architecture is correct for simultaneous visibility
- **Indigo accent `#6366f1`** — color choice is good, used consistently as the single accent
- **Status color palette** (red/yellow/blue/green/gray) — semantically clear and correct
- **Computed Next Steps logic** (`components/next-steps/computeNextSteps.ts`) — the cross-panel nudge engine is the most innovative piece; keep the logic, improve the rendering
- **Data layer isolation pattern** (`/data/*.ts` with `get*()` functions) — the Google Sheets swap path is well-structured
- **Section hierarchy** — four columns with sub-sections within each column is the right mental model

## Discard from current design

- **All hardcoded hex in component className/style** (36+ references) — caused failure on #3 aesthetic and #10 as little design as possible. Replace with CSS custom properties from globals.css.
- **Dead button handlers** — "Add job" (JobTracker.tsx:37), "Add link" (PMTraining.tsx:16) — caused failure on #6 honest. Wire them or visually disable them.
- **"Save" affordance that doesn't save** (JobRadar.tsx:15–17) — caused failure on #6 honest. Fix the behavior or change the label to "Remove".
- **Inlined repeated structural patterns** — 10 eyebrow instances, 4 list-container instances — caused failure on #10. Extract to `<SectionEyebrow>` and `<ListContainer>`.
- **5 unused packages** (`@radix-ui/react-*` ×4, `class-variance-authority`) — dead weight.

## Top 5 highest-leverage moves

1. **#8 Thorough → Add focus states to every interactive element.** 42 interactive elements with zero focus-visible styles is an accessibility blocker. Every `<button>` and `<a>` needs `focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none`. Evidence: no `focus:` classes anywhere in codebase.

2. **#3 Aesthetic + #10 As little as possible → Wire all components to the CSS token system.** globals.css already defines `--color-bg-card`, `--color-border`, `--color-accent`, `--color-text-secondary`, etc. Replace all 36+ hardcoded hex values in components with these vars. Enforce one spacing scale (multiples of 4px), one border-radius (`rounded-xl` on cards, `rounded-md` on controls), icon sizes at 12px and 16px only. Evidence: globals.css:3–19 fully defined but unused; components/ui/card.tsx:12 ignores `var(--color-bg-card)`.

3. **#6 Honest → Resolve all five label-behavior mismatches.** Dead buttons must either have handlers or be rendered as disabled with `opacity-50 cursor-not-allowed`. "Save" in Job Radar must be relabeled "Dismiss" (since it only removes, not saves) or actually move the job to tracker state. "PM network sheet" href="#" must be replaced with a real URL or a "Connect Google Sheets" placeholder flow. Evidence: JobTracker.tsx:37, PMTraining.tsx:16, JobRadar.tsx:15–17, Contacts.tsx:20, NextStepItem.tsx:26.

4. **#4 Understandable → Replace jargon labels with plain English.** "Pipeline" → "Summary", "Job Radar" → "New postings", depth labels → plain descriptions ("Acquaintance", "Friendly contact", "Strong relationship", "Advisor", "Mentor or advocate"), "depth-{n} contact" in nudges → use the plain label. Evidence: HomeBase.tsx:42, JobRadar.tsx:29, ContactRow.tsx:8–12, computeNextSteps.ts:61.

5. **#10 As little as possible → Extract repeated structural fragments.** Create `<SectionEyebrow label="..." />` (10 call sites), `<ListContainer>` (4 call sites), `<LinkCard>` (2 call sites). Remove the 5 unused packages from package.json. Delete the inert CSS custom property layer or actually use it (these goals coincide with move #2). Evidence: HomeBase.tsx:14, JobTracker.tsx:34, JobRadar.tsx:28, PMTraining.tsx:13, Contacts.tsx:14, NextSteps.tsx:18.

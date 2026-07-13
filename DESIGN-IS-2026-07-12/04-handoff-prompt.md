# Handoff Prompt

Copy and paste the block below to start the implementation plan.

---

````
/make-plan Redesign the PM job search dashboard. Current design failed audit at 13/30 with critical gaps in principles #3 aesthetic, #6 honest, #8 thorough, and #10 as little design as possible.

Verdict paragraph (from audit):
> The dashboard has the right information architecture and a functional layout, but the implementation is so inconsistent at the detail level — 36+ hardcoded color references bypassing an inert token system, five dead interactive affordances, five missing states including focus rings entirely absent, and 10 repeated structural fragments not extracted to components — that iterating on top of this surface would be patching symptoms rather than fixing the underlying lack of a design system.

Why redesign and not refine: Total score 13/30 is below the 20-point REFINE threshold; additionally, #8 thorough scored 0 because focus rings are completely absent across all 42 interactive elements.

Preserve from current design (MUST NOT be discarded):
- 4-column grid: `app/page.tsx:31` — `grid-cols-1 md:grid-cols-2 xl:grid-cols-4` — information architecture is correct
- Indigo accent #6366f1 — single accent used consistently
- Status color palette (red #ef4444 / yellow #eab308 / blue #3b82f6 / green #22c55e / gray #6b7280)
- Computed Next Steps logic: `components/next-steps/computeNextSteps.ts` — cross-panel nudge engine
- Data layer isolation: `/data/*.ts` with `get*()` functions — Google Sheets swap path
- Section hierarchy: 4 columns × sub-sections within each column

Discard (structural patterns causing the failures):
- All 36+ hardcoded hex values in component className/style — replace with CSS custom properties. Evidence: `components/ui/card.tsx:12` ignores `var(--color-bg-card)`. Caused failure on #3 and #10.
- Dead button handlers: "Add job" (`JobTracker.tsx:37`), "Add link" (`PMTraining.tsx:16`) — caused failure on #6.
- "Save" affordance that removes from radar but doesn't add to tracker (`JobRadar.tsx:15–17`) — caused failure on #6.
- 10 inlined eyebrow patterns + 4 inlined list-container patterns — caused failure on #10.
- 5 unused packages: @radix-ui/react-checkbox, @radix-ui/react-progress, @radix-ui/react-slot, @radix-ui/react-tabs, class-variance-authority — dead weight.

Top 5 moves from the audit (implement in this order):

1. Principle #8 — Thorough: Add `focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none` to every <button> and <a> across all 42 interactive elements. Evidence: no `focus:` or `focus-visible:` classes anywhere in the codebase. Also add: loading skeleton for future async states (design the component even if not triggered yet), and a `disabled` visual style (`opacity-50 cursor-not-allowed`) for buttons without handlers.

2. Principle #3 Aesthetic + #10 As little design as possible — Token system: Wire every component to the CSS custom properties already defined in `app/globals.css:3–19` (`--color-bg-card`, `--color-border`, `--color-accent`, `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`, etc.). Eliminate all 36+ hardcoded hex literals in components. Enforce: spacing on multiples of 4px, border-radius `rounded-xl` on cards and `rounded-md` on controls, icon sizes 12px and 16px only, single opacity notation (Tailwind `/N` only — no rgba() inline, no 8-digit hex).

3. Principle #6 — Honest: Resolve all five label-behavior mismatches:
   - "Add job" (`JobTracker.tsx:37`) — add `onClick` that opens an add-job form, or render as `disabled` with tooltip "Coming soon"
   - "Add link" (`PMTraining.tsx:16`) — same pattern
   - "Save" in Job Radar (`JobRadar.tsx:15–17`) — relabel to "Dismiss" (since it only removes), OR implement actual state transfer to Job Tracker's saved list
   - "PM network sheet" (`Contacts.tsx:20`) — replace `href="#"` with a "Connect" placeholder that shows a modal explaining Google Sheets integration is coming
   - "open PM Training" nudge (`NextStepItem.tsx:26`) — make Next Step items with `type === 'daily_prep'` or `type === 'interview_prep'` render as anchor links that scroll to the relevant column

4. Principle #4 — Understandable: Replace all jargon labels with plain English:
   - "Pipeline" → "Summary" (`HomeBase.tsx:42`)
   - "Job Radar" → "New postings" + keep the subtitle "— haven't applied yet" (`JobRadar.tsx:29`)
   - Depth labels: 1→"Acquaintance", 2→"Friendly contact", 3→"Strong relationship", 4→"Advisor", 5→"Mentor or advocate" (`ContactRow.tsx:8–12`)
   - "depth-{n} contact" in nudges → use the plain label (`computeNextSteps.ts:61`)
   - "Warm up {name}" → "Reach out to {name}" (`computeNextSteps.ts:60`)
   - "nudges" in empty state → "suggested actions" (`NextSteps.tsx:27`)

5. Principle #10 — As little design as possible: Extract shared components:
   - `<SectionEyebrow label="..." />` — 10 call sites
   - `<ListContainer>` — 4 call sites (replaces inlined divide-y + border + bg pattern)
   - `<LinkCard icon={} title="" subtitle="" href="" />` — 2 call sites (HomeBase Claude card + Contacts network sheet card)
   - Remove 5 unused packages from `package.json`
   - Either delete inert CSS custom property layer OR use it (move #2 resolves this)

Redesign principles in priority order:
1. Principle #8 (thorough) — every interactive element has focus, hover, and disabled states before shipping anything else
2. Principle #6 (honest) — every label maps 1:1 to its behavior; no dead affordances
3. Principle #3 (aesthetic) — one token system, one spacing scale, one radius tier

Out of scope for this redesign pass:
- Google Sheets or Gmail integration (no backend yet)
- Mobile responsive layout beyond the existing column-stack
- New features not already in the current build
- Dark mode (can come after token system is wired)

Deliverables for the plan:
- New `components/ui/SectionEyebrow.tsx`, `ListContainer.tsx`, `LinkCard.tsx`
- Updated `app/globals.css` with token values used by all components (verify every `var(--color-*)` resolves)
- Per-component: exact className diff replacing hardcoded hex with CSS vars
- Focus state added to every `<button>` and `<a>` — grep verification: `rg "focus-visible" components/` must return ≥ 42 hits after
- Label-behavior mismatch resolution for all 5 flagged items with verification step per item
- Jargon replacement across all 4 flagged label groups
- `npm uninstall` of 5 unused packages with `npm ls` confirmation
- States checklist after redesign: empty ✓, hover ✓, disabled ✓, focus ✓, loading skeleton ✓ (error and success remain future work — explicitly out of scope for this pass)
````

# Scorecard — PM Job Dashboard Design Audit

Scoring anchors applied verbatim. Tie-breaker: lower score. Score worst instance, not mean.

---

## 1. Good design is innovative — Score: 1/3
Evidence: 4-column dashboard with status dots, filter tabs, and a progress-bar training section follows patterns established by Notion, Linear, and every productivity dashboard built since 2019. The computed Next Steps nudge feed is a genuinely useful cross-reference that few dashboard tools implement; it earns the 1 over 0.  
Justification: Refreshes a known pattern with one concrete improvement (cross-panel nudges) but does not introduce a structural innovation not seen in 5+ peer products.

---

## 2. Good design makes a product useful — Score: 2/3
Evidence: Primary task (see what needs attention) is directly served by the Next Steps feed. All four job-hunt dimensions are visible simultaneously. However, "Add job" (JobTracker.tsx:37) and "Add link" (PMTraining.tsx:16) have no onClick — the two most obvious CRUD actions are dead ends. "Save" in Job Radar removes the card from radar but does not add it to Job Tracker (JobRadar.tsx:15–17).  
Justification: Primary task surfaces without detours but the three dead interactive affordances add steps that lead nowhere, preventing a score of 3.

---

## 3. Good design is aesthetic — Score: 1/3
Evidence: 36+ distinct color references (21 hex + 11 rgba + alpha variants) across components; CSS token system defined in globals.css:3–19 but inert — components hardcode hex directly. Four distinct border-radius tiers, icon sizes at 12/13/14/18px, inconsistent opacity notation (Tailwind `/15`, rgba(), 8-digit hex), padding split between p-4 and px-3 py-3 on visually identical cards. Contrast failure at #7a7a90 on white (~4.2:1) used for secondary text throughout.  
Justification: More than 3–5 inconsistencies, and the token system that would unify them is defined but completely bypassed; scores 1 and not 0 because a recognizable palette (light bg, indigo accent, status colors) is still visible.

---

## 4. Good design makes a product understandable — Score: 1/3
Evidence: "Pipeline" (HomeBase.tsx:42), "Job Radar" (JobRadar.tsx:29), all five depth labels (ContactRow.tsx:8–12), "depth-{n} contact" in generated nudge text (computeNextSteps.ts:61), and "Warm up {name}" (computeNextSteps.ts:60) are jargon or unexplained metaphors. Three dead buttons present as active affordances — a first-time user clicks "Add job" and receives no feedback.  
Justification: More than 2–3 controls are unclear and jargon is present throughout four of the four columns.

---

## 5. Good design is unobtrusive — Score: 2/3
Evidence: 0 modals on load, 0 idle animations, sticky header is 3 lines tall, section eyebrows use small all-caps tracking. Content (job cards, contacts, resources, nudges) is consistently the figure; chrome stays behind it. The indigo "Add job"/"Add link" buttons are the most prominent non-content elements but are proportionate.  
Justification: Chrome is visible and present but does not compete with content; scores 2 and not 3 because the eyebrow repetition (10 instances of the same uppercase label style) adds mild visual rhythm noise.

---

## 6. Good design is honest — Score: 1/3
Evidence: Five label-behavior mismatches documented: "Add job" no onClick (JobTracker.tsx:37), "Add link" no onClick (PMTraining.tsx:16), "Save" removes from radar but does not add to tracker (JobRadar.tsx:15–17), "PM network sheet" href="#" (Contacts.tsx:20), "open PM Training" is static text with no navigation (NextStepItem.tsx:26). No marketing inflations found.  
Justification: Multiple label-behavior mismatches constitute the same failure class as dark patterns in the rubric; 5 mismatches exceed the 1-dark-pattern threshold for score 1.

---

## 7. Good design is long-lasting — Score: 2/3
Evidence: System font stack, flat utility-first styling, no gradients, no skeuomorphism, no trend typography. The indigo/status-color palette is common since 2021 but not tied to a specific year. The inconsistent alpha-color notation (rgba, /15, 18-suffix) reads as a current 2025–26 engineering artifact rather than a design trend marker.  
Justification: One dated marker (the ad-hoc alpha mixing pattern that will look like technical debt within 2 years); visual language is otherwise neutral enough to hold for 3 years.

---

## 8. Good design is thorough down to the last detail — Score: 0/3
Evidence: Of the 7 required states — empty ✓, loading ✗, error ✗, success ✗, focus ring ✗, disabled ✗, hover ✓ — five are absent. No `focus:` or `focus-visible:` classes anywhere in the codebase. No `disabled` attributes or `disabled:` classes. No loading skeleton, spinner, or Suspense boundary. No error boundary or error UI.  
Justification: 5 of 7 states missing meets the rubric threshold of 4+ missing states for a score of 0.

---

## 9. Good design is environmentally friendly — Score: 2/3
Evidence: ~115–155 KB gzipped initial JS (under 500 KB threshold); 0 API calls at runtime; 0 idle animations — all transitions are hover-triggered. `new Date()` at app/page.tsx:22 forces dynamic SSR on every request instead of static generation. 5 installed but unused packages (4 Radix + class-variance-authority) add dead package.json weight. No `prefers-reduced-motion` or `prefers-color-scheme` handling.  
Justification: Bundle under 500 KB and motion is gated (not always-on), which meets the score-2 threshold; does not reach 3 because dark mode is not honored and reduced-motion is not respected.

---

## 10. Good design is as little design as possible — Score: 1/3
Evidence: 10 instances of the section-eyebrow pattern hardcoded inline (not extracted to a `<SectionEyebrow>` component); 4 instances of the list-container pattern duplicating Card styling (JobTracker.tsx:75, JobRadar.tsx:35, Contacts.tsx:43, NextSteps.tsx:24); CSS custom property layer in globals.css:3–19 is dead weight (defined but never consumed); 5 unused packages in package.json; `JobTrackerColumn.tsx` is a pass-through wrapper file that adds a file without adding abstraction.  
Justification: More than 5 removable elements (dead CSS layer, dead packages, repeated inline patterns) — scores 1 rather than 0 because the visual surface is not dominated by decoration.

---

## Total: 13/30

| # | Principle | Score |
|---|-----------|------:|
| 1 | Innovative | 1 |
| 2 | Useful | 2 |
| 3 | Aesthetic | 1 |
| 4 | Understandable | 1 |
| 5 | Unobtrusive | 2 |
| 6 | Honest | 1 |
| 7 | Long-lasting | 2 |
| 8 | Thorough | 0 |
| 9 | Environmentally friendly | 2 |
| 10 | As little design as possible | 1 |
| | **Total** | **13/30** |

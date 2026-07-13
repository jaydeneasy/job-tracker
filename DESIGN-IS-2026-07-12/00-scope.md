# Scope — PM Job Dashboard Design Audit

**Audit date:** 2026-07-12  
**Surface:** Full single-page dashboard — all four columns visible simultaneously  
**Repo path:** `/Users/jaydeneasy/Job_Tracker_Proj`  
**Dev server:** `http://127.0.0.1:3000`  
**Theme at time of audit:** Light (switched from dark by Claude Code prior to audit)

## Primary user
A Product Manager actively job hunting — tracking 5–20 live applications, managing a contact network, and doing structured interview prep in parallel.

## Primary tasks (in order of importance)
1. See what needs attention right now (Next Steps feed)
2. Know where each application stands (Job Tracker)
3. Follow up with the right contact at the right time (Contacts)
4. Stay on top of weekly prep goals (PM Training + Weekly Goal)

## Stack
Next.js 16, TypeScript, Tailwind CSS (v4 via @tailwindcss/postcss), Lucide icons, hand-rolled shadcn-pattern components. No backend — local mock data in `/data`.

## Constraints
- No backend yet (mock data only)
- Must support Google Sheets swap later (data layer isolated in `/data/`)
- Mobile: columns stack vertically
- No external UI library — components in `/components/ui/`

## Out of scope
- Google Sheets / Gmail integration (not built)
- Mobile responsive layout (v1 only stacks columns)
- Authentication / multi-user

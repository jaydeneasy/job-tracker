import type { Application } from "./types";

const _applications: Application[] = [
  {
    id: "app-1",
    company: "Stripe",
    role: "Senior Product Manager, Payments",
    dateApplied: "2026-07-08",
    status: "interview",
    source: "LinkedIn",
    link: "https://stripe.com/jobs",
  },
  {
    id: "app-2",
    company: "Linear",
    role: "Product Manager, Core",
    dateApplied: "2026-07-05",
    status: "phone_screen",
    source: "Referral",
    link: "https://linear.app/jobs",
  },
  {
    id: "app-3",
    company: "Figma",
    role: "Product Manager, Collaboration",
    dateApplied: "2026-07-01",
    status: "applied",
    source: "Company site",
    link: "https://figma.com/jobs",
  },
  {
    id: "app-4",
    company: "Notion",
    role: "Senior PM, Enterprise",
    dateApplied: "2026-06-28",
    status: "applied",
    source: "LinkedIn",
    link: "https://notion.so/jobs",
  },
  {
    id: "app-5",
    company: "Vercel",
    role: "Product Manager, Developer Experience",
    dateApplied: "2026-07-10",
    status: "saved",
    source: "Twitter",
    link: "https://vercel.com/careers",
  },
  {
    id: "app-6",
    company: "Loom",
    role: "PM, Growth",
    dateApplied: "2026-06-20",
    status: "rejected",
    source: "LinkedIn",
    link: "https://loom.com/jobs",
  },
  {
    id: "app-7",
    company: "Miro",
    role: "Senior Product Manager",
    dateApplied: "2026-07-03",
    status: "phone_screen",
    source: "Referral",
    link: "https://miro.com/careers",
  },
  {
    id: "app-8",
    company: "Atlassian",
    role: "PM, Jira Cloud",
    dateApplied: "2026-06-15",
    status: "offer",
    source: "Company site",
    link: "https://atlassian.com/jobs",
  },
  {
    id: "app-9",
    company: "Airtable",
    role: "Product Manager, Platform",
    dateApplied: "2026-07-09",
    status: "applied",
    source: "LinkedIn",
    link: "https://airtable.com/jobs",
  },
];

export function getApplications(): Application[] {
  return _applications;
}

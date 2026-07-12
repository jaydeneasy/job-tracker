import type { Contact } from "./types";

const _contacts: Contact[] = [
  {
    id: "contact-1",
    name: "Sarah Chen",
    company: "Stripe",
    relationshipType: "PM peer",
    depth: 4,
    tone: "warm",
    lastContactDate: "2026-06-30",
    lastPromise: "Intro to hiring manager",
    nextAction: "Send follow-up on intro",
  },
  {
    id: "contact-2",
    name: "Marcus Webb",
    company: "Linear",
    relationshipType: "Alumni",
    depth: 3,
    tone: "casual",
    lastContactDate: "2026-07-05",
    lastPromise: "",
    nextAction: "Ask about team culture",
  },
  {
    id: "contact-3",
    name: "Priya Nair",
    company: "Reforge",
    relationshipType: "Mentor",
    depth: 5,
    tone: "warm",
    lastContactDate: "2026-07-01",
    lastPromise: "Review resume draft",
    nextAction: "Share updated resume v3",
  },
  {
    id: "contact-4",
    name: "Tom Bakker",
    company: "Figma",
    relationshipType: "Conference contact",
    depth: 2,
    tone: "formal",
    lastContactDate: "2026-06-18",
    lastPromise: "",
    nextAction: "Schedule 30-min chat",
  },
  {
    id: "contact-5",
    name: "Aisha Oyelaran",
    company: "Notion",
    relationshipType: "Former colleague",
    depth: 3,
    tone: "warm",
    lastContactDate: "2026-06-25",
    lastPromise: "Owes a recommendation",
    nextAction: "Follow up on recommendation",
  },
  {
    id: "contact-6",
    name: "Jason Park",
    company: "Anthropic",
    relationshipType: "LinkedIn connection",
    depth: 1,
    tone: "formal",
    lastContactDate: "2026-06-10",
    lastPromise: "",
    nextAction: "Cold outreach for referral",
  },
];

export function getContacts(): Contact[] {
  return _contacts;
}

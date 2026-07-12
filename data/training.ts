import type { TrainingResource, ChecklistItem } from "./types";

const _trainingResources: TrainingResource[] = [
  {
    id: "tr-1",
    title: "Reforge — Product Strategy",
    description: "Frameworks for thinking about market positioning and product bets",
    link: "https://reforge.com",
    progressPct: 65,
  },
  {
    id: "tr-2",
    title: "Lenny's Newsletter",
    description: "Weekly deep dives on growth, retention, and PM career paths",
    link: "https://lennysnewsletter.com",
    progressPct: 40,
  },
  {
    id: "tr-3",
    title: "Exponent — PM Interview Prep",
    description: "Structured practice for product sense, estimation, and metrics questions",
    link: "https://tryexponent.com",
    progressPct: 25,
  },
  {
    id: "tr-4",
    title: "Shreyas Doshi — PM Frameworks",
    description: "LNO framework, pre-mortem thinking, and influence without authority",
    link: "https://twitter.com/shreyas",
    progressPct: 80,
  },
  {
    id: "tr-5",
    title: "Continuous Discovery Habits",
    description: "Teresa Torres on opportunity solution trees and continuous interviewing",
    link: "https://www.producttalk.org",
    progressPct: 50,
  },
];

const _weeklyChecklist: ChecklistItem[] = [
  { id: "chk-1", label: "30-min Exponent mock interview", done: true },
  { id: "chk-2", label: "Read Lenny's latest essay", done: true },
  { id: "chk-3", label: "Practice one estimation question", done: false },
  { id: "chk-4", label: "Update Stripe interview prep notes", done: false },
  { id: "chk-5", label: "Review product metrics framework", done: false },
];

export function getTrainingResources(): TrainingResource[] {
  return _trainingResources;
}

export function getWeeklyChecklist(): ChecklistItem[] {
  return _weeklyChecklist;
}

export type ApplicationStatus =
  | "saved"
  | "applied"
  | "phone_screen"
  | "interview"
  | "offer"
  | "rejected";

export interface Application {
  id: string;
  company: string;
  role: string;
  dateApplied: string; // ISO date string
  status: ApplicationStatus;
  source: string;
  link: string;
}

export interface RadarJob {
  id: string;
  company: string;
  role: string;
  dateSeen: string; // ISO date string
  source: string;
  matchedToTarget: boolean;
}

export type ContactDepth = 1 | 2 | 3 | 4 | 5;
export type ContactTone = "formal" | "warm" | "casual";

export interface Contact {
  id: string;
  name: string;
  company: string;
  relationshipType: string;
  depth: ContactDepth;
  tone: ContactTone;
  lastContactDate: string; // ISO date string
  lastPromise: string;
  nextAction: string;
}

export interface TrainingResource {
  id: string;
  title: string;
  description: string;
  link: string;
  progressPct: number;
}

export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
}

export interface WeeklyGoal {
  label: string;
  target: number;
  completedThisWeek: number;
}

export interface ResumeLink {
  id: string;
  label: string;
  url: string;
}

export interface NextStep {
  id: string;
  icon: string;
  label: string;
  sublabel?: string;
  priority: number;
  type: "followup" | "interview_prep" | "company_intro" | "daily_prep";
}

import type { WeeklyGoal, ResumeLink } from "./types";

const _weeklyGoal: WeeklyGoal = {
  label: "3 new applications",
  target: 3,
  completedThisWeek: 2,
};

const _resumeLinks: ResumeLink[] = [
  {
    id: "res-1",
    label: "PM Resume v3.pdf",
    url: "#",
  },
  {
    id: "res-2",
    label: "Cover letter template.docx",
    url: "#",
  },
  {
    id: "res-3",
    label: "LinkedIn profile",
    url: "https://linkedin.com",
  },
];

export function getWeeklyGoal(): WeeklyGoal {
  return _weeklyGoal;
}

export function getResumeLinks(): ResumeLink[] {
  return _resumeLinks;
}

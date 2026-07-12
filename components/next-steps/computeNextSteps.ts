import type { Application, Contact, ChecklistItem, NextStep } from "@/data/types";

const FOLLOW_UP_THRESHOLD_DAYS = 5;
const COLD_CONTACT_THRESHOLD_DAYS = 21;

function daysSince(isoDate: string): number {
  const now = new Date();
  const then = new Date(isoDate);
  return Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
}

export function computeNextSteps(
  applications: Application[],
  contacts: Contact[],
  checklist: ChecklistItem[]
): NextStep[] {
  const steps: NextStep[] = [];

  // 1. Follow-up reminders: contact has nextAction + last contact > 5 days ago
  contacts.forEach((c) => {
    if (!c.nextAction) return;
    const days = daysSince(c.lastContactDate);
    if (days >= FOLLOW_UP_THRESHOLD_DAYS) {
      steps.push({
        id: `followup-${c.id}`,
        icon: "📨",
        label: `Follow up with ${c.name} (${c.company})`,
        sublabel: c.nextAction,
        priority: days > 14 ? 1 : 2,
        type: "followup",
      });
    }
  });

  // 2. Interview prep nudge for each active interview
  const activeInterviews = applications.filter((a) => a.status === "interview");
  activeInterviews.forEach((a) => {
    steps.push({
      id: `interview-prep-${a.id}`,
      icon: "🎯",
      label: `Prep for ${a.company} interview`,
      sublabel: `${a.role} — review PM Training resources`,
      priority: 1,
      type: "interview_prep",
    });
  });

  // 3. Company intro nudge: applied to a company where a low-depth contact works
  applications
    .filter((a) => !["rejected", "saved"].includes(a.status))
    .forEach((a) => {
      const match = contacts.find(
        (c) =>
          c.company.toLowerCase() === a.company.toLowerCase() && c.depth <= 2
      );
      if (match) {
        steps.push({
          id: `intro-${a.id}-${match.id}`,
          icon: "🤝",
          label: `Warm up ${match.name} before ${a.company} moves forward`,
          sublabel: `${match.name} is a depth-${match.depth} contact at ${match.company}`,
          priority: 2,
          type: "company_intro",
        });
      }
    });

  // 4. Cold contact alert: contact has nextAction but no contact in > 21 days
  contacts.forEach((c) => {
    const days = daysSince(c.lastContactDate);
    if (days > COLD_CONTACT_THRESHOLD_DAYS && !steps.find((s) => s.id === `followup-${c.id}`)) {
      steps.push({
        id: `cold-${c.id}`,
        icon: "🌡️",
        label: `Re-engage ${c.name} — ${days} days since last contact`,
        sublabel: c.company,
        priority: 3,
        type: "followup",
      });
    }
  });

  // 5. Daily prep fallback: if no checklist item done today
  const doneTodayCount = checklist.filter((item) => item.done).length;
  if (doneTodayCount === 0) {
    steps.push({
      id: "daily-prep",
      icon: "📚",
      label: "No training completed today — open PM Training",
      sublabel: "Pick one item from this week's checklist",
      priority: 4,
      type: "daily_prep",
    });
  }

  // Sort by priority ascending (lower = more urgent)
  return steps.sort((a, b) => a.priority - b.priority);
}

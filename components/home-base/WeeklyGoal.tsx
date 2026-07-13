import { Progress } from "@/components/ui/progress";
import type { WeeklyGoal } from "@/data/types";

interface WeeklyGoalProps {
  goal: WeeklyGoal;
}

export function WeeklyGoalCard({ goal }: WeeklyGoalProps) {
  const pct = Math.round((goal.completedThisWeek / goal.target) * 100);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#16161f]">{goal.label}</span>
        <span className="text-xs text-[#52526b]">
          {goal.completedThisWeek} of {goal.target} this week
        </span>
      </div>
      <Progress value={pct} />
      <div className="flex justify-end">
        <span className="text-xs text-[#6366f1] font-medium">{pct}%</span>
      </div>
    </div>
  );
}

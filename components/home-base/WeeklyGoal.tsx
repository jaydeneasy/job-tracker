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
        <span className="text-sm font-medium text-[#e8e8f0]">{goal.label}</span>
        <span className="text-xs text-[#8888a8]">
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

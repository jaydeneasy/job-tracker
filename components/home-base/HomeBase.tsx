import { ExternalLink, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PipelineStats } from "./PipelineStats";
import { WeeklyGoalCard } from "./WeeklyGoal";
import { getApplications } from "@/data/applications";
import { getWeeklyGoal } from "@/data/weeklyGoal";

export function HomeBase() {
  const applications = getApplications();
  const goal = getWeeklyGoal();

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
        Home Base
      </div>

      {/* Claude link */}
      <Card>
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6366f1]/15 shrink-0">
            <Bot size={18} className="text-[#6366f1]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[#e8e8f0] group-hover:text-white transition-colors">
              Claude AI
            </div>
            <div className="text-[11px] text-[#55556a]">claude.ai</div>
          </div>
          <ExternalLink size={14} className="text-[#55556a] group-hover:text-[#8888a8] transition-colors shrink-0" />
        </a>
      </Card>

      {/* Pipeline stats */}
      <Card>
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase mb-3">
          Pipeline
        </div>
        <PipelineStats applications={applications} />
      </Card>

      {/* Weekly goal */}
      <Card>
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase mb-3">
          Weekly goal
        </div>
        <WeeklyGoalCard goal={goal} />
      </Card>
    </div>
  );
}

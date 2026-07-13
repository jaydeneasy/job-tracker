import { Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkCard } from "@/components/ui/LinkCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PipelineStats } from "./PipelineStats";
import { WeeklyGoalCard } from "./WeeklyGoal";
import { getApplications } from "@/data/applications";
import { getWeeklyGoal } from "@/data/weeklyGoal";

export function HomeBase() {
  const applications = getApplications();
  const goal = getWeeklyGoal();

  return (
    <div className="flex flex-col gap-3 h-full">
      <SectionEyebrow label="Home Base" />

      <LinkCard
        href="https://claude.ai/share/2e505bf4-a7cc-45fc-98a3-6a6d1ec48420"
        icon={<Bot size={16} className="text-accent" />}
        iconBg="bg-accent/10"
        title="Claude AI"
        subtitle="Open your job search conversation"
      />

      {/* Application summary */}
      <Card>
        <SectionEyebrow label="Summary" className="mb-3" />
        <PipelineStats applications={applications} />
      </Card>

      {/* Weekly goal */}
      <Card>
        <SectionEyebrow label="Weekly goal" className="mb-3" />
        <WeeklyGoalCard goal={goal} />
      </Card>
    </div>
  );
}

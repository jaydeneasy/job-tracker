import { Plus } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ResourceCard } from "./ResourceCard";
import { WeeklyChecklist } from "./WeeklyChecklist";
import { getTrainingResources, getWeeklyChecklist } from "@/data/training";

export function PMTraining() {
  const resources = getTrainingResources();
  const checklist = getWeeklyChecklist();

  return (
    <div id="pm-training" className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <SectionEyebrow label="PM Training" />
        <button
          disabled
          title="Adding resources manually is coming soon"
          className="flex items-center gap-1 rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-dim opacity-50 cursor-not-allowed"
        >
          <Plus size={12} />
          Add link
        </button>
      </div>

      <div className="space-y-2">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>

      <div className="rounded-xl border border-border bg-surface p-3">
        <SectionEyebrow label="This week" className="mb-2" />
        <WeeklyChecklist items={checklist} />
      </div>
    </div>
  );
}

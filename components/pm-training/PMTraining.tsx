import { Plus } from "lucide-react";
import { ResourceCard } from "./ResourceCard";
import { WeeklyChecklist } from "./WeeklyChecklist";
import { getTrainingResources, getWeeklyChecklist } from "@/data/training";

export function PMTraining() {
  const resources = getTrainingResources();
  const checklist = getWeeklyChecklist();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
          PM Training
        </div>
        <button className="flex items-center gap-1 rounded-md bg-[#6366f1]/15 px-2.5 py-1 text-xs font-medium text-[#818cf8] hover:bg-[#6366f1]/25 transition-colors">
          <Plus size={12} />
          Add link
        </button>
      </div>

      {/* Resources */}
      <div className="space-y-2">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>

      {/* Weekly checklist */}
      <div className="rounded-xl border border-[#1e1e2a] bg-[#111117] p-3">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase mb-2">
          This week
        </div>
        <WeeklyChecklist items={checklist} />
      </div>
    </div>
  );
}

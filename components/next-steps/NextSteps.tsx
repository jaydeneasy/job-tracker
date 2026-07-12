import { Zap } from "lucide-react";
import { NextStepItem } from "./NextStepItem";
import { computeNextSteps } from "./computeNextSteps";
import { getApplications } from "@/data/applications";
import { getContacts } from "@/data/contacts";
import { getWeeklyChecklist } from "@/data/training";

export function NextSteps() {
  const applications = getApplications();
  const contacts = getContacts();
  const checklist = getWeeklyChecklist();

  const steps = computeNextSteps(applications, contacts, checklist);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
          Next Steps
        </div>
        <Zap size={12} className="text-[#6366f1]" />
      </div>

      <div className="divide-y divide-[#1a1a26] rounded-xl border border-[#1e1e2a] bg-[#111117] overflow-hidden">
        {steps.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-[#55556a]">
            All caught up — no nudges right now
          </div>
        ) : (
          steps.map((step) => <NextStepItem key={step.id} step={step} />)
        )}
      </div>
    </div>
  );
}

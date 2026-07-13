import { Zap } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ListContainer } from "@/components/ui/ListContainer";
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
    <div id="next-steps" className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <SectionEyebrow label="Suggested actions" />
        <Zap size={11} className="text-accent" />
      </div>

      <ListContainer>
        {steps.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted">
            All caught up — no suggested actions right now
          </div>
        ) : (
          steps.map((step) => <NextStepItem key={step.id} step={step} />)
        )}
      </ListContainer>
    </div>
  );
}

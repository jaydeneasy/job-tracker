import type { NextStep } from "@/data/types";

interface NextStepItemProps {
  step: NextStep;
}

const TYPE_ACCENT: Record<NextStep["type"], string> = {
  followup: "var(--color-status-applied)",
  interview_prep: "var(--color-accent)",
  company_intro: "var(--color-status-success)",
  daily_prep: "var(--color-status-progress)",
};

const TYPE_SCROLL_TARGET: Partial<Record<NextStep["type"], string>> = {
  interview_prep: "#pm-training",
  daily_prep: "#pm-training",
};

export function NextStepItem({ step }: NextStepItemProps) {
  const accentColor = TYPE_ACCENT[step.type];
  const scrollTarget = TYPE_SCROLL_TARGET[step.type];

  const content = (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-surface-raised transition-colors w-full text-left">
      <div
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm"
        style={{ backgroundColor: `color-mix(in srgb, ${accentColor} 12%, transparent)` }}
      >
        {step.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-primary leading-snug">{step.label}</div>
        {step.sublabel && (
          <div className="mt-0.5 text-[11px] text-muted truncate">
            {step.sublabel}
          </div>
        )}
      </div>
      <div
        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );

  if (scrollTarget) {
    return (
      <a href={scrollTarget} className="block">
        {content}
      </a>
    );
  }

  return content;
}

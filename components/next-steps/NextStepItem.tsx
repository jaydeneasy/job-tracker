import type { NextStep } from "@/data/types";

interface NextStepItemProps {
  step: NextStep;
}

const TYPE_COLORS: Record<NextStep["type"], string> = {
  followup: "#3b82f6",
  interview_prep: "#6366f1",
  company_intro: "#22c55e",
  daily_prep: "#eab308",
};

export function NextStepItem({ step }: NextStepItemProps) {
  const accentColor = TYPE_COLORS[step.type];

  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-[#16161e] transition-colors">
      <div
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm"
        style={{ backgroundColor: `${accentColor}18` }}
      >
        {step.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-[#e8e8f0] leading-snug">{step.label}</div>
        {step.sublabel && (
          <div className="mt-0.5 text-[11px] text-[#55556a] truncate">
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
}

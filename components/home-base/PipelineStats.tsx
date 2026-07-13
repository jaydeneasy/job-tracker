import type { Application } from "@/data/types";

interface PipelineStatsProps {
  applications: Application[];
}

const STAT_ROWS = [
  {
    label: "Active apps",
    key: "active",
    color: "#3b82f6",
  },
  {
    label: "Interviews",
    key: "interviews",
    color: "#6366f1",
  },
  {
    label: "Offers",
    key: "offers",
    color: "#22c55e",
  },
] as const;

function computeStats(applications: Application[]) {
  const active = applications.filter(
    (a) => !["rejected", "saved"].includes(a.status)
  ).length;
  const interviews = applications.filter(
    (a) => a.status === "interview"
  ).length;
  const offers = applications.filter((a) => a.status === "offer").length;
  return { active, interviews, offers };
}

export function PipelineStats({ applications }: PipelineStatsProps) {
  const stats = computeStats(applications);

  return (
    <div className="space-y-1">
      {STAT_ROWS.map((row) => (
        <div
          key={row.key}
          className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-[#f4f4f7] transition-colors"
        >
          <span className="text-sm text-[#52526b]">{row.label}</span>
          <span
            className="text-xl font-semibold tabular-nums"
            style={{ color: row.color }}
          >
            {stats[row.key]}
          </span>
        </div>
      ))}
    </div>
  );
}

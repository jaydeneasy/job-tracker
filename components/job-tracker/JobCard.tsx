import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Application, ApplicationStatus } from "@/data/types";

const STATUS_CONFIG: Record<
  ApplicationStatus,
  { dot: string; bg: string; text: string; label: string }
> = {
  saved: {
    dot: "#6b7280",
    bg: "rgba(107,114,128,0.15)",
    text: "#9ca3af",
    label: "Saved",
  },
  applied: {
    dot: "#3b82f6",
    bg: "rgba(59,130,246,0.15)",
    text: "#60a5fa",
    label: "Applied",
  },
  phone_screen: {
    dot: "#eab308",
    bg: "rgba(234,179,8,0.15)",
    text: "#fbbf24",
    label: "Phone screen",
  },
  interview: {
    dot: "#6366f1",
    bg: "rgba(99,102,241,0.15)",
    text: "#818cf8",
    label: "Interview",
  },
  offer: {
    dot: "#22c55e",
    bg: "rgba(34,197,94,0.15)",
    text: "#4ade80",
    label: "Offer",
  },
  rejected: {
    dot: "#6b7280",
    bg: "rgba(107,114,128,0.1)",
    text: "#6b7280",
    label: "Rejected",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface JobCardProps {
  application: Application;
}

export function JobCard({ application }: JobCardProps) {
  const cfg = STATUS_CONFIG[application.status];

  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-[#16161e] transition-colors group">
      <div
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: cfg.dot }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-sm font-medium text-[#e8e8f0] truncate">
              {application.company}
            </div>
            <div className="text-xs text-[#8888a8] truncate mt-0.5">
              {application.role}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge
              style={{ backgroundColor: cfg.bg, color: cfg.text }}
            >
              {cfg.label}
            </Badge>
            <a
              href={application.link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink size={12} className="text-[#55556a] hover:text-[#8888a8]" />
            </a>
          </div>
        </div>
        <div className="mt-1 text-[11px] text-[#55556a]">
          {formatDate(application.dateApplied)} · {application.source}
        </div>
      </div>
    </div>
  );
}

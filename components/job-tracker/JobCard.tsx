import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Application, ApplicationStatus } from "@/data/types";

const STATUS_CONFIG: Record<
  ApplicationStatus,
  { dot: string; bg: string; text: string; label: string }
> = {
  saved: {
    dot: "var(--color-status-closed)",
    bg: "rgba(107,114,128,0.12)",
    text: "var(--color-status-closed)",
    label: "Saved",
  },
  applied: {
    dot: "var(--color-status-applied)",
    bg: "rgba(59,130,246,0.12)",
    text: "#2563eb",
    label: "Applied",
  },
  phone_screen: {
    dot: "var(--color-status-progress)",
    bg: "rgba(234,179,8,0.12)",
    text: "#a16207",
    label: "Phone screen",
  },
  interview: {
    dot: "var(--color-accent)",
    bg: "rgba(99,102,241,0.12)",
    text: "var(--color-accent-dim)",
    label: "Interview",
  },
  offer: {
    dot: "var(--color-status-success)",
    bg: "rgba(34,197,94,0.12)",
    text: "#15803d",
    label: "Offer",
  },
  rejected: {
    dot: "var(--color-status-closed)",
    bg: "rgba(107,114,128,0.08)",
    text: "var(--color-status-closed)",
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
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-surface-raised transition-colors group">
      <div
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: cfg.dot }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-sm font-medium text-primary truncate">
              {application.company}
            </div>
            <div className="text-xs text-secondary truncate mt-0.5">
              {application.role}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge style={{ backgroundColor: cfg.bg, color: cfg.text }}>
              {cfg.label}
            </Badge>
            <a
              href={application.link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Open ${application.company} job posting`}
            >
              <ExternalLink size={12} className="text-muted hover:text-secondary" />
            </a>
          </div>
        </div>
        <div className="mt-1 text-[11px] text-muted">
          {formatDate(application.dateApplied)} · {application.source}
        </div>
      </div>
    </div>
  );
}

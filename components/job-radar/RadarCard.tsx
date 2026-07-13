"use client";

import { Bookmark, X, Target } from "lucide-react";
import type { RadarJob } from "@/data/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface RadarCardProps {
  job: RadarJob;
  onSave: (job: RadarJob) => void;
  onDismiss: (id: string) => void;
}

export function RadarCard({ job, onSave, onDismiss }: RadarCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-surface-raised transition-colors group">
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-primary truncate">
                {job.company}
              </span>
              {job.matchedToTarget && (
                <span title="Matches your target profile">
                  <Target size={11} className="text-accent shrink-0" />
                </span>
              )}
            </div>
            <div className="text-xs text-secondary truncate mt-0.5">
              {job.role}
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onSave(job)}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-accent-dim bg-accent/10 hover:bg-accent/20 transition-colors"
              title="Save to Job Tracker"
            >
              <Bookmark size={11} />
              Save to tracker
            </button>
            <button
              onClick={() => onDismiss(job.id)}
              className="rounded-md p-1 text-muted hover:text-secondary hover:bg-surface-raised transition-colors"
              title="Dismiss"
              aria-label="Dismiss posting"
            >
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="mt-1 text-[11px] text-muted">
          Seen {formatDate(job.dateSeen)} · {job.source}
        </div>
      </div>
    </div>
  );
}

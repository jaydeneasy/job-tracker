"use client";

import { Bookmark, X, Target } from "lucide-react";
import type { RadarJob } from "@/data/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface RadarCardProps {
  job: RadarJob;
  onSave: (id: string) => void;
  onDismiss: (id: string) => void;
}

export function RadarCard({ job, onSave, onDismiss }: RadarCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-[#f4f4f7] transition-colors group">
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-[#16161f] truncate">
                {job.company}
              </span>
              {job.matchedToTarget && (
                <span title="Matches target profile">
                  <Target size={11} className="text-[#6366f1] shrink-0" />
                </span>
              )}
            </div>
            <div className="text-xs text-[#52526b] truncate mt-0.5">
              {job.role}
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onSave(job.id)}
              className="flex items-center gap-1 rounded px-2 py-1 text-[11px] font-medium text-[#4f46e5] bg-[#6366f1]/15 hover:bg-[#6366f1]/25 transition-colors"
              title="Save to tracker"
            >
              <Bookmark size={11} />
              Save
            </button>
            <button
              onClick={() => onDismiss(job.id)}
              className="rounded p-1 text-[#7a7a90] hover:text-[#52526b] hover:bg-[#f4f4f7] transition-colors"
              title="Dismiss"
            >
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="mt-1 text-[11px] text-[#7a7a90]">
          Seen {formatDate(job.dateSeen)} · {job.source}
        </div>
      </div>
    </div>
  );
}

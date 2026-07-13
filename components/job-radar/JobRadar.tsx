"use client";

import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ListContainer } from "@/components/ui/ListContainer";
import { RadarCard } from "./RadarCard";
import type { RadarJob } from "@/data/types";

interface JobRadarProps {
  jobs: RadarJob[];
  onSave: (job: RadarJob) => void;
  onDismiss: (id: string) => void;
}

export function JobRadar({ jobs, onSave, onDismiss }: JobRadarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <SectionEyebrow label="New postings" />
        <span className="text-[10px] text-muted">— not yet applied</span>
      </div>

      <ListContainer>
        {jobs.length === 0 ? (
          <div className="px-4 py-6 text-center text-sm text-muted">
            No new postings to review
          </div>
        ) : (
          jobs.map((job) => (
            <RadarCard
              key={job.id}
              job={job}
              onSave={onSave}
              onDismiss={onDismiss}
            />
          ))
        )}
      </ListContainer>
    </div>
  );
}

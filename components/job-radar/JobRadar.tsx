"use client";

import { useState } from "react";
import { Radar } from "lucide-react";
import { RadarCard } from "./RadarCard";
import type { RadarJob } from "@/data/types";

interface JobRadarProps {
  jobs: RadarJob[];
}

export function JobRadar({ jobs: initialJobs }: JobRadarProps) {
  const [jobs, setJobs] = useState(initialJobs);

  function handleSave(id: string) {
    console.log("[Job Radar] Save to tracker:", id);
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  function handleDismiss(id: string) {
    console.log("[Job Radar] Dismiss:", id);
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
          Job Radar
        </div>
        <Radar size={12} className="text-[#55556a]" />
        <span className="text-[10px] text-[#55556a]">— postings not yet acted on</span>
      </div>

      <div className="divide-y divide-[#1a1a26] rounded-xl border border-[#1e1e2a] bg-[#111117] overflow-hidden">
        {jobs.length === 0 ? (
          <div className="px-4 py-6 text-center text-sm text-[#55556a]">
            Radar is clear
          </div>
        ) : (
          jobs.map((job) => (
            <RadarCard
              key={job.id}
              job={job}
              onSave={handleSave}
              onDismiss={handleDismiss}
            />
          ))
        )}
      </div>
    </div>
  );
}

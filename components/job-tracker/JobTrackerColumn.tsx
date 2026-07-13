"use client";

import { useState } from "react";
import { JobTracker } from "./JobTracker";
import { JobRadar } from "@/components/job-radar/JobRadar";
import { getApplications } from "@/data/applications";
import { getRadarJobs } from "@/data/radarJobs";
import type { Application, RadarJob } from "@/data/types";

export function JobTrackerColumn() {
  const [applications, setApplications] = useState<Application[]>(getApplications);
  const [radarJobs, setRadarJobs] = useState<RadarJob[]>(getRadarJobs);

  function handleSaveToTracker(job: RadarJob) {
    const newApp: Application = {
      id: `app-from-radar-${job.id}`,
      company: job.company,
      role: job.role,
      dateApplied: new Date().toISOString().split("T")[0],
      status: "saved",
      source: job.source,
      link: "#",
    };
    setApplications((prev) => [newApp, ...prev]);
    setRadarJobs((prev) => prev.filter((j) => j.id !== job.id));
  }

  function handleDismissRadar(id: string) {
    setRadarJobs((prev) => prev.filter((j) => j.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <JobTracker applications={applications} />
      <JobRadar
        jobs={radarJobs}
        onSave={handleSaveToTracker}
        onDismiss={handleDismissRadar}
      />
    </div>
  );
}

import { JobTracker } from "./JobTracker";
import { JobRadar } from "@/components/job-radar/JobRadar";
import { getApplications } from "@/data/applications";
import { getRadarJobs } from "@/data/radarJobs";

export function JobTrackerColumn() {
  const applications = getApplications();
  const radarJobs = getRadarJobs();

  return (
    <div className="flex flex-col gap-6">
      <JobTracker applications={applications} />
      <JobRadar jobs={radarJobs} />
    </div>
  );
}

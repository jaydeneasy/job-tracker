import { HomeBase } from "@/components/home-base/HomeBase";
import { JobTrackerColumn } from "@/components/job-tracker/JobTrackerColumn";
import { PMTraining } from "@/components/pm-training/PMTraining";
import { Contacts } from "@/components/contacts/Contacts";
import { NextSteps } from "@/components/next-steps/NextSteps";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1e1e2a] bg-[#0a0a0f]/95 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#6366f1]" />
          <span className="text-sm font-semibold text-[#e8e8f0]">
            PM job search
          </span>
          <span className="rounded bg-[#1e1e2a] px-2 py-0.5 text-[10px] font-medium text-[#55556a] uppercase tracking-wide">
            Dashboard
          </span>
        </div>
        <div className="text-xs text-[#55556a]">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>

      {/* 4-column grid */}
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Column 1: Home Base */}
        <section className="flex flex-col gap-4">
          <HomeBase />
        </section>

        {/* Column 2: Job Tracker + Job Radar */}
        <section className="flex flex-col gap-4">
          <JobTrackerColumn />
        </section>

        {/* Column 3: PM Training */}
        <section className="flex flex-col gap-4">
          <PMTraining />
        </section>

        {/* Column 4: Contacts + Next Steps */}
        <section className="flex flex-col gap-4">
          <Contacts />
          <NextSteps />
        </section>
      </main>
    </div>
  );
}

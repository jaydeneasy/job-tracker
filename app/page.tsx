import { HomeBase } from "@/components/home-base/HomeBase";
import { JobTrackerColumn } from "@/components/job-tracker/JobTrackerColumn";
import { PMTraining } from "@/components/pm-training/PMTraining";
import { Contacts } from "@/components/contacts/Contacts";
import { NextSteps } from "@/components/next-steps/NextSteps";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface/95 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-semibold text-primary">
            PM job search
          </span>
          <span className="rounded-md bg-surface-raised px-2 py-0.5 text-[10px] font-semibold text-muted uppercase tracking-wide">
            Dashboard
          </span>
        </div>
        <div className="text-xs text-muted">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>

      {/* 4-column grid */}
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        <section className="flex flex-col gap-4">
          <HomeBase />
        </section>

        <section className="flex flex-col gap-4">
          <JobTrackerColumn />
        </section>

        <section className="flex flex-col gap-4">
          <PMTraining />
        </section>

        <section className="flex flex-col gap-4">
          <Contacts />
          <NextSteps />
        </section>
      </main>
    </div>
  );
}

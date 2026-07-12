"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { JobCard } from "./JobCard";
import type { Application, ApplicationStatus } from "@/data/types";

type FilterTab = "all" | ApplicationStatus;

const TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "saved", label: "Saved" },
  { key: "applied", label: "Applied" },
  { key: "phone_screen", label: "Phone screen" },
  { key: "interview", label: "Interview" },
  { key: "rejected", label: "Rejected" },
];

interface JobTrackerProps {
  applications: Application[];
}

export function JobTracker({ applications }: JobTrackerProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filtered =
    activeTab === "all"
      ? applications
      : applications.filter((a) => a.status === activeTab);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
          Job Tracker
        </div>
        <button className="flex items-center gap-1 rounded-md bg-[#6366f1]/15 px-2.5 py-1 text-xs font-medium text-[#818cf8] hover:bg-[#6366f1]/25 transition-colors">
          <Plus size={12} />
          Add job
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {TABS.map((tab) => {
          const count =
            tab.key === "all"
              ? applications.length
              : applications.filter((a) => a.status === tab.key).length;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-[#6366f1]/20 text-[#818cf8]"
                  : "text-[#55556a] hover:text-[#8888a8] hover:bg-[#16161e]"
              }`}
            >
              {tab.label}
              <span
                className={`rounded px-1 py-0.5 text-[10px] leading-none tabular-nums ${
                  isActive ? "bg-[#6366f1]/30 text-[#a5b4fc]" : "bg-[#1e1e2a] text-[#55556a]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Job list */}
      <div className="divide-y divide-[#1a1a26] rounded-xl border border-[#1e1e2a] bg-[#111117] overflow-hidden">
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-[#55556a]">
            No jobs in this category
          </div>
        ) : (
          filtered.map((app) => <JobCard key={app.id} application={app} />)
        )}
      </div>
    </div>
  );
}

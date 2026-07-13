"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { JobCard } from "./JobCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ListContainer } from "@/components/ui/ListContainer";
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
        <SectionEyebrow label="Job Tracker" />
        <button
          disabled
          title="Adding jobs manually is coming soon"
          className="flex items-center gap-1 rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-dim opacity-50 cursor-not-allowed"
        >
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
                  ? "bg-accent/15 text-accent-dim"
                  : "text-muted hover:text-secondary hover:bg-surface-raised"
              }`}
            >
              {tab.label}
              <span
                className={`rounded px-1 py-0.5 text-[10px] leading-none tabular-nums ${
                  isActive
                    ? "bg-accent/25 text-accent-deep"
                    : "bg-border text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ListContainer>
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted">
            No jobs in this category
          </div>
        ) : (
          filtered.map((app) => <JobCard key={app.id} application={app} />)
        )}
      </ListContainer>
    </div>
  );
}

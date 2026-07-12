import type { RadarJob } from "./types";

const _radarJobs: RadarJob[] = [
  {
    id: "radar-1",
    company: "Anthropic",
    role: "Product Manager, Claude",
    dateSeen: "2026-07-11",
    source: "LinkedIn",
    matchedToTarget: true,
  },
  {
    id: "radar-2",
    company: "Intercom",
    role: "Senior PM, AI Features",
    dateSeen: "2026-07-10",
    source: "Lenny's Newsletter",
    matchedToTarget: true,
  },
  {
    id: "radar-3",
    company: "Productboard",
    role: "PM, Roadmapping",
    dateSeen: "2026-07-09",
    source: "Twitter",
    matchedToTarget: false,
  },
  {
    id: "radar-4",
    company: "Amplitude",
    role: "Product Manager, Analytics",
    dateSeen: "2026-07-08",
    source: "Company site",
    matchedToTarget: true,
  },
  {
    id: "radar-5",
    company: "Retool",
    role: "Senior PM, Internal Tools",
    dateSeen: "2026-07-07",
    source: "Hacker News",
    matchedToTarget: false,
  },
];

export function getRadarJobs(): RadarJob[] {
  return _radarJobs;
}

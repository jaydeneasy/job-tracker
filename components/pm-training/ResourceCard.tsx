import { ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { TrainingResource } from "@/data/types";

interface ResourceCardProps {
  resource: TrainingResource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-[#1e1e2a] bg-[#111117] px-3 py-3 hover:border-[#2a2a3a] hover:bg-[#16161e] transition-all group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-[#e8e8f0] group-hover:text-white transition-colors truncate">
              {resource.title}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-[#55556a] line-clamp-1">
            {resource.description}
          </p>
        </div>
        <ExternalLink
          size={13}
          className="shrink-0 mt-0.5 text-[#55556a] group-hover:text-[#8888a8] transition-colors"
        />
      </div>
      <div className="mt-2.5 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#55556a]">Progress</span>
          <span className="text-[10px] text-[#6366f1] font-medium">
            {resource.progressPct}%
          </span>
        </div>
        <Progress value={resource.progressPct} />
      </div>
    </a>
  );
}

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
      className="block rounded-lg border border-[#e6e6ec] bg-[#ffffff] px-3 py-3 hover:border-[#d6d6de] hover:bg-[#f4f4f7] transition-all group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-[#16161f] group-hover:text-black transition-colors truncate">
              {resource.title}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-[#7a7a90] line-clamp-1">
            {resource.description}
          </p>
        </div>
        <ExternalLink
          size={13}
          className="shrink-0 mt-0.5 text-[#7a7a90] group-hover:text-[#52526b] transition-colors"
        />
      </div>
      <div className="mt-2.5 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#7a7a90]">Progress</span>
          <span className="text-[10px] text-[#6366f1] font-medium">
            {resource.progressPct}%
          </span>
        </div>
        <Progress value={resource.progressPct} />
      </div>
    </a>
  );
}

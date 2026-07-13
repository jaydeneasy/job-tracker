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
      className="block rounded-xl border border-border bg-surface px-3 py-3 hover:border-secondary/30 hover:bg-surface-raised transition-all group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <span className="text-sm font-medium text-primary group-hover:text-primary transition-colors">
            {resource.title}
          </span>
          <p className="mt-0.5 text-[11px] text-muted line-clamp-1">
            {resource.description}
          </p>
        </div>
        <ExternalLink
          size={12}
          className="shrink-0 mt-0.5 text-muted group-hover:text-secondary transition-colors"
        />
      </div>
      <div className="mt-2.5 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted">Progress</span>
          <span className="text-[10px] text-accent font-medium">
            {resource.progressPct}%
          </span>
        </div>
        <Progress value={resource.progressPct} />
      </div>
    </a>
  );
}

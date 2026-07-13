import { FileText, ExternalLink } from "lucide-react";
import type { ResumeLink } from "@/data/types";

interface ResumeLinksProps {
  links: ResumeLink[];
}

export function ResumeLinks({ links }: ResumeLinksProps) {
  return (
    <div className="space-y-1">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-surface-raised transition-colors group"
        >
          <FileText size={12} className="text-muted shrink-0" />
          <span className="flex-1 text-sm text-secondary group-hover:text-primary transition-colors truncate">
            {link.label}
          </span>
          <ExternalLink
            size={11}
            className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          />
        </a>
      ))}
    </div>
  );
}

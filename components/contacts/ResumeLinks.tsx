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
          className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-[#f4f4f7] transition-colors group"
        >
          <FileText size={13} className="text-[#7a7a90] shrink-0" />
          <span className="flex-1 text-sm text-[#52526b] group-hover:text-[#16161f] transition-colors truncate">
            {link.label}
          </span>
          <ExternalLink
            size={11}
            className="text-[#7a7a90] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          />
        </a>
      ))}
    </div>
  );
}

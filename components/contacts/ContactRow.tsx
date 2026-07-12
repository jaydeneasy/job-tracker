import { Badge } from "@/components/ui/badge";
import type { Contact, ContactDepth, ContactTone } from "@/data/types";

const DEPTH_CONFIG: Record<
  ContactDepth,
  { label: string; bg: string; text: string }
> = {
  1: { label: "Transactional", bg: "rgba(107,114,128,0.15)", text: "#9ca3af" },
  2: { label: "Cordial", bg: "rgba(107,114,128,0.2)", text: "#d1d5db" },
  3: { label: "Warm professional", bg: "rgba(99,102,241,0.12)", text: "#a5b4fc" },
  4: { label: "Advisory", bg: "rgba(99,102,241,0.2)", text: "#818cf8" },
  5: { label: "Mentor / Sponsor", bg: "rgba(99,102,241,0.3)", text: "#6366f1" },
};

const TONE_CONFIG: Record<ContactTone, { label: string; bg: string; text: string }> = {
  formal: { label: "Formal", bg: "rgba(107,114,128,0.12)", text: "#9ca3af" },
  warm: { label: "Warm", bg: "rgba(234,179,8,0.12)", text: "#fbbf24" },
  casual: { label: "Casual", bg: "rgba(34,197,94,0.12)", text: "#4ade80" },
};

function getDaysSince(isoDate: string): number {
  const now = new Date();
  const then = new Date(isoDate);
  return Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
}

function getStatusLine(contact: Contact): string {
  if (contact.lastPromise) return contact.lastPromise;
  const days = getDaysSince(contact.lastContactDate);
  if (days > 14) return `No contact in ${days} days`;
  return `Last contact ${days}d ago`;
}

interface ContactRowProps {
  contact: Contact;
}

export function ContactRow({ contact }: ContactRowProps) {
  const depth = DEPTH_CONFIG[contact.depth];
  const tone = TONE_CONFIG[contact.tone];

  return (
    <div className="flex flex-col gap-1.5 rounded-lg px-3 py-2.5 hover:bg-[#16161e] transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-[#e8e8f0] truncate">
            {contact.name}
          </div>
          <div className="text-[11px] text-[#55556a] truncate">{contact.company}</div>
        </div>
        <div className="flex items-center gap-1 shrink-0 flex-wrap justify-end">
          <Badge style={{ backgroundColor: depth.bg, color: depth.text }}>
            {contact.depth} · {depth.label}
          </Badge>
          <Badge style={{ backgroundColor: tone.bg, color: tone.text }}>
            {tone.label}
          </Badge>
        </div>
      </div>
      <div className="text-[11px] text-[#55556a] italic">{getStatusLine(contact)}</div>
    </div>
  );
}

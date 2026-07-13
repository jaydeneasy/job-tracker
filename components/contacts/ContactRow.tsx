import { Badge } from "@/components/ui/badge";
import type { Contact, ContactDepth, ContactTone } from "@/data/types";

const DEPTH_CONFIG: Record<
  ContactDepth,
  { label: string; bg: string; text: string }
> = {
  1: { label: "Acquaintance", bg: "rgba(107,114,128,0.10)", text: "#6b7280" },
  2: { label: "Friendly contact", bg: "rgba(107,114,128,0.15)", text: "#52526b" },
  3: { label: "Strong relationship", bg: "rgba(99,102,241,0.10)", text: "#4338ca" },
  4: { label: "Advisor", bg: "rgba(99,102,241,0.18)", text: "#4f46e5" },
  5: { label: "Mentor or advocate", bg: "rgba(99,102,241,0.25)", text: "#6366f1" },
};

const TONE_CONFIG: Record<ContactTone, { label: string; bg: string; text: string }> = {
  formal: { label: "Formal", bg: "rgba(107,114,128,0.10)", text: "#6b7280" },
  warm: { label: "Warm", bg: "rgba(234,179,8,0.10)", text: "#a16207" },
  casual: { label: "Casual", bg: "rgba(34,197,94,0.10)", text: "#15803d" },
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
    <div className="flex flex-col gap-1.5 rounded-lg px-3 py-2.5 hover:bg-surface-raised transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-primary truncate">
            {contact.name}
          </div>
          <div className="text-[11px] text-muted truncate">{contact.company}</div>
        </div>
        <div className="flex items-center gap-1 shrink-0 flex-wrap justify-end">
          <Badge style={{ backgroundColor: depth.bg, color: depth.text }}>
            {depth.label}
          </Badge>
          <Badge style={{ backgroundColor: tone.bg, color: tone.text }}>
            {tone.label}
          </Badge>
        </div>
      </div>
      <div className="text-[11px] text-muted italic">{getStatusLine(contact)}</div>
    </div>
  );
}

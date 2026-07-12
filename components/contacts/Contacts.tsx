import { ExternalLink, Sheet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactRow } from "./ContactRow";
import { ResumeLinks } from "./ResumeLinks";
import { getContacts } from "@/data/contacts";
import { getResumeLinks } from "@/data/weeklyGoal";

export function Contacts() {
  const contacts = getContacts();
  const resumeLinks = getResumeLinks();

  return (
    <div className="flex flex-col gap-3">
      <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase">
        Contacts
      </div>

      {/* Network sheet link */}
      <Card>
        <a
          href="#"
          className="flex items-center gap-3 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22c55e]/10 shrink-0">
            <Sheet size={18} className="text-[#22c55e]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[#e8e8f0] group-hover:text-white transition-colors">
              PM network sheet
            </div>
            <div className="text-[11px] text-[#55556a]">Google Sheets</div>
          </div>
          <ExternalLink
            size={14}
            className="text-[#55556a] group-hover:text-[#8888a8] transition-colors shrink-0"
          />
        </a>
      </Card>

      {/* Contact list */}
      <div className="divide-y divide-[#1a1a26] rounded-xl border border-[#1e1e2a] bg-[#111117] overflow-hidden">
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </div>

      {/* Resume links */}
      <div className="rounded-xl border border-[#1e1e2a] bg-[#111117] p-3">
        <div className="text-[10px] font-semibold tracking-widest text-[#55556a] uppercase mb-2">
          Resume &amp; docs
        </div>
        <ResumeLinks links={resumeLinks} />
      </div>
    </div>
  );
}

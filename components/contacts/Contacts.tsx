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
      <div className="text-[10px] font-semibold tracking-widest text-[#7a7a90] uppercase">
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
            <div className="text-sm font-medium text-[#16161f] group-hover:text-black transition-colors">
              PM network sheet
            </div>
            <div className="text-[11px] text-[#7a7a90]">Google Sheets</div>
          </div>
          <ExternalLink
            size={14}
            className="text-[#7a7a90] group-hover:text-[#52526b] transition-colors shrink-0"
          />
        </a>
      </Card>

      {/* Contact list */}
      <div className="divide-y divide-[#ececf1] rounded-xl border border-[#e6e6ec] bg-[#ffffff] overflow-hidden">
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </div>

      {/* Resume links */}
      <div className="rounded-xl border border-[#e6e6ec] bg-[#ffffff] p-3">
        <div className="text-[10px] font-semibold tracking-widest text-[#7a7a90] uppercase mb-2">
          Resume &amp; docs
        </div>
        <ResumeLinks links={resumeLinks} />
      </div>
    </div>
  );
}

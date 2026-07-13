import { Sheet } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LinkCard } from "@/components/ui/LinkCard";
import { ListContainer } from "@/components/ui/ListContainer";
import { ContactRow } from "./ContactRow";
import { ResumeLinks } from "./ResumeLinks";
import { getContacts } from "@/data/contacts";
import { getResumeLinks } from "@/data/weeklyGoal";

export function Contacts() {
  const contacts = getContacts();
  const resumeLinks = getResumeLinks();

  return (
    <div className="flex flex-col gap-3">
      <SectionEyebrow label="Contacts" />

      {/* Network sheet — disabled until Google Sheets is connected */}
      <LinkCard
        href="#"
        icon={<Sheet size={16} className="text-status-success" />}
        iconBg="bg-status-success/10"
        title="PM network sheet"
        subtitle="Connect Google Sheets to load contacts"
        disabled
      />

      <ListContainer>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </ListContainer>

      <div className="rounded-xl border border-border bg-surface p-3">
        <SectionEyebrow label="Resume &amp; docs" className="mb-2" />
        <ResumeLinks links={resumeLinks} />
      </div>
    </div>
  );
}

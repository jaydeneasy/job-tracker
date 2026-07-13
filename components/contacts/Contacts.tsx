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

      {/* Network sheet — live link to the real Google Sheet */}
      <LinkCard
        href="https://docs.google.com/spreadsheets/d/1fWCvqOXlPb0-VSCIfsgwMDvo4aBGwu4MmMppI_2gvLg/edit?gid=662369060#gid=662369060"
        icon={<Sheet size={16} className="text-status-success" />}
        iconBg="bg-status-success/10"
        title="PM network sheet"
        subtitle="Open full contacts in Google Sheets"
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

import { LegalDoc } from "@/components/LegalDoc";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Complaints",
  description: "How to raise a complaint or contact NOSS about the website or service.",
  path: "/complaints",
});

export default function ComplaintsPage() {
  return (
    <Section>
      <LegalDoc
        title="Complaints / contact"
        version="2026-08-24"
        sections={[
          {
            heading: "How to contact us",
            body: [
              "Email: info@trishulhub.in",
              "You can also use the Book a Demo / Contact form for general enquiries.",
              "Public mobile and WhatsApp numbers will be published when owner-approved values are available.",
            ],
          },
          {
            heading: "Complaints",
            body: [
              "If you have a complaint about this website or a NOSS service enquiry, email info@trishulhub.in with a clear description and any relevant reference (such as an enquiry confirmation).",
              "Response ownership sits with the NOSS UK owner / designated Trishulhub support contact until a permanent support rota is published.",
            ],
          },
          {
            heading: "Data protection complaints",
            body: [
              "You may also have the right to complain to the Information Commissioner’s Office (ICO) about personal-data handling.",
            ],
          },
        ]}
      />
    </Section>
  );
}

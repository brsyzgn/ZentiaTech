import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData from "@/components/PageStructuredData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("careers");

export default function CareersPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />
      <PageHeader
        title="Careers at ZentiaTech | Zentia Tech"
        description="Join ZentiaTech (Zentia Tech) and build modern software products in web, mobile, AI, and game development."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (Zentia Tech) is growing its engineering, design, and product teams. If you are passionate about software development, we would like to hear from you.",
          "At ZentiaTech, we build modern software solutions with clean architecture and collaborative culture. Zentia Tech offers opportunities in full-stack development, mobile engineering, AI integration, UI/UX design, and game development through ZentiaGame.",
          "Send your CV and portfolio to info@zentiatech.com with the subject line “ZentiaTech Careers”. Mention whether you found us searching for ZentiaTech or Zentia Tech — both are correct.",
        ]}
        links={[
          { href: "/about", label: "About ZentiaTech" },
          { href: "/services", label: "Our Services" },
          { href: "/contact", label: "Contact Zentia Tech" },
          { href: "mailto:info@zentiatech.com", label: "info@zentiatech.com" },
        ]}
      />
    </PageShell>
  );
}

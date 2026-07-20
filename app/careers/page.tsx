import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("careers");

export default function CareersPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/careers",
          name: "Careers | ZentiaTech",
          description: "Careers at ZentiaTech (Zentia Tech).",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Careers | ZentiaTech"
        description="Join ZentiaTech (Zentia Tech) and build modern software products in web, mobile, AI, and game development."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (Zentia Tech) is growing its engineering, design, and product teams. If you are passionate about software development, we would like to hear from you.",
          "At ZentiaTech, we build modern software solutions with clean architecture and collaborative culture. Zentia Tech offers opportunities in full-stack development, mobile engineering, AI integration, UI/UX design, and game development through ZentiaGame.",
          "Send your CV and portfolio to info@zentiatech.com with the subject line “ZentiaTech Careers”.",
        ]}
        links={[
          { href: "/about", label: "About ZentiaTech" },
          { href: "/services", label: "Our Services" },
          { href: "/contact", label: "Contact Zentia Tech" },
          { href: "mailto:info@zentiatech.com", label: "info@zentiatech.com" },
        ]}
      />
      <RelatedLinks
        links={[
          {
            href: "/about-zentiatech",
            label: "What is ZentiaTech?",
            description: "Learn about the brand",
          },
          {
            href: "/ai",
            label: "AI team work",
            description: "ZentiaTech AI practice",
          },
          {
            href: "/web",
            label: "Web engineering",
            description: "Zentia Web stack",
          },
        ]}
      />
    </PageShell>
  );
}

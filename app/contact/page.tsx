import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import Contact from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("contact");

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/contact",
          name: "Contact ZentiaTech",
          description: "Contact ZentiaTech (Zentia Tech).",
          type: "ContactPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Contact ZentiaTech"
        description="Reach ZentiaTech (Zentia Tech) for software development, web applications, mobile apps, and AI project inquiries."
      />
      <Contact showHeading={false} className="!pt-0" />
      <RelatedLinks
        links={[
          {
            href: "/iletisim",
            label: "İletişim (Türkçe)",
            description: "Türkçe iletişim formu",
          },
          {
            href: "/services",
            label: "Services",
            description: "What Zentia Tech builds",
          },
          {
            href: "/about-zentiatech",
            label: "What is ZentiaTech?",
            description: "Brand guide",
          },
        ]}
      />
    </PageShell>
  );
}

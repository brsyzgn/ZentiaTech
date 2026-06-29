import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData from "@/components/PageStructuredData";
import Contact from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHeader
        title="Contact ZentiaTech | Zentia Tech"
        description="Reach ZentiaTech (Zentia Tech) for software development, web applications, mobile apps, and AI project inquiries."
      />
      <Contact showHeading={false} className="!pt-0" />
    </PageShell>
  );
}

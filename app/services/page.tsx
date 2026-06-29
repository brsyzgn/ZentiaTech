import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData from "@/components/PageStructuredData";
import ServicesGrid from "@/components/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("services");

export default function ServicesPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHeader
        title="ZentiaTech Services | Zentia Tech"
        description="Zentia Tech provides web development, mobile apps, AI solutions, e-commerce, and custom software through ZentiaTech."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (Zentia Tech) offers end-to-end software development services. At ZentiaTech, we build modern software solutions tailored to your business goals.",
          "Zentia Tech provides web and mobile development, AI-powered automation, e-commerce platforms, UI/UX design, and enterprise integrations. Every project is engineered for performance, security, and growth.",
          "Explore our detailed Turkish services page for case-specific offerings, or contact ZentiaTech to discuss your next digital product.",
        ]}
        links={[
          { href: "/hizmetler", label: "Hizmetler (Türkçe)" },
          { href: "/contact", label: "Contact ZentiaTech" },
        ]}
      />
      <section className="section-padding !pt-0 bg-white">
        <div className="container-custom">
          <ServicesGrid />
        </div>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import ServicesGrid from "@/components/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("services");

const serviceFaq = [
  {
    question: "What software services does ZentiaTech offer?",
    answer:
      "ZentiaTech (Zentia Tech) offers web development, mobile apps, AI solutions, e-commerce, UI/UX design, and custom enterprise software.",
  },
  {
    question: "Is Zentia Tech a software development company?",
    answer:
      "Yes. Zentia Tech is the spaced brand form of ZentiaTech, a software development and digital transformation company.",
  },
];

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        faq={serviceFaq}
        webPage={{
          path: "/services",
          name: "Software Development | ZentiaTech",
          description: "Software development services by Zentia Tech.",
        }}
        service={{
          name: "ZentiaTech Software Development",
          description:
            "Web, mobile, AI and enterprise software by ZentiaTech.",
          path: "/services",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Software Development | ZentiaTech"
        description="Zentia Tech provides web development, mobile apps, AI solutions, e-commerce, and custom software through ZentiaTech."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (Zentia Tech) offers end-to-end software development services. At ZentiaTech, we build modern software solutions tailored to your business goals.",
          "Zentia Tech provides web and mobile development, AI-powered automation, e-commerce platforms, UI/UX design, and enterprise integrations.",
          "Explore dedicated pages for Zentia Web and ZentiaTech AI, or contact our team to discuss your next digital product.",
        ]}
        links={[
          { href: "/web", label: "Web Development" },
          { href: "/ai", label: "AI Solutions" },
          { href: "/hizmetler", label: "Hizmetler (Türkçe)" },
          { href: "/contact", label: "Contact ZentiaTech" },
        ]}
        faq={serviceFaq}
      />
      <section className="section-padding !pt-0 bg-white">
        <div className="container-custom">
          <h2 className="mb-8 text-2xl font-bold text-navy">
            ZentiaTech service areas
          </h2>
          <ServicesGrid />
        </div>
      </section>
      <RelatedLinks
        links={[
          {
            href: "/web",
            label: "Web Development",
            description: "Zentia Web engineering",
          },
          {
            href: "/ai",
            label: "AI Solutions",
            description: "ZentiaTech AI",
          },
          {
            href: "/careers",
            label: "Careers",
            description: "Join Zentia Tech",
          },
        ]}
      />
    </PageShell>
  );
}

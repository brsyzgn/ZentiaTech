import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import About from "@/components/About";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("about");

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/about",
          name: "About ZentiaTech | Zentia Tech Software Company",
          description: "About ZentiaTech (Zentia Tech).",
          type: "AboutPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="About ZentiaTech | Zentia Tech Software Company"
        description="ZentiaTech (Zentia Tech) is a software development company delivering web, mobile, AI, and digital transformation solutions."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech, also known as Zentia Tech, is a software company and technology company helping organizations modernize their digital stack.",
          "Zentia Tech provides web and mobile development services for companies that need reliable, scalable products. ZentiaTech teams work across frontend, backend, cloud infrastructure, and AI integration.",
          "From İstanbul, Türkiye, ZentiaTech supports corporate clients with custom software, UI/UX design, and ongoing technical support.",
        ]}
        links={[
          { href: "/about-zentiatech", label: "What is ZentiaTech?" },
          { href: "/hakkimizda", label: "Hakkımızda (Türkçe)" },
          { href: "/careers", label: "Careers at Zentia Tech" },
        ]}
      />
      <About showHeading={false} className="!pt-0" />
      <RelatedLinks
        links={[
          {
            href: "/services",
            label: "Services",
            description: "Software development by ZentiaTech",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Talk to Zentia Tech",
          },
          {
            href: "/blog",
            label: "Blog",
            description: "Insights from ZentiaTech",
          },
        ]}
      />
    </PageShell>
  );
}

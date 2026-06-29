import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData from "@/components/PageStructuredData";
import About from "@/components/About";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageHeader
        title="About ZentiaTech | Zentia Tech"
        description="ZentiaTech (Zentia Tech) is a software development company delivering web, mobile, AI, and digital transformation solutions."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech and Zentia Tech represent the same software company. We use both brand spellings so customers can find us whether they search with or without a space.",
          "Zentia Tech provides web and mobile development services for companies that need reliable, scalable digital products. ZentiaTech teams work across frontend, backend, cloud infrastructure, and AI integration.",
          "From Istanbul, Turkey, ZentiaTech supports corporate clients with custom software, UI/UX design, and ongoing technical support. Learn more on our Turkish about page or contact our team to start a project.",
        ]}
        links={[
          { href: "/about-zentiatech", label: "What is ZentiaTech?" },
          { href: "/hakkimizda", label: "Hakkımızda (Türkçe)" },
          { href: "/careers", label: "Careers at Zentia Tech" },
        ]}
      />
      <About showHeading={false} className="!pt-0" />
    </PageShell>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("ai");

const aiFaq = [
  {
    question: "Does ZentiaTech offer AI solutions?",
    answer:
      "Yes. ZentiaTech AI (also searched as Zentia AI) builds machine learning products, automation, and intelligent software for enterprises.",
  },
  {
    question: "Is Zentia AI the same company as ZentiaTech?",
    answer:
      "Yes. Zentia AI refers to artificial intelligence services from ZentiaTech, also known as Zentia Tech.",
  },
];

export default function AiPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "AI Solutions", path: "/ai" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        faq={aiFaq}
        webPage={{
          path: "/ai",
          name: "Artificial Intelligence Solutions | ZentiaTech",
          description:
            "ZentiaTech AI and Zentia AI solutions for enterprises.",
          type: "WebPage",
        }}
        service={{
          name: "ZentiaTech AI Solutions",
          description:
            "Custom AI, machine learning, and intelligent automation by Zentia Tech.",
          path: "/ai",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Artificial Intelligence Solutions | ZentiaTech"
        description="ZentiaTech AI and Zentia AI: machine learning, automation, and intelligent products built by Zentia Tech for modern enterprises."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech builds artificial intelligence solutions that solve real operational problems — not slide decks. Our AI practice, often searched as Zentia AI, helps companies automate decisions, enrich products, and unlock data.",
          "At ZentiaTech, we design models, APIs, and secure pipelines. Zentia Tech AI teams focus on measurable outcomes: faster workflows, better recommendations, and reliable production systems.",
          "From NLP and computer vision to internal copilots, ZentiaTech AI integrates with your existing software stack. Talk to Zentia Tech about a discovery workshop or a full delivery engagement.",
        ]}
        links={[
          { href: "/services", label: "All ZentiaTech services" },
          { href: "/web", label: "Web development" },
          { href: "/contact", label: "Contact Zentia Tech" },
          { href: "/blog/ai-solutions-for-enterprises", label: "AI blog article" },
        ]}
        faq={aiFaq}
      />
      <RelatedLinks
        title="Related ZentiaTech pages"
        links={[
          {
            href: "/services",
            label: "Software Development",
            description: "Full-stack services from Zentia Tech",
          },
          {
            href: "/about-zentiatech",
            label: "What is ZentiaTech?",
            description: "Brand guide for ZentiaTech and Zentia Tech",
          },
          {
            href: "/blog",
            label: "Blog",
            description: "Insights from the ZentiaTech team",
          },
        ]}
      />
    </PageShell>
  );
}

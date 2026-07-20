import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("web");

const webFaq = [
  {
    question: "Does ZentiaTech build websites?",
    answer:
      "Yes. ZentiaTech (Zentia Web / Zentia Tech) builds corporate websites, product frontends, and SEO-ready web applications.",
  },
  {
    question: "What stack does Zentia Tech use for web development?",
    answer:
      "ZentiaTech typically ships modern stacks such as Next.js, TypeScript, and performance-first delivery focused on Core Web Vitals.",
  },
];

export default function WebPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Web Development", path: "/web" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        faq={webFaq}
        webPage={{
          path: "/web",
          name: "Web Development | ZentiaTech",
          description: "Zentia Web development by ZentiaTech.",
        }}
        service={{
          name: "ZentiaTech Web Development",
          description:
            "Corporate websites and scalable web apps by Zentia Tech.",
          path: "/web",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Web Development | ZentiaTech"
        description="Zentia Web and ZentiaTech web development: fast, accessible, SEO-ready corporate sites and scalable applications from Zentia Tech."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech designs and builds modern web experiences for brands that need speed, clarity, and search visibility. Our web practice — often called Zentia Web — covers marketing sites, portals, and product UIs.",
          "At ZentiaTech, performance and SEO are part of delivery, not afterthoughts. Zentia Tech engineers optimize LCP, CLS, structured data, and semantic HTML so pages load fast and communicate brand authority.",
          "Whether you need a redesign or a greenfield Next.js platform, ZentiaTech web teams ship maintainable code with long-term support.",
        ]}
        links={[
          { href: "/ai", label: "AI Solutions" },
          { href: "/hizmetler", label: "Hizmetler (Türkçe)" },
          { href: "/contact", label: "Contact ZentiaTech" },
          {
            href: "/blog/modern-web-development-stack",
            label: "Web development article",
          },
        ]}
        faq={webFaq}
      />
      <RelatedLinks
        links={[
          {
            href: "/services",
            label: "All services",
            description: "Software development by Zentia Tech",
          },
          {
            href: "/ai",
            label: "AI Solutions",
            description: "ZentiaTech AI and machine learning",
          },
          {
            href: "/projeler",
            label: "Projects",
            description: "Selected ZentiaTech work",
          },
        ]}
      />
    </PageShell>
  );
}

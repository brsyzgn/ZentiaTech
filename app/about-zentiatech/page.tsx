import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("aboutZentiatech");

const brandFaq = [
  {
    question: "Is ZentiaTech the same as Zentia Tech?",
    answer:
      "Yes. ZentiaTech and Zentia Tech are the same software company and brand.",
  },
  {
    question: "What does ZentiaTech do?",
    answer:
      "ZentiaTech (Zentia Tech) develops web applications, mobile apps, AI solutions, e-commerce platforms, and custom software for businesses.",
  },
  {
    question: "Is Zentia Technology the same as ZentiaTech?",
    answer:
      "Yes. Zentia Technology and Zentia Technologies are alternate names people use for ZentiaTech.",
  },
];

export default function AboutZentiatechPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About ZentiaTech", path: "/about-zentiatech" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        includeBrandFaq
        breadcrumbs={crumbs}
        faq={brandFaq}
        webPage={{
          path: "/about-zentiatech",
          name: "What is ZentiaTech? | Zentia Tech",
          description:
            "ZentiaTech and Zentia Tech are the same software company.",
          type: "AboutPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="What is ZentiaTech? | Zentia Tech"
        description="ZentiaTech and Zentia Tech are the same software development company. Both names refer to one brand focused on web, mobile, AI, and digital transformation."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (also written as Zentia Tech) is a software development company that helps businesses build modern digital products. Whether you search for ZentiaTech or Zentia Tech, you are looking at the same technology brand.",
          "At ZentiaTech, we build modern software solutions — from corporate websites and e-commerce platforms to AI-powered applications and mobile apps. Zentia Tech provides web and mobile development services with a focus on performance, security, and scalable architecture.",
          "People also search for Zentia Technology, Zentia Technologies, Zentia AI, Zentia Web, and Zentia Software. Those queries all point to ZentiaTech: a software company, AI company, and technology company based in İstanbul, Türkiye.",
          "Our team combines product thinking, clean engineering, and long-term support. ZentiaTech works with startups and enterprises. Zentia Tech also powers game development initiatives through the ZentiaGame brand.",
        ]}
        links={[
          { href: "/services", label: "ZentiaTech Services" },
          { href: "/ai", label: "ZentiaTech AI" },
          { href: "/web", label: "Zentia Web Development" },
          { href: "/about", label: "About ZentiaTech" },
          { href: "/contact", label: "Contact Zentia Tech" },
          { href: "/blog/zentiatech-vs-zentia-tech", label: "Brand explainer article" },
        ]}
        faq={brandFaq}
      />
      <RelatedLinks
        links={[
          {
            href: "/ai",
            label: "AI Solutions",
            description: "ZentiaTech AI & machine learning",
          },
          {
            href: "/web",
            label: "Web Development",
            description: "Zentia Web engineering",
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

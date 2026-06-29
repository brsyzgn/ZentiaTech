import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SeoContentSection from "@/components/SeoContentSection";
import PageStructuredData from "@/components/PageStructuredData";
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
];

export default function AboutZentiatechPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About ZentiaTech", path: "/about-zentiatech" },
        ]}
      />
      <PageHeader
        title="What is ZentiaTech? | Zentia Tech"
        description="ZentiaTech and Zentia Tech are the same software development company. Both names refer to one brand focused on web, mobile, AI, and digital transformation."
      />
      <SeoContentSection
        paragraphs={[
          "ZentiaTech (also written as Zentia Tech) is a software development company that helps businesses build modern digital products. Whether you search for ZentiaTech or Zentia Tech, you are looking at the same technology brand.",
          "At ZentiaTech, we build modern software solutions — from corporate websites and e-commerce platforms to AI-powered applications and mobile apps. Zentia Tech provides web and mobile development services with a focus on performance, security, and scalable architecture.",
          "Our team combines product thinking, clean engineering, and long-term support. ZentiaTech works with startups and enterprises across Turkey and international markets. Zentia Tech also powers game development initiatives through the ZentiaGame brand.",
          "If you found this page while searching for ZentiaTech, Zentia Tech, or Zentia Technology, you are in the right place. Visit our services, contact our team, or explore Turkish pages for detailed project information.",
        ]}
        links={[
          { href: "/services", label: "ZentiaTech Services" },
          { href: "/about", label: "About ZentiaTech" },
          { href: "/contact", label: "Contact Zentia Tech" },
          { href: "/hizmetler", label: "Hizmetler (Türkçe)" },
          { href: "/iletisim", label: "İletişim (Türkçe)" },
        ]}
        faq={brandFaq}
      />
    </PageShell>
  );
}

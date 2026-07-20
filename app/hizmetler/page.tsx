import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import ServicesGrid from "@/components/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hizmetler");

const faq = [
  {
    question: "ZentiaTech hangi hizmetleri sunar?",
    answer:
      "ZentiaTech (Zentia Tech) kurumsal web, e-ticaret, yapay zeka, mobil uygulama, UI/UX ve özel yazılım hizmetleri sunar.",
  },
  {
    question: "Zentia Tech ile ZentiaTech aynı şirket mi?",
    answer:
      "Evet. ZentiaTech ve Zentia Tech aynı yazılım şirketidir.",
  },
];

export default function HizmetlerPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        faq={faq}
        webPage={{
          path: "/hizmetler",
          name: "Hizmetler | ZentiaTech",
          description: "ZentiaTech yazılım hizmetleri",
        }}
        service={{
          name: "ZentiaTech Yazılım Hizmetleri",
          description: "Web, AI, mobil ve özel yazılım — Zentia Tech",
          path: "/hizmetler",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Hizmetler | ZentiaTech Yazılım & AI"
        description="ZentiaTech (Zentia Tech) kurumsal web site geliştirme, e-ticaret, yapay zeka destekli yazılım, mobil uygulama, UI UX tasarım ve oyun geliştirme alanlarında uçtan uca teknoloji çözümleri sunar."
      />
      <section className="section-padding bg-white pt-0">
        <div className="container-custom">
          <ServicesGrid animateOnMount />
        </div>
      </section>
      <RelatedLinks
        title="İlgili sayfalar"
        links={[
          {
            href: "/services",
            label: "Services (English)",
            description: "ZentiaTech software development",
          },
          {
            href: "/ai",
            label: "AI Solutions",
            description: "ZentiaTech AI",
          },
          {
            href: "/web",
            label: "Web Development",
            description: "Zentia Web",
          },
        ]}
      />
    </PageShell>
  );
}

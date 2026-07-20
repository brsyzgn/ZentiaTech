import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import Contact from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("iletisim");

export default function IletisimPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/iletisim",
          name: "İletişim | ZentiaTech",
          description: "ZentiaTech ile iletişime geçin",
          type: "ContactPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="İletişim | ZentiaTech Teklif Alın"
        description="ZentiaTech (Zentia Tech) ile projenizi planlayın. Web, e-ticaret, yapay zeka ve mobil uygulama projeleri için teklif alın."
      />
      <Contact showHeading={false} className="!pt-0" />
      <RelatedLinks
        title="İlgili sayfalar"
        links={[
          {
            href: "/contact",
            label: "Contact (English)",
            description: "Contact Zentia Tech",
          },
          {
            href: "/hizmetler",
            label: "Hizmetler",
            description: "ZentiaTech hizmetleri",
          },
          {
            href: "/about-zentiatech",
            label: "ZentiaTech Nedir?",
            description: "Marka bilgisi",
          },
        ]}
      />
    </PageShell>
  );
}

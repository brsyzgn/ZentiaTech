import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import About from "@/components/About";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hakkimizda");

export default function HakkimizdaPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/hakkimizda",
          name: "Hakkımızda | ZentiaTech",
          description: "ZentiaTech (Zentia Tech) hakkında",
          type: "AboutPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Hakkımızda | ZentiaTech Yazılım Şirketi"
        description="ZentiaTech (Zentia Tech), dijital dönüşüm odaklı yazılım şirketi olarak web, mobil, yapay zeka ve kurumsal teknoloji çözümleri geliştirir."
      />
      <About showHeading={false} className="!pt-0" />
      <RelatedLinks
        title="İlgili sayfalar"
        links={[
          {
            href: "/about",
            label: "About (English)",
            description: "About Zentia Tech",
          },
          {
            href: "/about-zentiatech",
            label: "ZentiaTech Nedir?",
            description: "Marka rehberi",
          },
          {
            href: "/careers",
            label: "Careers",
            description: "ZentiaTech kariyer",
          },
        ]}
      />
    </PageShell>
  );
}

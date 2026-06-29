import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData from "@/components/PageStructuredData";
import ServicesGrid from "@/components/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hizmetler");

export default function HizmetlerPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ]}
      />
      <PageHeader
        title="ZentiaTech & Zentia Tech Hizmetleri"
        description="ZentiaTech (Zentia Tech) kurumsal web site geliştirme, e-ticaret, yapay zeka destekli yazılım, mobil uygulama, UI UX tasarım ve oyun geliştirme alanlarında uçtan uca teknoloji çözümleri sunar."
      />
      <section className="section-padding bg-white pt-0">
        <div className="container-custom">
          <ServicesGrid animateOnMount />
        </div>
      </section>
    </PageShell>
  );
}

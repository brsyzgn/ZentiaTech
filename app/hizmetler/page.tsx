import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hizmetler");

export default function HizmetlerPage() {
  return (
    <PageShell>
      <PageHeader
        title="Profesyonel Yazılım ve Dijital Ürün Hizmetleri"
        description="Kurumsal web site geliştirme, e-ticaret sitesi kurulumu, yapay zeka destekli yazılım, mobil uygulama geliştirme, UI UX tasarım ve oyun geliştirme alanlarında uçtan uca teknoloji çözümleri sunuyoruz."
      />
      <section className="section-padding bg-white pt-0">
        <div className="container-custom">
          <ServicesGrid animateOnMount />
        </div>
      </section>
    </PageShell>
  );
}

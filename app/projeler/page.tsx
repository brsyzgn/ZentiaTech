import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import ZentiaNexus from "@/components/ZentiaNexus";
import Dietiya from "@/components/Dietiya";
import Projects from "@/components/Projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("projeler");

export default function ProjelerPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Projeler", path: "/projeler" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/projeler",
          name: "Projeler | ZentiaTech",
          description: "ZentiaTech dijital başarı hikayeleri",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Projeler | ZentiaTech Dijital Başarılar"
        description="ZentiaTech (Zentia Tech) kurumsal yazılım, profesyonel web sitesi, yapay zeka uygulamaları ve özel yazılım çözümleri geliştirir."
      />
      <section className="bg-white py-12">
        <div className="container-custom max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">
            ZentiaTech — Kurumsal Teknoloji Projeleri
          </h2>
          <p className="mt-4 text-base leading-relaxed text-soft-navy/80">
            Zentia Tech web geliştirme, e-ticaret altyapıları, yapay zeka
            destekli yazılım ve mobil uygulama geliştirme projelerinde
            ölçeklenebilir mimari, güvenli altyapı ve uzun vadeli destek
            sunuyoruz.
          </p>
          <p className="mt-4">
            <Link
              href="/hizmetler"
              className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Hizmetlerimizi inceleyin →
            </Link>
          </p>
        </div>
      </section>
      <ZentiaNexus />
      <Dietiya />
      <Projects showHeading={false} />
    </PageShell>
  );
}

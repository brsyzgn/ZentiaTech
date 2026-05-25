import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("projeler");

export default function ProjelerPage() {
  return (
    <PageShell>
      <PageHeader
        title="Dijital Başarı Hikayelerimiz"
        description="ZentiaTech; kurumsal yazılım, profesyonel web sitesi, yapay zeka uygulamaları ve özel yazılım çözümleri geliştirir. Oyun ve interaktif deneyim projeleri ZentiaGame markasıyla yürütülür."
      />
      <section className="bg-white py-12">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-navy">
            ZentiaTech — Kurumsal Teknoloji Projeleri
          </h2>
          <p className="mt-4 text-base leading-relaxed text-soft-navy/80">
            Web geliştirme, e-ticaret altyapıları, yapay zeka destekli yazılım
            ve mobil uygulama geliştirme projelerinde ölçeklenebilir mimari,
            güvenli altyapı ve uzun vadeli destek sunuyoruz. Her proje; iş
            hedeflerinize uygun, ölçülebilir ve sürdürülebilir teknoloji
            çözümleri olarak tasarlanır.
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
      <Projects showHeading={false} />
    </PageShell>
  );
}

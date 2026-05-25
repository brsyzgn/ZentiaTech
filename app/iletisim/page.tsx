import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("iletisim");

export default function IletisimPage() {
  return (
    <PageShell>
      <PageHeader
        title="Bizimle İletişime Geçin"
        description="Projenizi dijital ürüne dönüştürmek için ZentiaTech ekibiyle iletişime geçin. Teklif alın, ihtiyaçlarınızı paylaşın."
      />
      <Contact showHeading={false} className="!pt-0" />
    </PageShell>
  );
}

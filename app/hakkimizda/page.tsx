import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hakkimizda");

export default function HakkimizdaPage() {
  return (
    <PageShell>
      <PageHeader
        title="ZentiaTech Hakkında"
        description="Dijital dönüşüm odaklı yazılım şirketi olarak web, mobil, yapay zeka ve kurumsal teknoloji çözümleri geliştiriyoruz."
      />
      <About showHeading={false} className="!pt-0" />
    </PageShell>
  );
}

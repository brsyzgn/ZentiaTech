import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData from "@/components/PageStructuredData";
import About from "@/components/About";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("hakkimizda");

export default function HakkimizdaPage() {
  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />
      <PageHeader
        title="ZentiaTech & Zentia Tech Hakkında"
        description="ZentiaTech (Zentia Tech), dijital dönüşüm odaklı yazılım şirketi olarak web, mobil, yapay zeka ve kurumsal teknoloji çözümleri geliştirir."
      />
      <About showHeading={false} className="!pt-0" />
    </PageShell>
  );
}

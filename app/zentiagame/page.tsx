import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Users, Zap, Box, Layers } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { zentiaGameTheme } from "@/lib/zentiagame-theme";

export const metadata: Metadata = buildMetadata("zentiagame");

const { accent, accentGlow, overlay, mesh } = zentiaGameTheme;

const features = [
  { icon: Users, text: "Çok oyunculu altyapı ve sunucu mimarisi" },
  { icon: Zap, text: "Gerçek zamanlı eşleştirme sistemleri" },
  { icon: Box, text: "Unity, WebGL ve çapraz platform desteği" },
  { icon: Layers, text: "Ölçeklenebilir oyun backend çözümleri" },
];

export default function ZentiaGamePage() {
  return (
    <PageShell>
      <div className="relative overflow-hidden" style={{ backgroundColor: zentiaGameTheme.bg }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px]" />

        <PageHeader
          dark
          accent
          title="ZentiaGame — Oyun Geliştirme ve İnteraktif Deneyimler"
          description="ZentiaGame, ZentiaTech'in oyun geliştirme şirketi markasıdır. Mobil, web ve çok oyunculu oyun projeleri, interaktif deneyimler ve dijital eğlence ürünleri geliştirir."
        />

        <section className="section-padding relative pt-0">
          <div className="container-custom">
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[rgba(15,23,42,0.75)] shadow-2xl backdrop-blur-xl">
              <div className="grid lg:grid-cols-2">
                <article className="relative z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <span
                      className="inline-block rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md"
                      style={{
                        borderColor: `${accent}50`,
                        backgroundColor: `${accent}20`,
                        color: "#fff",
                      }}
                    >
                      Oyun Teknolojileri
                    </span>

                    <div className="mt-6 flex items-center gap-3">
                      <Gamepad2
                        size={32}
                        className="text-white/90"
                        strokeWidth={1.25}
                        aria-hidden
                      />
                      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Oyun Geliştirme Uzmanlığı
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6">
                    <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                      Oyun geliştirme şirketi olarak mobil ve web tabanlı oyunlar,
                      interaktif deneyimler ve çok oyunculu sistemler tasarlıyoruz.
                      Performans, kullanıcı deneyimi ve ölçeklenebilir altyapıyı
                      birlikte ele alıyoruz.
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {features.map((item) => (
                        <li
                          key={item.text}
                          className="flex items-center gap-2.5 text-xs text-white/80 sm:text-sm"
                        >
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                            style={{ color: accent }}
                          >
                            <item.icon size={14} strokeWidth={1.5} aria-hidden />
                          </span>
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/iletisim"
                      className="btn-glow group/btn mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 4px 24px ${accentGlow}`,
                      }}
                    >
                      Oyun Projenizi Konuşalım
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80"
                    alt="ZentiaGame oyun geliştirme ve interaktif deneyim projeleri"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
                  <div className={`absolute inset-0 ${mesh}`} />
                </div>
              </div>
            </div>

            <p className="mt-12 text-center text-sm text-white/50">
              Kurumsal yazılım ve web projeleri için{" "}
              <Link
                href="/"
                className="font-semibold transition-colors hover:text-white"
                style={{ color: accent }}
              >
                ZentiaTech ana sayfasını
              </Link>{" "}
              ziyaret edin.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

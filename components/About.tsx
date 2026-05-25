"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";

const highlights = [
  "Ölçeklenebilir mimari",
  "Agile proje yönetimi",
  "7/24 teknik destek",
];

interface AboutProps {
  showHeading?: boolean;
  className?: string;
}

export default function About({
  showHeading = true,
  className = "",
}: AboutProps) {
  const reveal = getRevealProps(!showHeading);

  return (
    <section
      id="hakkimizda"
      className={`section-padding bg-white ${className}`}
    >
      <div className="container-custom">
        {showHeading ? (
          <SectionHeading
            tag="Hakkımızda"
            title="Dijital Dönüşümün Güvenilir Ortağı"
            description="ZentiaTech, kurumsal web tasarım ve özel yazılım çözümleriyle işletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji partneridir."
          />
        ) : (
          <h2 className="sr-only">Dijital Dönüşümün Güvenilir Ortağı</h2>
        )}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div variants={slideInLeft} {...reveal}>
            <p className="text-base leading-relaxed text-soft-navy/80 sm:text-lg">
              ZentiaTech, profesyonel web sitesi geliştirme, e-ticaret sitesi
              kurulumu, yapay zeka destekli yazılım, mobil uygulama geliştirme
              ve UI UX tasarım alanlarında uçtan uca hizmet veren bir yazılım
              şirketidir. Kurumsal müşterilerimize ölçeklenebilir, güvenli ve
              sürdürülebilir teknoloji çözümleri sunarak dijital dönüşüm
              hedeflerini ölçülebilir sonuçlara dönüştürüyoruz. Oyun
              geliştirme ve interaktif deneyim projelerimiz ise ZentiaGame
              markası altında yürütülür.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-navy"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-medium text-navy sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Full-Stack</p>
                  <p className="text-xs text-soft-navy/60">Geliştirme</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Hızlı Teslimat</p>
                  <p className="text-xs text-soft-navy/60">Agile metodoloji</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} {...reveal} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-soft-navy to-dark-navy p-8 shadow-2xl shadow-navy/20 lg:p-12">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="glass-dark rounded-2xl p-6">
                  <p className="text-3xl font-bold text-white lg:text-4xl">
                    ZentiaTech
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Innovation Through Technology
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Web", value: "Next.js" },
                    { label: "Mobil", value: "React Native" },
                    { label: "AI", value: "Python" },
                    { label: "Cloud", value: "AWS" },
                  ].map((tech) => (
                    <div
                      key={tech.label}
                      className="rounded-xl bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <p className="text-xs text-white/50">{tech.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {tech.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-xs text-white/60">
                    Aktif projeler geliştiriliyor
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

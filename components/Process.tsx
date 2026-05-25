"use client";

import { motion } from "framer-motion";
import {
  Search,
  Map,
  Layout,
  Code2,
  Gauge,
  Rocket,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ACCENT = "#0B132B";

const steps = [
  {
    icon: Search,
    title: "Keşif & Analiz",
    description:
      "Müşteri hedeflerini, ihtiyaçlarını ve proje kapsamını netleştiriyoruz.",
  },
  {
    icon: Map,
    title: "Strateji & Planlama",
    description:
      "Teknik mimariyi, kullanıcı akışlarını ve geliştirme yol haritasını oluşturuyoruz.",
  },
  {
    icon: Layout,
    title: "UI/UX Tasarım",
    description:
      "Modern, kullanıcı dostu ve markaya özel arayüz tasarımları hazırlıyoruz.",
  },
  {
    icon: Code2,
    title: "Yazılım Geliştirme",
    description:
      "Frontend, backend, API ve entegrasyon süreçlerini temiz kod prensipleriyle geliştiriyoruz.",
  },
  {
    icon: Gauge,
    title: "Test & Optimizasyon",
    description:
      "Performans, güvenlik, mobil uyumluluk ve kullanıcı deneyimi testlerini tamamlıyoruz.",
  },
  {
    icon: Rocket,
    title: "Yayın & Destek",
    description:
      "Projeyi canlıya alıyor, bakım, güncelleme ve teknik destek süreçlerini sürdürüyoruz.",
  },
];

function StepContent({ step }: { step: (typeof steps)[number] }) {
  const Icon = step.icon;

  return (
    <div className="group max-w-[200px] text-center">
      <div className="mb-3 flex justify-center">
        <Icon
          size={20}
          strokeWidth={1.5}
          className="text-[#0B132B]/40 transition-colors duration-300 group-hover:text-[#0B132B]/70"
        />
      </div>
      <h3 className="text-sm font-bold tracking-tight text-[#0B132B] sm:text-[15px]">
        {step.title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-soft-navy/65 sm:text-[13px]">
        {step.description}
      </p>
    </div>
  );
}

function TimelineCircle({ index }: { index: number }) {
  return (
    <div className="group/node relative z-10 flex flex-col items-center">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0B132B]/15 bg-white text-sm font-bold text-[#0B132B] shadow-sm transition-all duration-300 group-hover/node:border-[#0B132B] group-hover/node:bg-[#0B132B] group-hover/node:text-white group-hover/node:shadow-lg group-hover/node:shadow-[#0B132B]/20 sm:h-16 sm:w-16 sm:text-base"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section
      id="surec"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(11,19,43,0.04),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(11,19,43,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,19,43,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-navy/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-soft-navy/[0.04] blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <span className="mb-4 inline-block rounded-full border border-[#0B132B]/10 bg-[#0B132B]/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#0B132B] uppercase">
            Süreç
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-soft-navy/75 sm:text-lg">
            Fikir aşamasından yayına ve sonrasına kadar; kurumsal web tasarım,
            mobil uygulama ve özel yazılım projelerinizi planlı, şeffaf ve
            ölçülebilir adımlarla geliştiriyoruz.
          </p>
        </motion.div>

        {/* Desktop — horizontal timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative hidden lg:block"
        >
          <div
            className="absolute top-1/2 right-[4%] left-[4%] h-px -translate-y-1/2"
            style={{ backgroundColor: `${ACCENT}18` }}
          />

          <div className="relative flex justify-between gap-2 px-2">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="flex flex-1 flex-col items-center"
                  style={{ minHeight: "300px" }}
                >
                  {isEven ? (
                    <>
                      <div className="flex min-h-[130px] items-end justify-center pb-10">
                        <StepContent step={step} />
                      </div>
                      <TimelineCircle index={index} />
                      <div className="min-h-[130px]" />
                    </>
                  ) : (
                    <>
                      <div className="min-h-[130px]" />
                      <TimelineCircle index={index} />
                      <div className="flex min-h-[130px] items-start justify-center pt-10">
                        <StepContent step={step} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile — vertical timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative mx-auto max-w-lg lg:hidden"
        >
          <div
            className="absolute top-4 bottom-4 left-7 w-px"
            style={{ backgroundColor: `${ACCENT}20` }}
          />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="group relative flex gap-6 pl-2"
                >
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0B132B]/15 bg-white text-sm font-bold text-[#0B132B] shadow-sm transition-all duration-300 group-hover:border-[#0B132B] group-hover:bg-[#0B132B] group-hover:text-white"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  <div className="pt-2 pb-2">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#0B132B]/45"
                      />
                      <h3 className="text-base font-bold text-[#0B132B]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-soft-navy/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

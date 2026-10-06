"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gamepad2,
  Users,
  Zap,
  Box,
  Layers,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";
import { zentiaGameTheme } from "@/lib/zentiagame-theme";
import { PRODUCT_CARD_FRAME } from "./ProductVisualCard";

const showcases = [
  {
    badge: "Oyun Teknolojileri",
    name: "ZentiaGame",
    description:
      "ZentiaGame; ZentiaTech'in oyun geliştirme şirketi markasıdır. Mobil, web ve çok oyunculu oyun sistemleri, interaktif deneyimler ve dijital eğlence projeleri geliştirir.",
    features: [
      { icon: Users, text: "Çok Oyunculu Altyapı" },
      { icon: Zap, text: "Gerçek Zamanlı Eşleştirme" },
      { icon: Box, text: "Unity ve WebGL Desteği" },
      { icon: Layers, text: "Çapraz Platform Mimari" },
    ],
    cta: "ZentiaGame'i Keşfet",
    ctaHref: "/zentiagame",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "ZentiaGame — ZentiaTech (Zentia Tech) game development and interactive experiences",
    ...zentiaGameTheme,
  },
];

const particles = [
  { top: "12%", left: "8%", size: 4, delay: 0 },
  { top: "28%", left: "85%", size: 3, delay: 0.4 },
  { top: "65%", left: "15%", size: 5, delay: 0.8 },
  { top: "78%", left: "72%", size: 3, delay: 1.2 },
  { top: "45%", left: "50%", size: 2, delay: 0.6 },
  { top: "18%", left: "62%", size: 3, delay: 1 },
];

function ShowcaseCard({
  project,
}: {
  project: (typeof showcases)[number];
}) {
  return (
    <motion.article
      variants={fadeInUp}
      className={`group ${PRODUCT_CARD_FRAME} border border-white/[0.08] bg-[rgba(15,23,42,0.75)] shadow-2xl backdrop-blur-xl lg:aspect-[3/2] lg:transition-transform lg:duration-300 lg:hover:-translate-y-1 lg:hover:scale-[1.01]`}
    >
      {/* Hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 1px ${project.accent}40, 0 0 40px ${project.accentGlow}, inset 0 0 60px ${project.accentGlow}`,
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover lg:transition-transform lg:duration-700 lg:group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.overlay}`} />
        <div className={`absolute inset-0 ${project.mesh}`} />
      </div>

      {/* Floating UI panels — decorative */}
      <div className="pointer-events-none absolute top-8 right-8 hidden h-20 w-32 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md opacity-60 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:opacity-80 sm:block" />
      <div className="pointer-events-none absolute top-20 right-20 hidden h-14 w-24 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md opacity-40 transition-all duration-700 group-hover:translate-x-1 group-hover:opacity-60 sm:block" />

      {/* Content */}
      <div className="relative z-10 flex h-auto min-h-0 flex-col justify-between gap-4 p-4 sm:p-6 lg:h-full lg:gap-0 lg:p-8">
        <div className="min-w-0">
          <span
            className="inline-block rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md"
            style={{
              borderColor: `${project.accent}50`,
              backgroundColor: `${project.accent}20`,
              color: "#fff",
            }}
          >
            {project.badge}
          </span>

          <div className="mt-3 flex min-w-0 items-center gap-2.5 sm:mt-5 sm:gap-3">
            <Gamepad2
              size={28}
              className="shrink-0 text-white/90 sm:h-8 sm:w-8"
              strokeWidth={1.25}
            />
            <h3 className="min-w-0 text-xl font-bold tracking-tight break-words text-white sm:text-2xl lg:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>

        <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.09] sm:mt-6 sm:p-5">
          <p className="text-[13px] leading-relaxed break-words text-white/70 sm:text-sm lg:text-base">
            {project.description}
          </p>

          <ul className="mt-3 grid gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2.5">
            {project.features.map((feature) => (
              <li
                key={feature.text}
                className="flex min-w-0 items-center gap-2 text-[12px] text-white/80 sm:gap-2.5 sm:text-sm"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                  style={{ color: project.accent }}
                >
                  <feature.icon size={14} strokeWidth={1.5} />
                </span>
                <span className="min-w-0 leading-snug break-words">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href={project.ctaHref}
            className="btn-glow group/btn mt-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 4px 24px ${project.accentGlow}`,
            }}
          >
            {project.cta}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

interface ProjectsProps {
  showHeading?: boolean;
}

export default function Projects({ showHeading = true }: ProjectsProps) {
  const reveal = getRevealProps(!showHeading);

  return (
    <section
      id="projeler"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#050816" }}
    >
      {/* Ambient lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px]" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container-custom relative">
        {showHeading && (
          <motion.div
            variants={fadeInUp}
            {...getRevealProps(false)}
            className="mb-14 text-center lg:mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Dijital Başarı Hikayelerimiz
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              ZentiaTech (Zentia Tech) web, yapay zeka ve kurumsal yazılım
              projelerini geliştirir. Oyun geliştirme ve interaktif deneyimler
              ZentiaGame markasıyla sunulur.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          {...reveal}
          className="mx-auto w-full max-w-4xl"
        >
          {showcases.map((project) => (
            <ShowcaseCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

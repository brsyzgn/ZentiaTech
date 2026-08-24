"use client";

import { useRef, type MouseEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_VISUAL_SRC } from "@/lib/site-assets";
import { scrollToSection } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const ORBS = [
  { top: "12%", left: "8%", size: 180, color: "rgba(56,189,248,0.14)", delay: 0 },
  { top: "58%", left: "4%", size: 120, color: "rgba(167,139,250,0.12)", delay: 1.2 },
  { top: "18%", right: "6%", size: 140, color: "rgba(129,140,248,0.12)", delay: 0.6 },
  { top: "70%", right: "12%", size: 100, color: "rgba(34,211,238,0.1)", delay: 1.8 },
] as const;

const SPARKS = [
  { x: "18%", y: "22%", delay: 0 },
  { x: "32%", y: "14%", delay: 0.8 },
  { x: "72%", y: "18%", delay: 1.4 },
  { x: "86%", y: "34%", delay: 0.4 },
  { x: "12%", y: "62%", delay: 1.1 },
  { x: "78%", y: "68%", delay: 1.9 },
  { x: "48%", y: "78%", delay: 0.55 },
  { x: "62%", y: "12%", delay: 1.6 },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const visualScrollY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const visualParallaxX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const visualParallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(springX, [-0.5, 0.5], ["42%", "58%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["42%", "58%"]);
  const glowBg = useMotionTemplate`radial-gradient(ellipse 55% 45% at ${glowX} ${glowY}, rgba(56,189,248,0.22), transparent 70%)`;

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const goToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-stage relative min-h-screen min-h-[100dvh] overflow-hidden"
    >
      <div className="hero-stage-glow pointer-events-none" aria-hidden />
      <motion.div className="hero-stage-mouse-glow pointer-events-none" style={{ background: glowBg }} aria-hidden />
      <div className="hero-stage-grid pointer-events-none" aria-hidden />
      <div className="hero-stage-beams pointer-events-none" aria-hidden />
      <div className="hero-stage-particles pointer-events-none" aria-hidden />

      {ORBS.map((orb, i) => (
        <motion.span
          key={i}
          className="hero-orb"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{ y: [0, -22, 0], scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{
            duration: 7 + i,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}

      {SPARKS.map((spark, i) => (
        <motion.span
          key={`spark-${i}`}
          className="hero-spark"
          style={{ left: spark.x, top: spark.y }}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.25, 0.7] }}
          transition={{
            duration: 2.8 + (i % 3) * 0.4,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-screen min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-20"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 xl:gap-10">
          <div className="relative z-10 max-w-xl text-center lg:max-w-none lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease }}
              className="hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/90 uppercase shadow-[0_0_24px_rgba(56,189,248,0.12)] backdrop-blur-md lg:mx-0"
            >
              <span className="hero-badge-dot" aria-hidden />
              Web • Mobil • AI
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
              }}
              className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.4rem]"
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                }}
              >
                Yazılım, AI ve Dijital Dönüşüm
              </motion.span>
              <motion.span
                className="hero-gradient-text mt-1 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
              >
                Tek Çatı Altında.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease }}
              className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base lg:mx-0"
            >
              Modern yazılım çözümleri, yapay zeka destekli sistemler ve dijital
              dönüşüm hizmetleriyle markanızı geleceğe taşıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease }}
              className="relative z-30 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/#iletisim"
                scroll={false}
                onClick={goToSection("iletisim")}
                className="btn-glow hero-cta-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Teklif Al
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/hizmetler"
                className="btn-glow hero-cta-secondary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Hizmetlerimizi İncele
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-10 hidden items-center gap-6 text-left sm:flex lg:mt-12"
            >
              {[
                { label: "Web & Mobil", value: "Ürün" },
                { label: "AI Sistemleri", value: "Akıllı" },
                { label: "Dijital Dönüşüm", value: "Ölçek" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 + i * 0.1, duration: 0.55, ease }}
                  className="hero-stat"
                >
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300/70 uppercase">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: visualScrollY, x: visualParallaxX }}
            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.05, delay: 0.2, ease }}
            className="hero-visual-wrap relative mx-auto w-full max-w-md perspective-[1200px] sm:max-w-lg lg:max-w-none"
          >
            <div className="hero-visual-glow" aria-hidden />
            <div className="hero-ring hero-ring-a" aria-hidden />
            <div className="hero-ring hero-ring-b" aria-hidden />
            <div className="hero-ring hero-ring-c" aria-hidden />

            <motion.div
              style={{
                rotateX,
                rotateY,
                y: visualParallaxY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="hero-visual-frame relative">
                  <Image
                    src={HERO_VISUAL_SRC}
                    alt="ZentiaTech 3D marka görseli"
                    width={1066}
                    height={1268}
                    priority
                    sizes="(max-width: 1024px) 90vw, 48vw"
                    className="hero-visual relative z-[1] mx-auto h-auto w-full max-w-[420px] object-contain sm:max-w-[480px] lg:max-w-[560px]"
                  />
                  <span className="hero-visual-shine" aria-hidden />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <Link
          href="/#hizmetler"
          scroll={false}
          onClick={goToSection("hizmetler")}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 transition-colors hover:text-white/75"
          aria-label="Hizmetler bölümüne kaydır"
        >
          <span className="hero-scroll-mouse" aria-hidden />
          <motion.span
            animate={{ y: [0, 5, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
            className="text-[10px] tracking-widest uppercase"
          >
            ↓
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, type MouseEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, BarChart3, Brain, Globe } from "lucide-react";
import { HERO_VISUAL_SRC } from "@/lib/site-assets";
import { scrollToSection } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  { icon: Globe, category: "Ürün", label: "Web & Mobil" },
  { icon: Brain, category: "Akıllı", label: "AI Sistemleri" },
  { icon: BarChart3, category: "Ölçek", label: "Dijital Dönüşüm" },
] as const;

const ORBS = [
  { top: "14%", left: "6%", size: 220, color: "rgba(80, 120, 255, 0.14)", delay: 0 },
  { top: "62%", left: "8%", size: 140, color: "rgba(140, 120, 255, 0.1)", delay: 1.1 },
  { top: "18%", right: "8%", size: 180, color: "rgba(90, 140, 255, 0.12)", delay: 0.5 },
  { top: "68%", right: "14%", size: 120, color: "rgba(120, 90, 255, 0.1)", delay: 1.6 },
] as const;

const SPARKS = [
  { x: "16%", y: "22%", delay: 0 },
  { x: "28%", y: "16%", delay: 0.7 },
  { x: "72%", y: "18%", delay: 1.3 },
  { x: "88%", y: "36%", delay: 0.4 },
  { x: "10%", y: "64%", delay: 1.1 },
  { x: "78%", y: "70%", delay: 1.8 },
  { x: "46%", y: "78%", delay: 0.55 },
  { x: "58%", y: "12%", delay: 1.5 },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["68%", "82%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["38%", "56%"]);
  const glowBg = useMotionTemplate`radial-gradient(ellipse 50% 42% at ${glowX} ${glowY}, rgba(90, 130, 255, 0.16), transparent 70%)`;

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
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
      className="hero-stage"
    >
      <div className="hero-stage-glow" aria-hidden />
      {!reduceMotion && (
        <motion.div
          className="hero-stage-mouse-glow"
          style={{ background: glowBg }}
          aria-hidden
        />
      )}
      <div className="hero-stage-grid" aria-hidden />
      <div className="hero-stage-particles" aria-hidden />

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
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -18, 0], scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }
          }
          transition={{
            duration: 8 + i,
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
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.25, 0.7], y: [0, -8, 0] }
          }
          transition={{
            duration: 2.6 + (i % 3) * 0.4,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}

      <div className="hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="hero-badge"
            >
              <span className="hero-badge-dot" aria-hidden />
              Web • Mobil • AI
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
              }}
              className="hero-title"
            >
              <motion.span
                className="hero-title-main"
                variants={{
                  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                }}
              >
                Yazılım, AI ve
                <br />
                Dijital Dönüşüm
              </motion.span>
              <motion.span
                className="hero-gradient-text"
                variants={{
                  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
              >
                Tek Çatı Altında.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
              className="hero-description"
            >
              Modern yazılım çözümleri, yapay zeka destekli sistemler ve dijital
              dönüşüm hizmetleriyle markanızı geleceğe taşıyoruz.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease }}
              className="hero-cta-row"
            >
              <Link
                href="/#iletisim"
                scroll={false}
                onClick={goToSection("iletisim")}
                className="hero-cta-primary group"
              >
                Teklif Al
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/hizmetler"
                className="hero-cta-secondary group"
              >
                Hizmetlerimizi İncele
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="hero-visual-wrap"
          >
            <div className="hero-visual-glow" aria-hidden />
            <div className="hero-visual-depth" aria-hidden />
            <div className="hero-visual-float">
              <Image
                src={HERO_VISUAL_SRC}
                alt="ZentiaTech 3D cam Z marka görseli"
                width={855}
                height={823}
                priority
                sizes="(max-width: 1023px) 80vw, (max-width: 1440px) 42vw, 640px"
                className="hero-visual"
              />
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.48 } },
            }}
            className="hero-features"
          >
            {FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  className="hero-feature"
                  variants={{
                    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                >
                  <span className="hero-feature-icon" aria-hidden>
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="hero-feature-category">{item.category}</span>
                    <span className="hero-feature-label">{item.label}</span>
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <Link
          href="/#hizmetler"
          scroll={false}
          onClick={goToSection("hizmetler")}
          className="hero-scroll"
          aria-label="Hizmetler bölümüne kaydır"
        >
          <span className="hero-scroll-mouse" aria-hidden />
          <motion.span
            className="hero-scroll-arrow"
            aria-hidden
            animate={reduceMotion ? undefined : { y: [0, 5, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </Link>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles, ShieldCheck, Headphones, MoveHorizontal } from "lucide-react";
import { slideInLeft } from "@/lib/animations";

const GAP = 24;

const features = [
  {
    icon: Layers,
    title: "Modern Yazılım Mimarisi",
    description:
      "Ölçeklenebilir, modüler ve sürdürülebilir altyapılarla uzun vadeli teknoloji çözümleri geliştiriyoruz.",
    glow: "bg-cyan-400/25",
  },
  {
    icon: Sparkles,
    title: "Kullanıcı Deneyimi",
    description:
      "UI UX tasarım yaklaşımıyla kullanıcı odaklı, dönüşüm artıran ve markanıza özel arayüzler tasarlıyoruz.",
    glow: "bg-violet-400/25",
  },
  {
    icon: ShieldCheck,
    title: "Performans ve Güvenlik",
    description:
      "Hızlı, güvenli ve SEO uyumlu sistemlerle profesyonel web sitesi ve uygulama performansını koruyoruz.",
    glow: "bg-emerald-400/25",
  },
  {
    icon: Headphones,
    title: "Uzun Vadeli Destek",
    description:
      "Yayın sonrası bakım, güncelleme ve teknik destekle dijital ürünlerinizi sürekli güçlendiriyoruz.",
    glow: "bg-blue-400/25",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="group relative h-full min-h-[300px] w-[85vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/12 p-6 shadow-xl shadow-navy/25 backdrop-blur-xl sm:min-h-[320px] sm:p-8 md:w-[440px] md:min-w-[440px]"
    >
      {/* Arka plan blur glow */}
      <div
        className={`pointer-events-none absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110 ${feature.glow}`}
      />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-soft-navy to-dark-navy transition-all duration-700 group-hover:from-dark-navy group-hover:via-[#0d2444] group-hover:to-navy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* İnce iç glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-2xl" />

      <span className="absolute top-5 right-5 z-10 text-xs font-semibold tracking-[0.25em] text-white/25">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:bg-white/15">
          <Icon size={28} strokeWidth={1.25} />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {feature.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/70 sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}

function FeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;

    const firstCard = el.children[0] as HTMLElement;
    const step = firstCard.offsetWidth + GAP;
    const index = Math.round(el.scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), features.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateActiveIndex();
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      el.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;

    const firstCard = el.children[0] as HTMLElement;
    const step = firstCard.offsetWidth + GAP;
    el.scrollTo({ left: step * index, behavior: "smooth" });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const walk = e.clientX - dragState.current.startX;
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
    el.style.scrollSnapType = "x mandatory";
    el.style.cursor = "grab";
    updateActiveIndex();
  };

  const progress = ((activeIndex + 1) / features.length) * 100;

  return (
    <div className="relative mt-12 lg:mt-14">
      {/* Kaydır ipucu */}
      <div className="container-custom mb-4 flex items-center justify-end gap-2 pr-1">
        <MoveHorizontal size={15} className="text-navy/40" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide text-soft-navy/60">
          Kaydır
        </span>
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Özellik kartları"
        className={`scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 select-none sm:px-6 lg:px-8 ${
          isDragging ? "snap-none" : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      {/* Progress & dots */}
      <div className="container-custom mt-8 px-4 sm:px-6 lg:px-8">
        <div className="h-0.5 overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-navy transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Kart ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-navy"
                  : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="neden"
      className="section-padding relative bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(11,31,58,0.07),transparent_55%),radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(19,43,79,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute top-16 left-0 h-72 w-72 rounded-full bg-navy/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-soft-navy/[0.08] blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full border border-navy/10 bg-navy/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-navy uppercase">
            Neden ZentiaTech
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            ZentiaTech ile Daha Güçlü Dijital Altyapılar
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-soft-navy/80 sm:text-lg">
            Bir yazılım şirketi olarak stratejik planlama, temiz kod ve şeffaf
            iletişimle kurumsal web tasarım, mobil uygulama ve özel yazılım
            projelerinizi güvenle hayata geçiriyoruz.
          </p>
        </motion.div>
      </div>

      <FeatureCarousel />
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_VIDEO_SRC = "/videos/Z.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = async () => {
      setVideoReady(true);
      setVideoFailed(false);
      try {
        await video.play();
      } catch {
        // Autoplay blocked — video still visible on first frame
      }
    };

    const onError = () => {
      setVideoFailed(true);
      setVideoReady(false);
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("error", onError);

    if (video.readyState >= 2) onReady();

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
    };
  }, []);

  const showVideo = videoReady && !videoFailed;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Gradient fallback — video yüklenene veya hata olana kadar */}
      <div
        className={`hero-gradient-fallback absolute inset-0 transition-opacity duration-700 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={showVideo}
      />

      {/* Video her zaman DOM'da — böylece yüklenebilir */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="ZentiaTech kurumsal yazılım geliştirme ve teknoloji çözümleri tanıtım videosu"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Alt kısımda videoya yumuşak beyaz geçiş */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[6] h-[50%] bg-gradient-to-t from-white via-white/45 to-transparent sm:h-[48%]"
        aria-hidden
      />

      <motion.div
        style={{ opacity }}
        className="absolute right-0 bottom-0 left-0 z-10 flex flex-col justify-end"
      >
        <div className="container-custom relative px-4 pb-6 text-center sm:px-6 sm:pb-8 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-lg leading-snug font-bold tracking-tight text-navy sm:text-xl md:text-2xl lg:text-[1.65rem]"
          >
            ZentiaTech ile Dijital Geleceğinizi Profesyonel Yazılım
            Çözümleriyle İnşa Edin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-soft-navy/85 sm:text-sm"
          >
            Web geliştirme, e-ticaret sistemleri, yapay zeka destekli çözümler,
            mobil uygulamalar ve oyun geliştirme alanlarında markalara modern,
            ölçeklenebilir ve güvenilir dijital ürünler sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-col items-center justify-center gap-2 sm:mt-5 sm:flex-row sm:gap-3"
          >
            <a
              href="/iletisim"
              className="btn-glow group flex items-center gap-1.5 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-white shadow-md shadow-navy/15 transition-all duration-300 hover:bg-dark-navy sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Teklif Al
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="/hizmetler"
              className="btn-glow rounded-full border border-navy/20 bg-white/60 px-5 py-2 text-xs font-semibold text-navy backdrop-blur-sm transition-all duration-300 hover:border-navy/40 hover:bg-white/80 sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Hizmetlerimizi İncele
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#hizmetler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-28 right-6 z-10 hidden text-white/50 transition-colors hover:text-white sm:block lg:right-10"
        aria-label="Aşağı kaydır"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

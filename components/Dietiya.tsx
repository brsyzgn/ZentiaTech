"use client";

import { motion } from "framer-motion";
import { DIETIYA_VISUAL_SRC } from "@/lib/site-assets";
import { fadeInUp } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";
import SectionHeading from "./SectionHeading";
import ProductVisualCard from "./ProductVisualCard";

const DIETIYA_URL = "https://dietiya-web-production.up.railway.app/login";

export default function Dietiya() {
  return (
    <section
      id="dietiya"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(15,122,74,0.08),transparent_55%),radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(22,101,52,0.06),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-16 left-0 h-72 w-72 rounded-full bg-emerald-600/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-emerald-800/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="container-custom relative">
        <SectionHeading
          tag="Ürün"
          title="Dietiya"
          description="Diyetisyenler ve danışanlar için hasta, randevu ve beslenme yönetim platformu. Danışan takibi, planlama ve süreçleri tek merkezden yönetin."
        />

        <motion.div variants={fadeInUp} {...getRevealProps(false)}>
          <ProductVisualCard
            src={DIETIYA_VISUAL_SRC}
            alt="Dietiya diyetisyen ve danışan platformu. Diyetisyenlik süreçlerinizi tek platformda yönetin."
            href={DIETIYA_URL}
            cta="Dietiya’yı keşfet"
            overlayClassName="bg-gradient-to-t from-emerald-950/55 via-emerald-900/20 to-transparent"
            buttonClassName="bg-[#0F7A4A] shadow-[#0F7A4A]/40 hover:bg-[#0C6840]"
            backgroundClassName="bg-[#EEF7F2]"
          />
        </motion.div>
      </div>
    </section>
  );
}

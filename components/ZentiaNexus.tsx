"use client";

import { motion } from "framer-motion";
import { NEXUS_VISUAL_SRC } from "@/lib/site-assets";
import { fadeInUp } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";
import SectionHeading from "./SectionHeading";
import ProductVisualCard from "./ProductVisualCard";

const NEXUS_URL = "https://www.zentianexus.com";

export default function ZentiaNexus() {
  return (
    <section
      id="zentia-nexus"
      className="section-padding relative overflow-hidden bg-light-gray"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(11,31,58,0.07),transparent_55%),radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(19,43,79,0.06),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-16 left-0 h-72 w-72 rounded-full bg-navy/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-soft-navy/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="container-custom relative">
        <SectionHeading
          tag="Ürün"
          title="Zentia Nexus"
          description="Proje ve ekip yönetim platformu. Ekipler, yöneticiler ve paydaşlar için görev, ilerleme ve kararları tek merkezden yönetin."
        />

        <motion.div variants={fadeInUp} {...getRevealProps(false)}>
          <ProductVisualCard
            src={NEXUS_VISUAL_SRC}
            alt="Zentia Nexus proje ve ekip yönetim platformu. Projelerinizi, ekiplerinizi ve kararlarınızı tek merkezden yönetin."
            href={NEXUS_URL}
            cta="Zentia Nexus’u keşfet"
            overlayClassName="bg-gradient-to-t from-navy/55 via-navy/20 to-transparent"
            buttonClassName="bg-[#5B5CE2] shadow-[#5B5CE2]/40 hover:bg-[#4F50D4]"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      {...getRevealProps(false)}
      className={`mb-14 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase ${
            light
              ? "bg-white/10 text-white/90"
              : "bg-navy/5 text-navy"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-soft-navy/80"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

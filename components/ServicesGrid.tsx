"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, type ServiceItem } from "@/lib/services-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[380px] lg:min-h-[420px]"
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/45 transition-all duration-500 group-hover:from-navy group-hover:via-navy/80 group-hover:to-navy/55" />

      <div className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
        <Icon size={20} strokeWidth={1.5} aria-hidden />
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 p-4 sm:p-5">
        <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/15 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {service.description}
              </p>
            </div>

            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
              aria-hidden
            >
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

interface ServicesGridProps {
  animateOnMount?: boolean;
}

export default function ServicesGrid({
  animateOnMount = false,
}: ServicesGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      {...getRevealProps(animateOnMount)}
      className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </motion.div>
  );
}

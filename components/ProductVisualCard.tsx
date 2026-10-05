"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const PRODUCT_CARD_FRAME =
  "relative mx-auto aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-3xl";

type ProductVisualCardProps = {
  src: string;
  alt: string;
  href: string;
  cta: string;
  overlayClassName: string;
  buttonClassName: string;
  backgroundClassName?: string;
};

export default function ProductVisualCard({
  src,
  alt,
  href,
  cta,
  overlayClassName,
  buttonClassName,
  backgroundClassName = "bg-white",
}: ProductVisualCardProps) {
  return (
    <div
      className={`${PRODUCT_CARD_FRAME} border border-navy/10 shadow-xl shadow-navy/10 ${backgroundClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-cover object-center"
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 ${overlayClassName}`}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-glow group/btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl ${buttonClassName}`}
        >
          {cta}
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden
          />
        </a>
      </div>
    </div>
  );
}

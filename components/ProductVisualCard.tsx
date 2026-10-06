"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const PRODUCT_CARD_FRAME =
  "relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl";

type ProductVisualCardProps = {
  src: string;
  alt: string;
  href: string;
  cta: string;
  overlayClassName: string;
  buttonClassName: string;
  backgroundClassName?: string;
  imageClassName?: string;
};

export default function ProductVisualCard({
  src,
  alt,
  href,
  cta,
  overlayClassName,
  buttonClassName,
  backgroundClassName = "bg-white",
  imageClassName = "object-cover object-top sm:object-center",
}: ProductVisualCardProps) {
  return (
    <div
      className={`${PRODUCT_CARD_FRAME} aspect-[4/3] border border-navy/10 shadow-xl shadow-navy/10 sm:aspect-[3/2] ${backgroundClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className={imageClassName}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 ${overlayClassName}`}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-3 sm:p-4 md:p-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-glow group/btn inline-flex max-w-[calc(100%-1rem)] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:px-6 sm:py-3 sm:text-sm ${buttonClassName}`}
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

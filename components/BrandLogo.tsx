import Link from "next/link";
import { LOGO_SRC } from "@/lib/site-assets";

interface BrandLogoProps {
  href?: string;
  variant?: "dark" | "light";
  size?: "nav" | "footer";
}

/* Görünür logo içeriği kırpıldı — yükseklik gerçek çizim boyutunu belirler */
const sizeClasses = {
  nav: "h-11 w-auto sm:h-12 md:h-14 lg:h-16",
  footer: "h-12 w-auto sm:h-14",
};

export default function BrandLogo({
  href = "/",
  variant = "dark",
  size = "nav",
}: BrandLogoProps) {
  const isLight = variant === "light";

  const content = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt="ZentiaTech"
      width={204}
      height={50}
      className={`block bg-transparent ${sizeClasses[size]} ${
        isLight ? "brightness-0 invert" : ""
      }`}
    />
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      scroll
      className="inline-flex shrink-0 items-center bg-transparent transition-opacity hover:opacity-90"
      aria-label="ZentiaTech ana sayfa"
    >
      {content}
    </Link>
  );
}

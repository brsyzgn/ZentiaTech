/** Single source of truth for crawlable routes (sitemap, nav, internal linking). */

export type SeoRoute = {
  path: string;
  label: string;
  labelEn?: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  /** ISO date string for sitemap lastmod (content last meaningfully updated). */
  lastModified: string;
  inFooter?: boolean;
  inNav?: boolean;
};

export const SEO_ROUTES: SeoRoute[] = [
  {
    path: "/",
    label: "Ana Sayfa",
    labelEn: "Home",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/about-zentiatech",
    label: "ZentiaTech Nedir?",
    labelEn: "What is ZentiaTech?",
    changeFrequency: "monthly",
    priority: 0.95,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/about",
    label: "About",
    labelEn: "About",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/services",
    label: "Services",
    labelEn: "Services",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/web",
    label: "Web Development",
    labelEn: "Web Development",
    changeFrequency: "monthly",
    priority: 0.88,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/ai",
    label: "AI Solutions",
    labelEn: "AI Solutions",
    changeFrequency: "monthly",
    priority: 0.88,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/blog",
    label: "Blog",
    labelEn: "Blog",
    changeFrequency: "weekly",
    priority: 0.85,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/contact",
    label: "Contact",
    labelEn: "Contact",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/careers",
    label: "Careers",
    labelEn: "Careers",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-07-20",
    inFooter: true,
  },
  {
    path: "/hizmetler",
    label: "Hizmetler",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/hakkimizda",
    label: "Hakkımızda",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/projeler",
    label: "Projeler",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/zentiagame",
    label: "ZentiaGame",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
  {
    path: "/iletisim",
    label: "İletişim",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: "2026-07-20",
    inFooter: true,
    inNav: true,
  },
];

/** TR ↔ EN language alternates for hreflang */
export const LANGUAGE_ALTERNATES: Record<
  string,
  { tr?: string; en?: string }
> = {
  "/": { tr: "/", en: "/" },
  "/hakkimizda": { tr: "/hakkimizda", en: "/about" },
  "/about": { tr: "/hakkimizda", en: "/about" },
  "/hizmetler": { tr: "/hizmetler", en: "/services" },
  "/services": { tr: "/hizmetler", en: "/services" },
  "/iletisim": { tr: "/iletisim", en: "/contact" },
  "/contact": { tr: "/iletisim", en: "/contact" },
};

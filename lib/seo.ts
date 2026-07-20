import type { Metadata } from "next";
import { LANGUAGE_ALTERNATES } from "@/lib/seo-routes";

export const brandNames = {
  primary: "ZentiaTech",
  alternate: "Zentia Tech",
  alternateLong: "Zentia Technology",
  plural: "Zentia Technologies",
} as const;

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/zentiatech",
  github: "https://github.com/brsyzgn/ZentiaTech",
  instagram: "https://www.instagram.com/zentiatech",
  twitter: "https://x.com/zentiatech",
  facebook: "https://www.facebook.com/zentiatech",
  youtube: "https://www.youtube.com/@zentiatech",
  medium: "https://medium.com/@zentiatech",
  producthunt: "https://www.producthunt.com/@zentiatech",
};

export const siteConfig = {
  name: brandNames.primary,
  alternateName: brandNames.alternate,
  applicationName: "ZentiaTech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zentiatech.com",
  locale: "tr_TR",
  localeAlternate: "en_US",
  email: "info@zentiatech.com",
  phone: "+90",
  location: "İstanbul, Türkiye",
  logo: "/logo.png",
  logoFull: "/zentiatech-logo.png",
  twitterHandle: "@zentiatech",
  category: "technology",
  defaultTitle:
    "ZentiaTech | Zentia Tech Software, AI & Digital Solutions",
  defaultDescription:
    "ZentiaTech (Zentia Tech) delivers web apps, mobile software, AI solutions and digital transformation for enterprises in Türkiye and beyond.",
  titleTemplate: "%s | ZentiaTech",
  keywords: [
    "ZentiaTech",
    "Zentia Tech",
    "Zentia Technology",
    "Zentia Technologies",
    "ZentiaTech software",
    "Zentia Tech software",
    "ZentiaTech AI",
    "Zentia AI",
    "Zentia Web",
    "Zentia Software",
    "ZentiaTech Türkiye",
    "Zentia Tech Türkiye",
    "software company",
    "AI company",
    "technology company",
    "web development",
    "web development company",
    "mobile app development",
    "AI solutions",
    "artificial intelligence",
    "machine learning",
    "digital transformation",
    "enterprise software",
    "cloud solutions",
    "custom software",
    "yazılım şirketi",
    "yapay zeka",
    "web geliştirme",
    "mobil uygulama geliştirme",
    "dijital dönüşüm",
    "İstanbul yazılım şirketi",
    "ZentiaGame",
  ],
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  type?: "website" | "article";
};

/** Keep descriptions ~155–160 chars where possible for SERP CTR. */
export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "ZentiaTech | Zentia Tech Software, AI & Digital Solutions",
    description:
      "ZentiaTech (Zentia Tech) builds web apps, mobile software, AI solutions and digital transformation for modern businesses in Türkiye.",
    path: "/",
    ogTitle: "ZentiaTech | Zentia Tech",
  },
  aboutZentiatech: {
    title: "What is ZentiaTech? | Zentia Tech Brand Guide",
    description:
      "ZentiaTech and Zentia Tech are the same brand. Learn how Zentia Technology delivers software, AI and digital solutions worldwide.",
    path: "/about-zentiatech",
  },
  about: {
    title: "About ZentiaTech | Zentia Tech Software Company",
    description:
      "About ZentiaTech (Zentia Tech): a software company focused on web, mobile, AI and enterprise digital transformation services.",
    path: "/about",
  },
  services: {
    title: "Software Development | ZentiaTech",
    description:
      "Zentia Tech software development: web, mobile, AI, e-commerce and custom enterprise systems from ZentiaTech engineers.",
    path: "/services",
  },
  ai: {
    title: "Artificial Intelligence Solutions | ZentiaTech",
    description:
      "ZentiaTech AI and Zentia AI solutions: ML models, automation and intelligent products built by Zentia Tech specialists.",
    path: "/ai",
    keywords: ["ZentiaTech AI", "Zentia AI", "machine learning", "AI solutions"],
  },
  web: {
    title: "Web Development | ZentiaTech",
    description:
      "Zentia Web and ZentiaTech web development: fast, SEO-ready corporate sites and scalable web applications.",
    path: "/web",
    keywords: ["Zentia Web", "web development", "Next.js", "corporate website"],
  },
  contact: {
    title: "Contact ZentiaTech",
    description:
      "Contact ZentiaTech (Zentia Tech) for software, AI and web projects. Talk with our İstanbul-based technology team today.",
    path: "/contact",
  },
  careers: {
    title: "Careers | ZentiaTech",
    description:
      "Careers at ZentiaTech (Zentia Tech): join engineers building AI, web and mobile products for growing enterprises.",
    path: "/careers",
  },
  blog: {
    title: "Blog | ZentiaTech & Zentia Tech Insights",
    description:
      "ZentiaTech blog: software, AI, web development and digital transformation insights from the Zentia Tech team.",
    path: "/blog",
  },
  hizmetler: {
    title: "Hizmetler | ZentiaTech Yazılım & AI",
    description:
      "ZentiaTech (Zentia Tech) hizmetleri: kurumsal web, e-ticaret, yapay zeka, mobil uygulama ve özel yazılım çözümleri.",
    path: "/hizmetler",
  },
  hakkimizda: {
    title: "Hakkımızda | ZentiaTech Yazılım Şirketi",
    description:
      "ZentiaTech (Zentia Tech) hakkında: İstanbul merkezli yazılım şirketi. Web, mobil, AI ve dijital dönüşüm partneriniz.",
    path: "/hakkimizda",
  },
  projeler: {
    title: "Projeler | ZentiaTech Dijital Başarılar",
    description:
      "ZentiaTech (Zentia Tech) projeleri: web platformları, AI uygulamaları ve kurumsal yazılım başarı hikayeleri.",
    path: "/projeler",
  },
  zentiagame: {
    title: "ZentiaGame | ZentiaTech Oyun Geliştirme",
    description:
      "ZentiaGame, ZentiaTech (Zentia Tech) oyun markasıdır. Mobil, web ve çok oyunculu oyun geliştirme hizmetleri.",
    path: "/zentiagame",
    keywords: ["oyun geliştirme", "Unity", "WebGL", "multiplayer"],
  },
  iletisim: {
    title: "İletişim | ZentiaTech Teklif Alın",
    description:
      "ZentiaTech (Zentia Tech) ile iletişime geçin. Web, AI, mobil ve özel yazılım projeleriniz için teklif alın.",
    path: "/iletisim",
  },
};

function buildLanguageAlternates(path: string) {
  const pair = LANGUAGE_ALTERNATES[path];
  if (!pair) return undefined;
  const languages: Record<string, string> = {};
  if (pair.tr) languages["tr-TR"] = `${siteConfig.url}${pair.tr === "/" ? "" : pair.tr}`;
  if (pair.en) languages["en"] = `${siteConfig.url}${pair.en === "/" ? "" : pair.en}`;
  languages["x-default"] = siteConfig.url;
  return languages;
}

export function buildMetadata(
  key: keyof typeof pageMeta,
  overrides?: Partial<Metadata>
): Metadata {
  const page = pageMeta[key];
  const url = `${siteConfig.url}${page.path === "/" ? "" : page.path}`;
  const ogTitle = page.ogTitle ?? page.title;
  const languages = buildLanguageAlternates(page.path);

  const base: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: page.title,
    },
    description: page.description,
    applicationName: siteConfig.applicationName,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: siteConfig.category,
    keywords: [...siteConfig.keywords, ...(page.keywords ?? [])],
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "96x96" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    alternates: {
      canonical: url,
      languages,
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.localeAlternate],
      type: page.type ?? "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "ZentiaTech | Zentia Tech — Software, AI & Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: ogTitle,
      description: page.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          }
        : undefined,
    },
  };

  return { ...base, ...overrides };
}

export function buildBlogPostMetadata(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}): Metadata {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: `${post.title} | ZentiaTech` },
    description: post.description,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: siteConfig.name,
      publishedTime: post.publishedAt,
      locale: siteConfig.locale,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}

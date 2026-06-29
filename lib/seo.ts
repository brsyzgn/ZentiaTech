import type { Metadata } from "next";

export const brandNames = {
  primary: "ZentiaTech",
  alternate: "Zentia Tech",
  alternateLong: "Zentia Technology",
} as const;

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/zentiatech",
  github: "https://github.com/zentiatech",
  instagram: "https://www.instagram.com/zentiatech",
};

export const siteConfig = {
  name: brandNames.primary,
  alternateName: brandNames.alternate,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zentiatech.com",
  locale: "tr_TR",
  email: "info@zentiatech.com",
  location: "İstanbul, Türkiye",
  logo: "/logo.png",
  ogTitle: `${brandNames.primary} | ${brandNames.alternate}`,
  defaultTitle:
    "ZentiaTech | Zentia Tech - Software Development & Digital Solutions",
  defaultDescription:
    "ZentiaTech (Zentia Tech) is a software development company specializing in web applications, mobile apps, AI solutions, and digital transformation services.",
  brandKeywords: [
    "ZentiaTech",
    "Zentia Tech",
    "Zentia Technology",
    "software company",
    "web development",
    "mobile app development",
    "AI solutions",
  ],
  keywords: [
    "ZentiaTech",
    "Zentia Tech",
    "Zentia Technology",
    "software company",
    "web development",
    "mobile app development",
    "AI solutions",
    "yazılım şirketi",
    "profesyonel web sitesi",
    "kurumsal web tasarım",
    "e-ticaret sitesi kurulumu",
    "yapay zeka destekli yazılım",
    "mobil uygulama geliştirme",
    "oyun geliştirme şirketi",
    "özel yazılım çözümleri",
    "UI UX tasarım",
    "dijital dönüşüm",
    "teknoloji çözümleri",
    "ZentiaGame",
    "İstanbul yazılım şirketi",
  ],
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
};

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
    ogTitle: siteConfig.ogTitle,
  },
  aboutZentiatech: {
    title: "What is ZentiaTech? | Zentia Tech",
    description:
      "ZentiaTech and Zentia Tech are the same software development company. Learn about our web, mobile, AI, and digital transformation services.",
    path: "/about-zentiatech",
    ogTitle: siteConfig.ogTitle,
  },
  about: {
    title: "About ZentiaTech | Zentia Tech Software Company",
    description:
      "ZentiaTech (Zentia Tech) is a software development company delivering web applications, mobile apps, AI solutions, and digital transformation.",
    path: "/about",
    ogTitle: siteConfig.ogTitle,
  },
  services: {
    title: "Services | ZentiaTech & Zentia Tech",
    description:
      "Zentia Tech provides web development, mobile app development, AI solutions, e-commerce, and custom software services through ZentiaTech.",
    path: "/services",
    ogTitle: siteConfig.ogTitle,
  },
  contact: {
    title: "Contact ZentiaTech | Zentia Tech",
    description:
      "Contact ZentiaTech (Zentia Tech) for software development, web applications, mobile apps, and AI project inquiries.",
    path: "/contact",
    ogTitle: siteConfig.ogTitle,
  },
  careers: {
    title: "Careers at ZentiaTech | Zentia Tech",
    description:
      "Join ZentiaTech (Zentia Tech) and build modern software products. Explore careers in web, mobile, AI, and game development.",
    path: "/careers",
    ogTitle: siteConfig.ogTitle,
  },
  hizmetler: {
    title:
      "Hizmetler | ZentiaTech & Zentia Tech — Web, E-Ticaret, AI ve Mobil",
    description:
      "ZentiaTech (Zentia Tech) kurumsal web site geliştirme, e-ticaret, yapay zeka destekli yazılım, mobil uygulama ve özel yazılım çözümleri sunar.",
    path: "/hizmetler",
    keywords: [
      "kurumsal web tasarım",
      "e-ticaret sitesi kurulumu",
      "yapay zeka destekli yazılım",
      "mobil uygulama geliştirme",
    ],
  },
  hakkimizda: {
    title:
      "Hakkımızda | ZentiaTech & Zentia Tech — Yazılım ve Teknoloji Şirketi",
    description:
      "ZentiaTech (Zentia Tech), dijital dönüşüm odaklı yazılım şirketi olarak web, mobil, yapay zeka ve kurumsal teknoloji çözümleri geliştirir.",
    path: "/hakkimizda",
  },
  projeler: {
    title: "Projeler | ZentiaTech & Zentia Tech Dijital Başarı Hikayeleri",
    description:
      "ZentiaTech (Zentia Tech) projeleri: kurumsal yazılım, web platformları, yapay zeka uygulamaları ve dijital ürün geliştirme örnekleri.",
    path: "/projeler",
  },
  zentiagame: {
    title: "ZentiaGame | ZentiaTech Oyun Geliştirme Markası",
    description:
      "ZentiaGame; ZentiaTech (Zentia Tech) bünyesinde mobil, web ve çok oyunculu oyun geliştirme, interaktif deneyimler sunar.",
    path: "/zentiagame",
    keywords: ["oyun geliştirme şirketi", "Unity", "WebGL", "multiplayer oyun"],
  },
  iletisim: {
    title: "İletişim | ZentiaTech & Zentia Tech — Teklif Alın",
    description:
      "ZentiaTech (Zentia Tech) ile profesyonel yazılım projenizi planlayın. Web, e-ticaret, yapay zeka ve mobil uygulama için iletişime geçin.",
    path: "/iletisim",
  },
};

export function buildMetadata(key: keyof typeof pageMeta): Metadata {
  const page = pageMeta[key];
  const url = `${siteConfig.url}${page.path}`;
  const iconBase = siteConfig.url;
  const ogTitle = page.ogTitle ?? page.title;
  const socialTitle = page.ogTitle ?? page.title;

  return {
    title: page.title,
    description: page.description,
    keywords: [...siteConfig.keywords, ...(page.keywords ?? [])],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: [
        { url: `${iconBase}/icon.png`, type: "image/png", sizes: "96x96" },
        { url: `${iconBase}/favicon.ico`, sizes: "48x48" },
      ],
      apple: [
        {
          url: `${iconBase}/apple-icon.png`,
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    manifest: "/manifest.webmanifest",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "ZentiaTech (Zentia Tech) — Software development and digital solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
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
  };
}

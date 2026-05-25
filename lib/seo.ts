import type { Metadata } from "next";

export const siteConfig = {
  name: "ZentiaTech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zentiatech.com",
  locale: "tr_TR",
  email: "info@zentiatech.com",
  location: "İstanbul, Türkiye",
  defaultTitle: "ZentiaTech | Web, E-Ticaret, Yapay Zeka ve Oyun Geliştirme",
  defaultDescription:
    "ZentiaTech; kurumsal web siteleri, e-ticaret altyapıları, yapay zeka destekli yazılımlar, mobil uygulamalar ve oyun geliştirme çözümleri sunan profesyonel bir teknoloji şirketidir.",
  keywords: [
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
    "ZentiaTech",
    "ZentiaGame",
    "İstanbul yazılım şirketi",
  ],
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  },
  hizmetler: {
    title: "Hizmetler | Kurumsal Web, E-Ticaret, AI ve Mobil — ZentiaTech",
    description:
      "Kurumsal web site geliştirme, e-ticaret sitesi kurulumu, yapay zeka destekli yazılım, mobil uygulama, UI/UX tasarım ve özel yazılım çözümleri. ZentiaTech ile dijital dönüşümünüzü hızlandırın.",
    path: "/hizmetler",
    keywords: [
      "kurumsal web tasarım",
      "e-ticaret sitesi kurulumu",
      "yapay zeka destekli yazılım",
      "mobil uygulama geliştirme",
    ],
  },
  hakkimizda: {
    title: "Hakkımızda | Profesyonel Yazılım ve Teknoloji Şirketi — ZentiaTech",
    description:
      "ZentiaTech, dijital dönüşüm odaklı yazılım şirketi olarak web, mobil, yapay zeka ve kurumsal teknoloji çözümleri geliştirir. Ekibimizi ve vizyonumuzu keşfedin.",
    path: "/hakkimizda",
  },
  projeler: {
    title: "Projeler | Dijital Başarı Hikayeleri — ZentiaTech",
    description:
      "ZentiaTech projeleri: kurumsal yazılım, web platformları, yapay zeka uygulamaları ve dijital ürün geliştirme örnekleri. Ölçeklenebilir teknoloji çözümlerimizi inceleyin.",
    path: "/projeler",
  },
  zentiagame: {
    title: "ZentiaGame | Oyun Geliştirme ve İnteraktif Deneyimler",
    description:
      "ZentiaGame; mobil, web ve çok oyunculu oyun geliştirme, interaktif deneyimler ve dijital eğlence projeleri sunan ZentiaTech'in oyun teknolojileri markasıdır.",
    path: "/zentiagame",
    keywords: ["oyun geliştirme şirketi", "Unity", "WebGL", "multiplayer oyun"],
  },
  iletisim: {
    title: "İletişim | Teklif Alın — ZentiaTech",
    description:
      "ZentiaTech ile profesyonel yazılım projenizi planlayın. Web, e-ticaret, yapay zeka, mobil uygulama ve özel yazılım çözümleri için bizimle iletişime geçin.",
    path: "/iletisim",
  },
};

export function buildMetadata(key: keyof typeof pageMeta): Metadata {
  const page = pageMeta[key];
  const url = `${siteConfig.url}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [...siteConfig.keywords, ...(page.keywords ?? [])],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
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
          alt: "ZentiaTech — Profesyonel yazılım ve teknoloji çözümleri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
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

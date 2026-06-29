import { siteConfig, socialProfiles } from "@/lib/seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: [siteConfig.alternateName, "Zentia Technology"],
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  email: siteConfig.email,
  description: siteConfig.defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    socialProfiles.linkedin,
    socialProfiles.github,
    socialProfiles.instagram,
  ],
  knowsAbout: [
    "Software development",
    "Web development",
    "Mobile app development",
    "Artificial intelligence",
    "Digital transformation",
    "E-commerce",
    "Game development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
  inLanguage: ["tr-TR", "en"],
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    logo: `${siteConfig.url}${siteConfig.logo}`,
  },
};

export const brandFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ZentiaTech the same as Zentia Tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ZentiaTech and Zentia Tech are the same software company and brand.",
      },
    },
    {
      "@type": "Question",
      name: "ZentiaTech nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZentiaTech (Zentia Tech), web uygulamaları, mobil uygulamalar, yapay zeka çözümleri ve dijital dönüşüm hizmetleri sunan bir yazılım geliştirme şirketidir.",
      },
    },
  ],
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

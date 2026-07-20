import { siteConfig, socialProfiles, brandNames } from "@/lib/seo";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const logoId = `${siteConfig.url}/#logo`;

export const logoSchema = {
  "@type": "ImageObject",
  "@id": logoId,
  url: `${siteConfig.url}${siteConfig.logo}`,
  contentUrl: `${siteConfig.url}${siteConfig.logo}`,
  caption: `${brandNames.primary} (${brandNames.alternate}) logo`,
  width: 512,
  height: 512,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "ProfessionalService"],
  "@id": orgId,
  name: brandNames.primary,
  legalName: brandNames.primary,
  alternateName: [
    brandNames.alternate,
    brandNames.alternateLong,
    brandNames.plural,
    "Zentia",
  ],
  url: siteConfig.url,
  logo: logoSchema,
  image: `${siteConfig.url}${siteConfig.logo}`,
  email: siteConfig.email,
  description: siteConfig.defaultDescription,
  foundingLocation: {
    "@type": "Place",
    name: "İstanbul, Türkiye",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["Turkish", "English"],
      areaServed: ["TR", "Worldwide"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["Turkish", "English"],
    },
  ],
  brand: {
    "@type": "Brand",
    name: brandNames.primary,
    alternateName: brandNames.alternate,
    logo: `${siteConfig.url}${siteConfig.logo}`,
  },
  sameAs: Object.values(socialProfiles).filter(Boolean),
  knowsAbout: [
    "Software development",
    "Web development",
    "Mobile app development",
    "Artificial intelligence",
    "Machine learning",
    "Digital transformation",
    "Enterprise software",
    "Cloud solutions",
    "Custom software",
    "E-commerce",
    "Game development",
  ],
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: brandNames.primary,
  alternateName: brandNames.alternate,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.logo}`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  priceRange: "$$",
  parentOrganization: { "@id": orgId },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: brandNames.primary,
  alternateName: [
    brandNames.alternate,
    brandNames.alternateLong,
    "ZentiaTech Türkiye",
  ],
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
  inLanguage: ["tr-TR", "en"],
  publisher: { "@id": orgId },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#navigation`,
  name: "ZentiaTech Site Navigation",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Home", url: siteConfig.url },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Services",
      url: `${siteConfig.url}/services`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "AI Solutions",
      url: `${siteConfig.url}/ai`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Web Development",
      url: `${siteConfig.url}/web`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "About ZentiaTech",
      url: `${siteConfig.url}/about-zentiatech`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Blog",
      url: `${siteConfig.url}/blog`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Contact",
      url: `${siteConfig.url}/contact`,
    },
  ],
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
        text: "Yes. ZentiaTech and Zentia Tech are the same software company and brand. Zentia Technology and Zentia Technologies also refer to ZentiaTech.",
      },
    },
    {
      "@type": "Question",
      name: "What does ZentiaTech do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZentiaTech (Zentia Tech) is a technology company offering software development, web development, mobile apps, AI solutions, and digital transformation services.",
      },
    },
    {
      "@type": "Question",
      name: "ZentiaTech nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZentiaTech (Zentia Tech), web uygulamaları, mobil uygulamalar, yapay zeka çözümleri ve kurumsal dijital dönüşüm hizmetleri sunan bir yazılım şirketidir.",
      },
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${siteConfig.url}${opts.path === "/" ? "" : opts.path}#webpage`,
    url: `${siteConfig.url}${opts.path === "/" ? "" : opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    publisher: { "@id": orgId },
    inLanguage: ["tr-TR", "en"],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    provider: { "@id": orgId },
    brand: {
      "@type": "Brand",
      name: brandNames.primary,
      alternateName: brandNames.alternate,
    },
    areaServed: ["TR", "Worldwide"],
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  readingTime?: string;
}) {
  const url = `${siteConfig.url}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url,
    datePublished: opts.publishedAt,
    dateModified: opts.modifiedAt ?? opts.publishedAt,
    author: {
      "@type": "Organization",
      name: brandNames.primary,
      alternateName: brandNames.alternate,
      url: siteConfig.url,
    },
    publisher: { "@id": orgId },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${siteConfig.url}/opengraph-image`,
    inLanguage: "en",
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}

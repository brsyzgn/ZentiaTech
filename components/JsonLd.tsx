import { siteConfig } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZentiaTech",
  url: siteConfig.url,
  email: siteConfig.email,
  logo: `${siteConfig.url}/zentiatech-logo.png?v=3`,
  description: siteConfig.defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [],
  knowsAbout: [
    "Yazılım geliştirme",
    "Web tasarım",
    "E-ticaret",
    "Yapay zeka",
    "Mobil uygulama",
    "Oyun geliştirme",
    "UI/UX tasarım",
    "Özel yazılım geliştirme",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ZentiaTech",
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
  inLanguage: "tr-TR",
  publisher: {
    "@type": "Organization",
    name: "ZentiaTech",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

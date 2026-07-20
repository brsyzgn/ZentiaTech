import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  siteNavigationSchema,
  jsonLdScript,
} from "@/lib/structured-data";

/** Sitewide entity graph — FAQ is page-scoped via PageStructuredData. */
export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(siteNavigationSchema),
        }}
      />
    </>
  );
}

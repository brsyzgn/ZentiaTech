import {
  breadcrumbSchema,
  brandFaqSchema,
} from "@/lib/structured-data";

interface PageStructuredDataProps {
  breadcrumbs?: { name: string; path: string }[];
  includeBrandFaq?: boolean;
}

export default function PageStructuredData({
  breadcrumbs,
  includeBrandFaq = false,
}: PageStructuredDataProps) {
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
          }}
        />
      )}
      {includeBrandFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(brandFaqSchema),
          }}
        />
      )}
    </>
  );
}

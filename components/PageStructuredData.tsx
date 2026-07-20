import Link from "next/link";
import {
  breadcrumbSchema,
  brandFaqSchema,
  faqSchema,
  webPageSchema,
  serviceSchema,
  articleSchema,
  jsonLdScript,
} from "@/lib/structured-data";

interface PageStructuredDataProps {
  breadcrumbs?: { name: string; path: string }[];
  includeBrandFaq?: boolean;
  faq?: { question: string; answer: string }[];
  webPage?: {
    path: string;
    name: string;
    description: string;
    type?: string;
  };
  service?: { name: string; description: string; path: string };
  article?: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    modifiedAt?: string;
  };
}

export default function PageStructuredData({
  breadcrumbs,
  includeBrandFaq = false,
  faq,
  webPage,
  service,
  article,
}: PageStructuredDataProps) {
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(breadcrumbSchema(breadcrumbs)),
          }}
        />
      )}
      {includeBrandFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(brandFaqSchema),
          }}
        />
      )}
      {faq && faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(faqSchema(faq)),
          }}
        />
      )}
      {webPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(webPageSchema(webPage)),
          }}
        />
      )}
      {service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(serviceSchema(service)),
          }}
        />
      )}
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(articleSchema(article)),
          }}
        />
      )}
    </>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy/5 bg-white">
      <ol className="container-custom flex flex-wrap items-center gap-2 px-4 py-3 text-xs text-soft-navy/70 sm:px-6 lg:px-8">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-navy/30">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-navy"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

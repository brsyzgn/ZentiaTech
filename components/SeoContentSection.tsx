import Link from "next/link";

interface SeoContentSectionProps {
  paragraphs: string[];
  links?: { href: string; label: string }[];
  faq?: { question: string; answer: string }[];
}

export default function SeoContentSection({
  paragraphs,
  links,
  faq,
}: SeoContentSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl px-4 sm:px-6 lg:px-8">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mb-5 text-base leading-relaxed text-soft-navy/80 sm:text-lg"
          >
            {paragraph}
          </p>
        ))}

        {links && links.length > 0 && (
          <ul className="mt-8 space-y-3 border-t border-navy/10 pt-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-navy underline-offset-4 transition-colors hover:text-soft-navy hover:underline sm:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {faq && faq.length > 0 && (
          <div className="mt-12 border-t border-navy/10 pt-10">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">FAQ</h2>
            <dl className="mt-6 space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-semibold text-navy">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-soft-navy/80 sm:text-base">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}

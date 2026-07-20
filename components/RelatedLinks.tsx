import Link from "next/link";

export type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

export default function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;

  return (
    <aside
      aria-label={title}
      className="border-t border-navy/10 bg-light-gray/40"
    >
      <div className="container-custom px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold tracking-tight text-navy sm:text-xl">
          {title}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block rounded-xl border border-navy/10 bg-white p-4 transition-colors hover:border-navy/25"
              >
                <span className="text-sm font-semibold text-navy group-hover:underline">
                  {link.label}
                </span>
                {link.description && (
                  <p className="mt-1 text-xs leading-relaxed text-soft-navy/70">
                    {link.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

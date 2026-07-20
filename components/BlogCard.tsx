import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy/5">
      <div className="flex flex-wrap items-center gap-2 text-xs text-soft-navy/60">
        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} read</span>
      </div>
      <h2 className="mt-3 text-lg font-bold tracking-tight text-navy sm:text-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors group-hover:text-soft-navy"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-soft-navy/75">
        {post.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-medium text-navy"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
      >
        Read article →
      </Link>
    </article>
  );
}

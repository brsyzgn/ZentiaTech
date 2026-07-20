import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import RelatedLinks from "@/components/RelatedLinks";
import { buildBlogPostMetadata } from "@/lib/seo";
import {
  blogPosts,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      href: `/blog/${p.slug}`,
      label: p.title,
      description: p.description,
    }));

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        faq={post.faq}
        article={{
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          modifiedAt: post.modifiedAt,
        }}
      />
      <Breadcrumbs items={crumbs} />
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl px-4 sm:px-6 lg:px-8">
          <header>
            <p className="text-xs font-medium tracking-wide text-soft-navy/60 uppercase">
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span aria-hidden> · </span>
              <span>{post.readingTime} read</span>
              <span aria-hidden> · </span>
              <span>By {post.author}</span>
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-soft-navy/80 sm:text-lg">
              {post.description}
            </p>
          </header>

          <nav
            aria-label="Table of contents"
            className="mt-8 rounded-xl border border-navy/10 bg-navy/[0.02] p-4"
          >
            <p className="text-xs font-semibold tracking-wide text-navy uppercase">
              On this page
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-soft-navy/80">
              {post.content.map((_, i) => (
                <li key={i}>
                  <a href={`#section-${i + 1}`} className="hover:text-navy">
                    Section {i + 1}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                id={`section-${i + 1}`}
                className="scroll-mt-28 text-base leading-relaxed text-soft-navy/85 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-12 border-t border-navy/10 pt-10">
              <h2 className="text-xl font-bold text-navy">FAQ</h2>
              <dl className="mt-6 space-y-6">
                {post.faq.map((item) => (
                  <div key={item.question}>
                    <dt className="font-semibold text-navy">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-soft-navy/80 sm:text-base">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <p className="mt-12 text-sm">
            <Link
              href="/blog"
              className="font-semibold text-navy underline-offset-4 hover:underline"
            >
              ← Back to ZentiaTech blog
            </Link>
          </p>
        </div>
      </article>
      <RelatedLinks title="Related articles" links={related} />
    </PageShell>
  );
}

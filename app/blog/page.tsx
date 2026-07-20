import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import PageStructuredData, {
  Breadcrumbs,
} from "@/components/PageStructuredData";
import BlogCard from "@/components/BlogCard";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = buildMetadata("blog");

export default function BlogPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <PageShell>
      <PageStructuredData
        breadcrumbs={crumbs}
        webPage={{
          path: "/blog",
          name: "Blog | ZentiaTech",
          description:
            "Software, AI and web insights from ZentiaTech (Zentia Tech).",
          type: "CollectionPage",
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="Blog | ZentiaTech & Zentia Tech"
        description="Insights on software development, AI solutions, and web engineering from the ZentiaTech team."
      />
      <section className="section-padding !pt-0 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="mb-10 max-w-2xl text-base text-soft-navy/80">
            At ZentiaTech, we share practical notes on building products.
            Zentia Tech articles cover brand clarity, AI delivery, and modern
            web stacks.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          {
            href: "/about-zentiatech",
            label: "What is ZentiaTech?",
            description: "ZentiaTech vs Zentia Tech explained",
          },
          {
            href: "/ai",
            label: "AI Solutions",
            description: "ZentiaTech AI services",
          },
          {
            href: "/feed.xml",
            label: "RSS Feed",
            description: "Subscribe to ZentiaTech updates",
          },
        ]}
      />
    </PageShell>
  );
}

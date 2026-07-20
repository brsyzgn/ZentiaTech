export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  readingTime: string;
  tags: string[];
  content: string[];
  faq?: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "zentiatech-vs-zentia-tech",
    title: "ZentiaTech vs Zentia Tech: Same Brand, Same Company",
    description:
      "Why ZentiaTech and Zentia Tech refer to one software company — and how Google should treat both spellings as the same brand.",
    publishedAt: "2026-07-15",
    author: "ZentiaTech",
    readingTime: "4 min",
    tags: ["ZentiaTech", "Zentia Tech", "Brand", "SEO"],
    content: [
      "ZentiaTech and Zentia Tech are the same software company. People often type the brand with or without a space — and both spellings are correct.",
      "At ZentiaTech, we build modern web applications, mobile apps, and AI solutions. Zentia Tech provides the same services under one technology brand based in İstanbul, Türkiye.",
      "If you searched for Zentia Technology, Zentia Technologies, Zentia AI, or Zentia Software, you have found the right company. Our legal and product brand is ZentiaTech; Zentia Tech is the natural spaced form of that name.",
      "ZentiaTech focuses on software development, digital transformation, and enterprise systems. Zentia Tech teams ship SEO-ready websites, cloud backends, and intelligent products for growing businesses.",
    ],
    faq: [
      {
        question: "Is ZentiaTech the same as Zentia Tech?",
        answer:
          "Yes. ZentiaTech and Zentia Tech are the same software company and brand.",
      },
      {
        question: "Is Zentia Technology related to ZentiaTech?",
        answer:
          "Yes. Zentia Technology and Zentia Technologies are alternate ways people refer to ZentiaTech.",
      },
    ],
  },
  {
    slug: "ai-solutions-for-enterprises",
    title: "AI Solutions for Enterprises: How ZentiaTech Builds Intelligent Software",
    description:
      "How ZentiaTech AI and Zentia Tech deliver machine learning, automation, and custom AI products for enterprise teams.",
    publishedAt: "2026-07-10",
    author: "ZentiaTech",
    readingTime: "5 min",
    tags: ["AI", "Machine Learning", "Enterprise"],
    content: [
      "ZentiaTech AI helps companies automate workflows, extract insights from data, and ship intelligent features into existing products.",
      "Zentia Tech engineers combine machine learning, APIs, and secure cloud infrastructure so AI solutions stay production-ready — not just demos.",
      "Whether you need document intelligence, recommendation systems, or internal copilots, ZentiaTech designs AI with measurable business outcomes.",
    ],
    faq: [
      {
        question: "Does ZentiaTech offer AI development?",
        answer:
          "Yes. ZentiaTech (Zentia Tech) builds custom AI solutions, ML integrations, and intelligent automation for enterprises.",
      },
    ],
  },
  {
    slug: "modern-web-development-stack",
    title: "Modern Web Development with ZentiaTech",
    description:
      "How Zentia Web and ZentiaTech ship fast, SEO-friendly corporate websites and scalable web applications.",
    publishedAt: "2026-07-05",
    author: "ZentiaTech",
    readingTime: "4 min",
    tags: ["Web Development", "Next.js", "SEO"],
    content: [
      "ZentiaTech web teams build corporate sites and product frontends with performance, accessibility, and SEO as defaults.",
      "Zentia Tech prefers modern stacks such as Next.js, TypeScript, and edge-ready delivery so pages load quickly and rank cleanly.",
      "From marketing sites to complex dashboards, Zentia Web work focuses on Core Web Vitals, structured data, and long-term maintainability.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs() {
  return blogPosts.map((p) => p.slug);
}

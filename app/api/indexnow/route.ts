import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo";
import { SEO_ROUTES } from "@/lib/seo-routes";
import { blogPosts } from "@/lib/blog-data";

/**
 * IndexNow endpoint — notify Bing/Yandex of URL updates.
 * POST { "url": "https://zentiatech.com/path" } or { "urls": ["..."] }
 * Set INDEXNOW_KEY env var and host key file at /public/{key}.txt
 */
export async function POST(request: Request) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY is not configured" },
      { status: 503 }
    );
  }

  let body: { url?: string; urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const urls = body.urls ?? (body.url ? [body.url] : []);
  if (!urls.length) {
    return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
  }

  const host = new URL(siteConfig.url).host;
  const payload = {
    host,
    key,
    keyLocation: `${siteConfig.url}/${key}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json(
    { ok: res.ok, status: res.status, submitted: urls.length },
    { status: res.ok ? 200 : 502 }
  );
}

/** Helper: list canonical URLs eligible for IndexNow. */
export async function GET() {
  const urls = [
    ...SEO_ROUTES.map(
      (r) => `${siteConfig.url}${r.path === "/" ? "" : r.path}`
    ),
    ...blogPosts.map((p) => `${siteConfig.url}/blog/${p.slug}`),
  ];
  return NextResponse.json({ urls, count: urls.length });
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes: {
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about-zentiatech", changeFrequency: "monthly", priority: 0.95 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.8 },
    { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.85 },
    { path: "/hizmetler", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projeler", changeFrequency: "monthly", priority: 0.85 },
    { path: "/zentiagame", changeFrequency: "monthly", priority: 0.8 },
    { path: "/iletisim", changeFrequency: "monthly", priority: 0.85 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

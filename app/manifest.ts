import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZentiaTech | Zentia Tech",
    short_name: "ZentiaTech",
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0b1f3a",
    theme_color: "#0b1f3a",
    lang: "tr",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icon.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

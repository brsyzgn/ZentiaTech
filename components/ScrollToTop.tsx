"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll";

function scrollPageToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return false;
      return scrollToSection(hash);
    };

    if (scrollToHash()) return;

    scrollPageToTop();
    const retries = [80, 220, 500].map((delay) =>
      window.setTimeout(() => {
        if (!scrollToHash()) {
          if (delay === 80) scrollPageToTop();
        }
      }, delay)
    );

    return () => retries.forEach((id) => window.clearTimeout(id));
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) scrollToSection(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}

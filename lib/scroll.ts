"use client";

export function getNavOffset() {
  if (typeof window === "undefined") return 80;
  const header = document.querySelector("header");
  if (header) return header.getBoundingClientRect().height + 8;
  if (window.matchMedia("(min-width: 768px)").matches) return 88;
  if (window.matchMedia("(min-width: 640px)").matches) return 80;
  return 72;
}

function getScrollTop(id: string) {
  const el = document.getElementById(id);
  if (!el) return null;

  const offset = getNavOffset();
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
}

function applyScroll(top: number) {
  const root = document.documentElement;
  root.scrollTop = top;
  document.body.scrollTop = top;
  window.scrollTo(0, top);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = getScrollTop(id);
  if (top === null) return false;

  const startY = window.scrollY;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.history.replaceState(null, "", `#${id}`);

  if (prefersReduced) {
    applyScroll(top);
    return true;
  }

  // scroll-margin-top on sections works with scrollIntoView
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // Fallback: some ortamlarda smooth scroll çalışmaz (IDE preview vb.)
  window.setTimeout(() => {
    if (Math.abs(window.scrollY - startY) < 8) {
      applyScroll(top);
    }
  }, 450);

  window.setTimeout(() => {
    const drift = Math.abs(window.scrollY - top);
    if (drift > 60) {
      applyScroll(top);
    }
  }, 900);

  return true;
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useScrolled } from "@/lib/hooks";
import { scrollToSection } from "@/lib/scroll";

const CONTACT_SECTION_ID = "iletisim";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Projeler", href: "/projeler" },
  { label: "ZentiaGame", href: "/zentiagame" },
  { label: "İletişim", href: "/iletisim#iletisim" },
];

export default function Navbar() {
  const scrolled = useScrolled(50);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  const linkClass = (href: string) =>
    isActive(href)
      ? "text-navy font-semibold after:w-full"
      : "text-navy/70 hover:text-navy after:w-0 hover:after:w-full";

  const mobileLinkClass = (href: string) =>
    isActive(href)
      ? "bg-navy/8 font-semibold text-navy"
      : "text-navy hover:bg-light-gray";

  const teklifHref =
    pathname === "/" ? `/#${CONTACT_SECTION_ID}` : `/iletisim#${CONTACT_SECTION_ID}`;

  const handleTeklifAl = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    if (pathname === "/" || pathname === "/iletisim") {
      e.preventDefault();
      scrollToSection(CONTACT_SECTION_ID);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 glass shadow-lg shadow-navy/5 transition-all duration-500 ${
        scrolled ? "shadow-xl shadow-navy/10" : ""
      }`}
    >
      <nav
        className="container-custom flex h-14 items-center justify-between px-4 sm:h-16 md:h-[4.25rem] sm:px-6 lg:px-8"
        aria-label="Ana menü"
      >
        <BrandLogo href="/" variant="dark" />

        <ul className="hidden items-center gap-4 lg:flex lg:gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll={link.href.includes("#") ? false : undefined}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative whitespace-nowrap text-[13px] font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 lg:text-sm ${linkClass(link.href)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={teklifHref}
          scroll={false}
          onClick={handleTeklifAl}
          className={`btn-glow hidden shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
            isActive("/iletisim")
              ? "bg-dark-navy text-white shadow-lg shadow-navy/30"
              : "bg-navy text-white shadow-lg shadow-navy/20 hover:bg-dark-navy hover:shadow-navy/30"
          }`}
        >
          Teklif Al
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-navy transition-colors lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-navy/10 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${mobileLinkClass(link.href)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href={teklifHref}
                  scroll={false}
                  onClick={handleTeklifAl}
                  className="btn-glow block rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Teklif Al
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

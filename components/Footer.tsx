"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import BrandLogo from "./BrandLogo";

const footerLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Projeler", href: "/projeler" },
  { label: "ZentiaGame", href: "/zentiagame" },
  { label: "İletişim", href: "/iletisim" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-navy">
      <div className="container-custom px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <BrandLogo href="/" variant="light" size="footer" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              ZentiaTech; web, yapay zeka, mobil uygulama, özel yazılım ve
              dijital dönüşüm odaklı teknoloji çözümleri sunan profesyonel bir
              yazılım şirketidir. Oyun geliştirme projeleri ZentiaGame
              markasıyla yürütülür.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <social.icon size={18} aria-hidden />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Hızlı Linkler
            </h2>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              İletişim
            </h2>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="mailto:info@zentiatech.com"
                  className="transition-colors hover:text-white"
                >
                  info@zentiatech.com
                </a>
              </li>
              <li>İstanbul, Türkiye</li>
              <li>Profesyonel yazılım ve teknoloji çözümleri</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ZentiaTech. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/40">
            Kurumsal web, mobil, yapay zeka ve oyun geliştirme.
          </p>
        </div>
      </div>
    </footer>
  );
}

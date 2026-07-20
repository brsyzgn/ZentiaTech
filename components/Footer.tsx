"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { socialProfiles } from "@/lib/seo";
import { SEO_ROUTES } from "@/lib/seo-routes";

const footerLinks = SEO_ROUTES.filter((r) => r.inFooter).map((r) => ({
  label: r.labelEn ?? r.label,
  href: r.path,
}));

const socialLinks = [
  { icon: Linkedin, href: socialProfiles.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialProfiles.twitter, label: "X (Twitter)" },
  { icon: Github, href: socialProfiles.github, label: "GitHub" },
  { icon: Instagram, href: socialProfiles.instagram, label: "Instagram" },
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
              ZentiaTech (also known as Zentia Tech) is a software development
              company specializing in web, mobile, AI, and digital
              transformation. Zentia Tech delivers scalable technology
              solutions; game projects are led by our ZentiaGame brand.
            </p>
            <address className="mt-4 not-italic text-sm text-white/45">
              <a
                href="mailto:info@zentiatech.com"
                className="transition-colors hover:text-white"
              >
                info@zentiatech.com
              </a>
              <br />
              İstanbul, Türkiye
            </address>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
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
              Explore
            </h2>
            <ul className="space-y-3">
              {footerLinks.slice(0, 8).map((link) => (
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
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              More
            </h2>
            <ul className="space-y-3">
              {footerLinks.slice(8).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/feed.xml"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  RSS Feed
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ZentiaTech (Zentia Tech). All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            Software Company · AI Company · Technology Company
          </p>
        </div>
      </div>
    </footer>
  );
}

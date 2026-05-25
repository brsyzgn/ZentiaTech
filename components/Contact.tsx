"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { getRevealProps } from "@/lib/reveal-motion";

interface ContactProps {
  showHeading?: boolean;
  className?: string;
}

export default function Contact({
  showHeading = true,
  className = "",
}: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  const reveal = getRevealProps(!showHeading);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="iletisim"
      className={`section-padding bg-white ${className}`}
    >
      <div className="container-custom">
        {showHeading ? (
          <SectionHeading
            tag="İletişim"
            title="Projenizi Dijital Ürüne Dönüştürelim"
            description="ZentiaTech ile profesyonel yazılım çözümünüzü planlayın. Web, e-ticaret, yapay zeka, mobil uygulama ve özel yazılım ihtiyaçlarınız için bizimle iletişime geçin."
          />
        ) : (
          <h2 className="sr-only">İletişim Formu</h2>
        )}

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.form
            variants={slideInLeft}
            {...reveal}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-navy/5 bg-light-gray p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Ad Soyad
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Adınız Soyadınız"
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-all placeholder:text-soft-navy/40 focus:border-navy focus:ring-2 focus:ring-navy/10"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@email.com"
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-all placeholder:text-soft-navy/40 focus:border-navy focus:ring-2 focus:ring-navy/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+90 5XX XXX XX XX"
                className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-all placeholder:text-soft-navy/40 focus:border-navy focus:ring-2 focus:ring-navy/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Proje Detayı
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Projeniz hakkında kısa bilgi verin..."
                className="w-full resize-none rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-all placeholder:text-soft-navy/40 focus:border-navy focus:ring-2 focus:ring-navy/10"
              />
            </div>

            <button
              type="submit"
              className="btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-dark-navy hover:shadow-lg hover:shadow-navy/25 sm:w-auto"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} aria-hidden />
                  Gönderildi!
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden />
                  Teklif Al
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            variants={slideInRight}
            {...reveal}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <div className="rounded-2xl bg-gradient-to-br from-navy to-dark-navy p-8 shadow-2xl shadow-navy/20 lg:p-10">
              <h2 className="mb-6 text-xl font-bold text-white">
                Bizimle İletişime Geçin
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:info@zentiatech.com"
                  className="flex items-start gap-4 text-white/80 transition-colors hover:text-white"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">E-posta</p>
                    <p className="text-sm font-medium">info@zentiatech.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-white/80">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Konum</p>
                    <p className="text-sm font-medium">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white">
                  Profesyonel yazılım ve teknoloji çözümleri
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Pazartesi – Cuma, 09:00 – 18:00
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section id="hizmetler" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          tag="Hizmetler"
          title="Uzmanlık Alanlarımız"
          description="Yazılım şirketi olarak kurumsal web tasarım, e-ticaret sitesi kurulumu, yapay zeka destekli yazılım, mobil uygulama geliştirme ve özel yazılım çözümleriyle dijital dönüşümünüzü güvenle yönetiyoruz."
        />

        <ServicesGrid />

        <p className="mt-10 text-center">
          <Link
            href="/hizmetler"
            className="text-sm font-semibold text-navy underline-offset-4 transition-colors hover:text-soft-navy hover:underline"
          >
            Tüm hizmetlerimizi detaylı inceleyin →
          </Link>
        </p>
      </div>
    </section>
  );
}

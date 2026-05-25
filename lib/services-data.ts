import {
  Globe,
  Smartphone,
  Brain,
  Palette,
  ShoppingCart,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: ServiceItem[] = [
  {
    icon: Globe,
    title: "Kurumsal Web Site Geliştirme",
    description:
      "Markanızı dijitalde güçlü temsil eden profesyonel web siteleri geliştiriyoruz. Kurumsal web tasarım, SEO uyumlu altyapı, hızlı yükleme ve ölçeklenebilir mimari ile işletmenizin dijital vitrinini modern standartlara taşıyoruz.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaTech kurumsal web site geliştirme ve profesyonel web sitesi çözümleri",
  },
  {
    icon: ShoppingCart,
    title: "E-Ticaret Çözümleri",
    description:
      "E-ticaret sitesi kurulumu ve yönetim paneli entegrasyonlarıyla satış süreçlerinizi dijitalleştiriyoruz. Ödeme, stok, kargo ve kampanya modülleriyle dönüşüm odaklı, güvenli ve ölçeklenebilir e-ticaret altyapıları sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaTech e-ticaret sitesi kurulumu ve online satış platformu geliştirme",
  },
  {
    icon: Brain,
    title: "Yapay Zeka Destekli Yazılımlar",
    description:
      "Yapay zeka destekli yazılım çözümleriyle iş süreçlerinizi otomatikleştiriyor, verilerinizden anlamlı içgörüler üretiyoruz. Özel modeller, akıllı raporlama ve karar destek sistemleri ile dijital dönüşümünüzü hızlandırıyoruz.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaTech yapay zeka destekli yazılım ve teknoloji çözümleri",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    description:
      "iOS ve Android için mobil uygulama geliştirme hizmetleri sunuyoruz. Kullanıcı odaklı arayüzler, yüksek performans ve güvenli API entegrasyonlarıyla markanızı her an kullanıcılarınızın yanına taşıyoruz.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaTech mobil uygulama geliştirme hizmetleri",
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description:
      "UI UX tasarım süreçlerinde kullanıcı araştırması, wireframe ve prototipleme ile ürün deneyimini güçlendiriyoruz. Markanıza özel, modern ve dönüşüm odaklı arayüzler tasarlıyoruz.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaTech UI UX tasarım ve kurumsal arayüz tasarımı",
  },
  {
    icon: Gamepad2,
    title: "Oyun Geliştirme",
    description:
      "ZentiaGame markamızla oyun geliştirme, interaktif deneyimler ve çok oyunculu sistemler üretiyoruz. Unity, WebGL ve ölçeklenebilir sunucu altyapılarıyla dijital eğlence projelerinizi hayata geçiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ZentiaGame oyun geliştirme ve interaktif deneyim projeleri",
  },
];

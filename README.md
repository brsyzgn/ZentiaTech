# ZentiaTech — Kurumsal Web Sitesi

Modern, responsive ve animasyonlu ZentiaTech kurumsal yazılım şirketi web sitesi.

## Teknolojiler

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React** (ikonlar)

## Başlangıç

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Hero Video

Hero bölümünde arka plan videosu:

```
public/videos/Z.mp4
```

Video yüklenemezse otomatik olarak navy gradient fallback gösterilir.

## Proje Yapısı

```
components/
  Navbar.tsx      # Sticky navigasyon
  Hero.tsx        # Tam ekran hero + video
  Services.tsx    # Hizmet kartları
  WhyUs.tsx       # Neden ZentiaTech + sayaçlar
  Projects.tsx    # Portfolio
  About.tsx       # Hakkımızda
  Process.tsx     # Süreç timeline
  Contact.tsx     # İletişim formu
  Footer.tsx      # Footer
app/
  layout.tsx      # SEO meta + font
  page.tsx        # Ana sayfa
  globals.css     # Tema renkleri
```

## Renk Paleti

| Renk       | Hex       |
|------------|-----------|
| White      | `#FFFFFF` |
| Navy       | `#0B1F3A` |
| Dark Navy  | `#071426` |
| Soft Navy  | `#132B4F` |
| Light Gray | `#F5F7FA` |

## Build

```bash
npm run build
npm start
```

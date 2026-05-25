import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata("home");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

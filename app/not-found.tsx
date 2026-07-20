import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | ZentiaTech",
  description:
    "The page you requested was not found. Return to ZentiaTech (Zentia Tech) home or explore our services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-sm font-semibold tracking-wide text-navy/50 uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-soft-navy/75">
        ZentiaTech (Zentia Tech) could not find this URL. Try the home page or
        browse our services.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy"
        >
          Services
        </Link>
        <Link
          href="/about-zentiatech"
          className="rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy"
        >
          What is ZentiaTech?
        </Link>
      </div>
    </main>
  );
}

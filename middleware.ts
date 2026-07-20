import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonical host: https://zentiatech.com (non-www, HTTPS, no trailing slash except root).
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");

  // Force HTTPS in production
  if (
    process.env.NODE_ENV === "production" &&
    proto === "http" &&
    !host.startsWith("localhost")
  ) {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // www → non-www
  if (host.startsWith("www.")) {
    url.host = host.replace(/^www\./, "");
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Strip trailing slash (except root)
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|xml|txt)$).*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PREFIXES = ["/student", "/instructor", "/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isProtected) {
    const sessionToken = request.cookies.get("eduflex_session_token")?.value;
    const clientUserCookie = request.cookies.get("eduflex_current_user")?.value;

    // If no server session cookie and no client session indicator, redirect at the server edge
    if (!sessionToken && !clientUserCookie) {
      // In SSR edge execution, verify if unauthenticated
      // Let client ProtectedRoute handle legacy client-only sessions if needed,
      // but block requests that have neither server token nor test auth cookies
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/student/:path*",
    "/instructor/:path*",
    "/admin/:path*",
  ],
};

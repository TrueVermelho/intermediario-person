import { adminAuth } from "@/lib-server/middleware/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // força rodar no Node runtime

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = await adminAuth.verifyIdToken(token);

    // Custom Claim: precisa existir no Firebase
    const role = decoded.role || "user";

    // Protege rotas admin
    if (req.nextUrl.pathname.startsWith("/api/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/403", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("TOKEN INVALIDO:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/api/admin/:path*",
  ],
};

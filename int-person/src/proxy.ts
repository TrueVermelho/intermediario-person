import { adminGuard } from "@/lib-server/middleware/adminGuard";
import { authGuard } from "@/lib-server/middleware/authGuard";
import { getToken } from "@/lib-server/middleware/getToken";
import { NextResponse, type NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  const token = getToken(req);

  // TOKEN ausente
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // VALIDAÇÃO GLOBAL DO TOKEN
  const decoded = authGuard(req, token);
  if (decoded instanceof NextResponse) {
    return decoded;
  }

  // RBAC somente para rotas admin
  if (pathname.startsWith("/api/admin")) {
    const result = adminGuard(req, token);
    if (result instanceof NextResponse) {
      return result;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/api/admin/:path*",
  ],
};

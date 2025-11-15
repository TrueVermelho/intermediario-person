import { verifyPermission, verifyToken } from "@/lib-server/security/auth";
import { NextResponse, type NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  const token = req.cookies.get("token")?.value;

  // TOKEN
  if (!token) {
    console.warn("Sem token, redirecionando para /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    console.error("Token inválido ou expirado. Redirecionando...");
    const response = NextResponse.redirect(new URL("/login", req.url));

    response.cookies.delete("token");
    return response;
  }

  // RBAC
  if (pathname.startsWith("/api/admin")) {
    const canAccess = verifyPermission(token, "admin_access");

    if (!canAccess) {
      return NextResponse.json(
        { error: "Você não tem permissão para acessar esta rota." },
        { status: 403 }
      );
    }

    console.log("RBAC permitido → admin_access liberado.");
  }

  console.log("Usuário autenticado:", decoded);
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


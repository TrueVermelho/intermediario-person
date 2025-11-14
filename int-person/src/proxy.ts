import { verifyToken } from "@/lib-server/security/auth";
import { NextResponse, type NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

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

  console.log("Usuário autenticado:", decoded);
  return NextResponse.next();
}

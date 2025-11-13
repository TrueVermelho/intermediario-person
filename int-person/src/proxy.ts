import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "./utils/security/auth"; // helper personalizado

export default async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // 🔒 Verifica se a rota é protegida
  const isProtected =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  // 🚫 Sem token → redireciona para login
  if (!token) {
    console.warn("Sem token, redirecionando para /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔍 Verifica validade do token
  const decoded = verifyToken(token);
  if (!decoded) {
    console.error("Token inválido ou expirado. Redirecionando...");
    const response = NextResponse.redirect(new URL("/login", req.url));

    // 🧹 Limpa cookie corrompido (opcional)
    response.cookies.delete("token");
    return response;
  }

  // ✅ Token válido → continua a requisição
  console.log("Usuário autenticado:", decoded);
  return NextResponse.next();
}

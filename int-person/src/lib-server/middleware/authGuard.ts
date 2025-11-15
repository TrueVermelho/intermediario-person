import { verifyToken } from "@/lib-server/security/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function authGuard(req: NextRequest, token: string) {
  const decoded = verifyToken(token);

  if (!decoded) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  }

  return decoded;
}

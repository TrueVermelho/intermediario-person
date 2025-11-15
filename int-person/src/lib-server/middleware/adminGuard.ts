import { verifyPermission } from "@/lib-server/security/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function adminGuard(req: NextRequest, token: string) {
  const canAccess = verifyPermission(token, "admin_access");

  if (!canAccess) {
    return NextResponse.json(
      { error: "Você não tem permissão para acessar esta rota." },
      { status: 403 }
    );
  }

  return true;
}

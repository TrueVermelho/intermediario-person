import { type NextRequest } from "next/server";

export function getToken(req: NextRequest): string | null {
  return req.cookies.get("token")?.value || null;
}

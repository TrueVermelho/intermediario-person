import { adminAuth } from "@/lib-server/middleware/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "Missing token" },
        { status: 400 }
      );
    }

    // 🔐 Verifica se o token é válido e não está expirado
    const decoded = await adminAuth.verifyIdToken(token, true).catch(() => null);

    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Criar resposta JSON
    const res = NextResponse.json({ ok: true });

    // 🔐 Define cookie seguro
    res.cookies.set({
      name: "session_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 3, // 3 dias (mais seguro que 7)
    });

    return res;
  } catch (err) {
    console.error("ERROR SETTING COOKIE:", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

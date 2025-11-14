import { generateToken } from "@/lib-server/security/auth";
import { validarEmail } from "@/lib-server/validator/validarEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const emailValidado = validarEmail(email);

  // ⚙️ Autenticação simples (substitua por verificação real)
  if (emailValidado === "admin@email.com" && password === "123") {
    const token = generateToken({ email: emailValidado });

    const response = NextResponse.json({
      success: true,
      message: "Login bem-sucedido",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Credenciais inválidas" },
    { status: 401 }
  );
}

import { validarEmail } from "@/lib-server/validator/validarEmail";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const emailValidado = validarEmail(email);

    if (emailValidado === "admin@email.com" && password === "123") {
      const SECRET = process.env.JWT_SECRET;

      if (!SECRET) {
        console.error("Erro: JWT_SECRET não configurado nas variáveis de ambiente.");
        return NextResponse.json(
          { success: false, message: "Erro interno: JWT_SECRET não configurado" },
          { status: 500 }
        );
      }

      const token = jwt.sign(
        { email: emailValidado }, // payload
        SECRET,
        { expiresIn: "7d" }
      );

      const response = NextResponse.json({ success: true, message: "Login bem-sucedido" });

      response.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    // Credenciais incorretas
    return NextResponse.json(
      { success: false, message: "Credenciais inválidas" },
      { status: 401 }
    );
  } catch (err: unknown) {
    console.error("Erro no login:", err);

    const message = err instanceof Error ? err.message : "Erro interno do servidor";

    return NextResponse.json(
      { success: false, message },
      { status: 400 }
    );
  }
}

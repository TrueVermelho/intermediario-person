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
        return NextResponse.json(
          { success: false, message: "Erro interno: JWT_SECRET não configurado" },
          { status: 500 }
        );
      }

      const token = jwt.sign({ email: emailValidado }, SECRET, { expiresIn: "7d" });
      const response = NextResponse.json({ success: true });

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
  } catch (err: unknown) {
    console.error("Erro no login:", err);

    let message = "Erro interno do servidor";
    if (err instanceof Error) {
      message = err.message;
    }

    return NextResponse.json(
      { success: false, message },
      { status: 400 }
    );
  }
}

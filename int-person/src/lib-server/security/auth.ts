import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("❌ JWT_SECRET não definido nas variáveis de ambiente.");
}

// 🔑 Tipo do payload que vamos guardar no token
export interface UserPayload {
  userId?: string;
  email?: string;
  role?: string;
}

export function generateToken(payload: UserPayload) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, SECRET) as UserPayload;
  } catch (err) {
    console.warn("Erro ao verificar token:", err);
    return null;
  }
}

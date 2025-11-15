import jwt from "jsonwebtoken";
import { roles, type Role } from './roles';

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("❌ JWT_SECRET não definido nas variáveis de ambiente.");
}

export interface UserPayload {
  userId?: string;
  email?: string;
  role: Role; // agora é o union literal
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

export function verifyPermission(token: string, action: string): boolean {
  try {
    const decoded = jwt.verify(token, SECRET) as { role: Role };

    const permissions = roles[decoded.role];
    if (!permissions) return false;

    return permissions.includes(action);
  } catch {
    return false;
  }
}

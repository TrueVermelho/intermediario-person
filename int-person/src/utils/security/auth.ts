import jwt, { JwtPayload } from 'jsonwebtoken';

// ⚙️ Garante que o SECRET seja sempre uma string
const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error('❌ JWT_SECRET não definido nas variáveis de ambiente.');
}

export function generateToken(userId: string) {
  return jwt.sign({ userId }, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): string | JwtPayload | null {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    console.warn('Erro ao verificar token:', err);
    return null;
  }
}

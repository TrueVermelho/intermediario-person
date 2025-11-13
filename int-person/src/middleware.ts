// src/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyToken } from './utils/security/auth'; // helper personalizado

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Se não houver token, redireciona
  if (!token) {
    console.warn('Sem token, redirecionando para /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verifica o token via helper
  const decoded = verifyToken(token);
  if (!decoded) {
    console.error('Token inválido ou expirado.');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // (Opcional) Loga informações do usuário autenticado
  console.log('Usuário autenticado:', decoded);

  return NextResponse.next();
}

// ✅ Define em quais rotas o middleware roda
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};

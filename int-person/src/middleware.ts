import { NextResponse, type NextRequest } from 'next/server';
import { verifyToken } from './utils/security/auth'; // helper personalizado

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // 🔒 Sem token: redireciona para /login
  if (!token) {
    console.warn('Sem token, redirecionando para /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 🔍 Verifica validade do token
  const decoded = verifyToken(token);
  if (!decoded) {
    console.error('Token inválido ou expirado. Redirecionando...');
    const response = NextResponse.redirect(new URL('/login', request.url));

    // Opcional: limpa cookie corrompido
    response.cookies.delete('token');

    return response;
  }

  // ✅ Usuário autenticado
  console.log('Usuário autenticado:', decoded);

  return NextResponse.next();
}

// ✅ Define as rotas protegidas
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};

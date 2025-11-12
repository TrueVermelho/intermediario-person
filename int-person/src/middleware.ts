import { verify } from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// MIDDLEWARE VERIFICA SE ESTA LOGADO
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const secret = process.env.JWT_SECRET;

  // Se não tiver token ou secret, redireciona para login
  if (!token || !secret) {
    if (request.nextUrl.pathname.startsWith('/dashboard') || 
        request.nextUrl.pathname.startsWith('/profile') ||
        request.nextUrl.pathname.startsWith('/settings')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    verify(token, secret);
    return NextResponse.next();
  } catch (error: unknown) {
    console.error('JWT verification failed:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Define em quais rotas o middleware deve rodar
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};


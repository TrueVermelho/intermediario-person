// src/app/api/login/route.ts
import { generateToken } from '@/utils/security/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simulação de validação
  if (email === 'teste@user.com' && password === '123') {
    const token = generateToken('12345'); // ID fictício

    const res = NextResponse.json({ success: true });
    res.cookies.set('token', token, {
      httpOnly: true,
      secure: true,         // só via HTTPS
      sameSite: 'strict',   // protege contra CSRF
      path: '/',            // cookie global
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return res;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

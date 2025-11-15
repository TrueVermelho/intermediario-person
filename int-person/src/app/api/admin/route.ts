import { verifyPermission, verifyToken } from '@/lib-server/security/auth';

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization');

  // Se não tiver token → 401
  if (!authHeader) {
    return new Response(
      JSON.stringify({ error: "Token ausente" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = authHeader.split(" ")[1];

  // Primeiro valida o token
  const decoded = verifyToken(token);
  if (!decoded) {
    return new Response(
      JSON.stringify({ error: "Token inválido ou expirado" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // RBAC
  const allowed = verifyPermission(token, "create_user");
  if (!allowed) {
    return new Response(
      JSON.stringify({ error: "Acesso negado: você não pode criar usuários" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  // Se passou por tudo, é admin ou tem permissão create_user
  return new Response(
    JSON.stringify({ message: "Usuário criado com sucesso" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

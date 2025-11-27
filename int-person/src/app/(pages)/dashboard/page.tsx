"use client";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;

  return <h1>Bem-vindo {user.email}</h1>;
}

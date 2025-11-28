'use clients';

import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {

  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;

  return (
    <>
    </>
  );
}

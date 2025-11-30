'use clients';

import ClientsForm from "@/components/paginas/clients/clientsForm";
import { useAuth } from "@/hooks/useAuth";

export default function Clients() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;

  return (
    <>
      <ClientsForm />
    </>
  );
}

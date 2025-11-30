'use clients';

import DashboardForm from "@/components/paginas/dashboard/dashboardForm";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;

  return (
    <>
      <DashboardForm />
    </>
  );
}

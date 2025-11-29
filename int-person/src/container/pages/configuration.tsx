'use client';

import ConfigurationForm from "@/components/pages/configuration/configurationForm";
import { useAuth } from "@/hooks/useAuth";

export default function Configuration() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;
  return (
    <>
      <ConfigurationForm />
    </>
  );
}

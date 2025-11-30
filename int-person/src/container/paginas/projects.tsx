'use clients';

import ProjectsForm from "@/components/paginas/projects/projectsForm";
import { useAuth } from "@/hooks/useAuth";

export default function Projects() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <p>Você não está logado.</p>;

  return (
    <>
      <ProjectsForm />
    </>
  );
}

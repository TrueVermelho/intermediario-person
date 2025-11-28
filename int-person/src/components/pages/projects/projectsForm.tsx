'use clients';

import MobileNav from '@/components/pages/body/navegador/mobile-nav';
import SidebarNav from '@/components/pages/body/sidebar/sidebar-nav';
import TopbarNav from '@/components/pages/body/topbar/topbar-nav';
import { useState } from 'react';
import './styleProjectsForm.css';

export default function ProjectsForm() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page={'projects'} />

      {/* MAIN */}
      <main className="main">

        <TopbarNav />

        <button className="add-btn">+ Novo Projeto</button>

        <table className="project-table">
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Status</th>
              <th>Responsável</th>
              <th>Início</th>
              <th>Previsão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Residencial Aurora</td>
              <td className="status andamento">Em andamento</td>
              <td>Marcos Silva</td>
              <td>01/10/2025</td>
              <td>15/02/2026</td>
            </tr>

            <tr>
              <td>Loja Comercial Center</td>
              <td className="status concluido">Concluído</td>
              <td>Carla Souza</td>
              <td>10/05/2025</td>
              <td>22/09/2025</td>
            </tr>

            <tr>
              <td>Condomínio Palmas</td>
              <td className="status aguardando">Aguardando</td>
              <td>Bruno Rocha</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

      </main>
    </>
  );
}

'use client';

import MobileNav from '@/components/paginas/body/navegador/mobile-nav';
import SidebarNav from '@/components/paginas/body/sidebar/sidebar-nav';
import TopbarNav from '@/components/paginas/body/topbar/topbar-nav';
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
      <SidebarNav open={open} page="projects" />

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
              <td data-label="Projeto">Residencial Aurora</td>
              <td data-label="Status" className="status andamento">Em andamento</td>
              <td data-label="Responsável">Marcos Silva</td>
              <td data-label="Início">01/10/2025</td>
              <td data-label="Previsão">15/02/2026</td>
            </tr>

            <tr>
              <td data-label="Projeto">Residencial Aurora</td>
              <td data-label="Status" className="status andamento">Em andamento</td>
              <td data-label="Responsável">Marcos Silva</td>
              <td data-label="Início">01/10/2025</td>
              <td data-label="Previsão">15/02/2026</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

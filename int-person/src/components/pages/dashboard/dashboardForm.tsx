'use client';

import MobileNav from '@/components/pages/body/navegador/mobile-nav';
import SidebarNav from '@/components/pages/body/sidebar/sidebar-nav';
import TopbarNav from '@/components/pages/body/topbar/topbar-nav';
import { useState } from 'react';
import './styleDashboardForm.css';

export default function DashboardForm() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page={'dashboard'} />

      {/* MAIN */}
      <main className="main">

        <TopbarNav />

        {/*Cards */}
        <div className="cards">
          <div className="card"><h3>Projetos Ativos</h3><span>12</span></div>
          <div className="card"><h3>Serviços Pendentes</h3><span>8</span></div>
          <div className="card"><h3>Clientes</h3><span>34</span></div>
          <div className="card"><h3>Faturamento Mensal</h3><span>R$ 27.400</span></div>
        </div>

        {/*Serviços */}
        <div className="services">
          <h2>Serviços Recentes</h2>
          <table className="service-table">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Status</th>
                <th>Responsável</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Fundação Residencial</td><td>Em andamento</td><td>Marcos Silva</td><td>12/11/2025</td></tr>
              <tr><td>Reforma de Banheiro</td><td>Concluído</td><td>Carla Souza</td><td>10/11/2025</td></tr>
              <tr><td>Construção de Muro</td><td>Aguardando</td><td>Bruno Rocha</td><td>08/11/2025</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

'use client';

import { useState } from 'react';
import './styleDashboardForm.css';

export default function DashboardForm() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);

    const overlay = document.getElementById("sidebar-overlay");
    if (overlay) overlay.classList.toggle("show");
  }

  return (
    <>
      {/* MOBILE NAV */}
      <div className="mobile-nav">
        <h2>Construtora</h2>

        <button className="menu-btn" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      <div id="sidebar-overlay" className="sidebar-overlay" onClick={toggleMenu}></div>

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? 'open' : ''}`} id="sidebar">
        <h2>Construtora</h2>
        <ul>
          <li><a href="/" target="_blank">HOME</a></li>
          <li><a style={{ color: '#4CAF50' }}>Dashboard</a></li>
          <li><a href="/projects">Projetos</a></li>
          <li><a href="/clients">Clientes</a></li>
          <li><a href="/financeiro">Financeiro</a></li>
          <li><a href="/configurations">Configurações</a></li>
          <br />
          <li>
            <a
              href="../services/services.html"
              target="_blank"
              style={{ color: '#c7ae23' }}
            >
              🛠 Serviços
            </a>
          </li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="main">

        {/*Topbar */}
        <div className="topbar">
          <h1>Dashboard</h1>
          <div className="profile">Olá, Usuário</div>
        </div>

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

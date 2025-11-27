'use client';

import './styleSidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <h2>Construtora</h2>
      <ul>
        <li><a href="../../index.html" target="_blank">HOME</a></li>
        <li><a href="../dashboard/dashboard.html" style={{ color: '#4CAF50' }}>Dashboard</a></li>
        <li><a href="../projects/projects.html">Projetos</a></li>
        <li><a href="../clients/clients.html">Clientes</a></li>
        <li><a href="../financeiro/financeiro.html">Financeiro</a></li>
        <li><a href="../configurations/configuration.html">Configurações</a></li>
        <br />
        <li><a href="../services/services.html" target="_blank" style={{ color: '#c7ae23' }}>🛠 Serviços</a></li>
      </ul>
    </aside>
  );
}

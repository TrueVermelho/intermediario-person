'use client';

import './styleSidebarNav.css';

interface SidebarNavProps {
  page: string;
  open: boolean;
}

export default function SidebarNav({ open, page }: SidebarNavProps) {
  return (
    <>
      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? 'open' : ''}`} id="sidebar">
        <h2>Construtora</h2>

        <ul>
          <li>
            <a
              href="/"
              target="_blank"
              style={{ color: '#c7ae23' }}
            > Home
            </a>
          </li>

          <li>
            <a
              href="/dashboard"
              style={page === 'dashboard' ? { color: '#4CAF50' } : {}}
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="/projects"
              style={page === 'projects' ? { color: '#4CAF50' } : {}}
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="/clients"
              style={page === 'clients' ? { color: '#4CAF50' } : {}}
            >
              Clientes
            </a>
          </li>

          <li>
            <a
              href="/financeiro"
              style={page === 'financeiro' ? { color: '#4CAF50' } : {}}
            >
              Financeiro
            </a>
          </li>

          <li>
            <a
              href="/configurations"
              style={page === 'configurations' ? { color: '#4CAF50' } : {}}
            >
              Configurações
            </a>
          </li>

          <br />

          <li>
            <a
              href="../services/services.html"
              target="_blank"
              style={{ color: '#c7ae23' }}
            > 🛠 Serviços
            </a>
          </li>

        </ul>
      </aside>
    </>
  );
}

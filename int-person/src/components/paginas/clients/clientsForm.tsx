'use client';

import MobileNav from '@/components/paginas/body/navegador/mobile-nav';
import SidebarNav from '@/components/paginas/body/sidebar/sidebar-nav';
import { useState } from 'react';
import './styleClientsForm.css';

export default function ClientsForm() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page="clients" />

      {/* MAIN */}
      <main className="main">
        <div className="topbar">
          <h1>Clientes</h1>
          <div className="profile">Olá, Usuário</div>
        </div>

        <button className="add-btn">+ Novo Cliente</button>

        <table className="client-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Cidade</th>
              <th>Projetos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="client-row">
              <td className="client-name" data-label="Nome">Marcos Almeida</td>
              <td className="client-phone" data-label="Telefone">(11) 99845-2301</td>
              <td className="client-email" data-label="Email">marcos@gmail.com</td>
              <td className="client-city" data-label="Cidade">São Paulo</td>
              <td className="client-project" data-label="Projetos">Residencial Aurora</td>
            </tr>

            <tr className="client-row">
              <td className="client-name" data-label="Nome">Ana Vitória</td>
              <td className="client-phone" data-label="Telefone">(21) 98766-1144</td>
              <td className="client-email" data-label="Email">ana_v@gmail.com</td>
              <td className="client-city" data-label="Cidade">Rio de Janeiro</td>
              <td className="client-project" data-label="Projetos">Condomínio Palmas</td>
            </tr>

            <tr className="client-row">
              <td className="client-name" data-label="Nome">Empresa Litoral Obras</td>
              <td className="client-phone" data-label="Telefone">(47) 91234-5533</td>
              <td className="client-email" data-label="Email">contato@litoralobras.com</td>
              <td className="client-city" data-label="Cidade">Florianópolis</td>
              <td className="client-project" data-label="Projetos">Loja Comercial Center</td>
            </tr>
          </tbody>
        </table>

      </main>
    </>
  );
}

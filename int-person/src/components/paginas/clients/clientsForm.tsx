'use client';

import MobileNav from '@/components/paginas/body/navegador/mobile-nav';
import SidebarNav from '@/components/paginas/body/sidebar/sidebar-nav';
import { ChangeEvent, FormEvent, useState } from 'react';
import './styleClientsForm.css';

export default function ClientsForm() {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([
    { name: 'Marcos Almeida', phone: '(11) 99845-2301', email: 'marcos@gmail.com', city: 'São Paulo', project: 'Residencial Aurora' },
    { name: 'Ana Vitória', phone: '(21) 98766-1144', email: 'ana_v@gmail.com', city: 'Rio de Janeiro', project: 'Condomínio Palmas' },
    { name: 'Empresa Litoral Obras', phone: '(47) 91234-5533', email: 'contato@litoralobras.com', city: 'Florianópolis', project: 'Loja Comercial Center' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    project: ''
  });

  function toggleMenu() {
    setOpen(!open);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setClients([...clients, formData]);
    setFormData({ name: '', phone: '', email: '', city: '', project: '' });
    setShowForm(false);
  }

  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page="clients" />

      <main className="main">
        <div className="topbar">
          <h1>Clientes</h1>
          <div className="profile">Olá, Usuário</div>
        </div>

        <button className="add-btn" onClick={() => setShowForm(!showForm)}>+ Novo Cliente</button>

        {showForm && (
          <form className="client-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="project"
              placeholder="Projetos"
              value={formData.project}
              onChange={handleChange}
              required
            />
            <button type="submit">Adicionar Cliente</button>
          </form>
        )}

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
            {clients.map((client, index) => (
              <tr key={index} className="client-row">
                <td className="client-name" data-label="Nome">{client.name}</td>
                <td className="client-phone" data-label="Telefone">{client.phone}</td>
                <td className="client-email" data-label="Email">{client.email}</td>
                <td className="client-city" data-label="Cidade">{client.city}</td>
                <td className="client-project" data-label="Projetos">{client.project}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>
    </>
  );
}

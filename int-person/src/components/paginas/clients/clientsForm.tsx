'use client';

import MobileNav from '@/components/paginas/body/navegador/mobile-nav';
import SidebarNav from '@/components/paginas/body/sidebar/sidebar-nav';

import { database } from "@/lib/firebase";
import { push, ref } from "firebase/database";

import Client from '@/components/paginas/clients/services/Client';
import { ClientsReader } from '@/components/paginas/clients/services/clientsReader';
import { ClientsService } from '@/components/paginas/clients/services/clientsService';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './styleClientsForm.css';

export default function ClientsForm() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [clients, setClients] = useState<Client[]>([]);
  const [formData, setFormData] = useState<Client>({
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const clientsRef = ref(database, "clients");
      await push(clientsRef, formData);

      // esconde formulario
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        project: ''
      });

      setShowForm(false);
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
    }
  }

  // Ler clients
  useEffect(() => {
    const reader = new ClientsReader();
    const stop = reader.listen(setClients);

    return () => stop();
  }, []);

  // CRUD
  const clientService = new ClientsService();
  function apagarCliente(id: string) { clientService.delete(id); }
  function updateCliente(id: string, data: Partial<Client>) { clientService.update(id, data); }


  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page="clients" />

      <main className="main">
        <div className="topbar">
          <h1>Clientes</h1>
          <div className="profile">Olá, Usuário</div>
        </div>

        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
          + Novo Cliente
        </button>

        {/* Formulário */}
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
            <p>🔗 Editar</p>

            <button type="submit">Adicionar Cliente</button>
          </form>
        )}

        {/* Tabela */}
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
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.city}</td>
                <td>{client.project}</td>

                <td>
                  <button onClick={() => apagarCliente(client.id)}>🗑️</button>
                  {/*<button onClick={() => updateCliente(client.id, client)}>🔧</button>*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

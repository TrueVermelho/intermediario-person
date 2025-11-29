'use client';

import MobileNav from '@/components/pages/body/navegador/mobile-nav';
import SidebarNav from '@/components/pages/body/sidebar/sidebar-nav';
import { useState } from 'react';
import './styleConfigurationForm.css';

export default function ConfigurationForm() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <MobileNav open={open} toggleMenu={toggleMenu} />
      <SidebarNav open={open} page="configuration" />

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <h1>Configurações do Sistema</h1>
          <div>Usuário</div>
        </div>

        {/* EMPRESA */}
        <section className="section">
          <h2>Informações da Empresa</h2>
          <div className="form-grid">
            <div>
              <label>Nome da Empresa</label>
              <input type="text" placeholder="Construtora Exemplo LTDA" />
            </div>
            <div>
              <label>CNPJ</label>
              <input type="text" placeholder="00.000.000/0001-00" />
            </div>
            <div>
              <label>Telefone</label>
              <input type="text" placeholder="(11) 99999-9999" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="contato@empresa.com" />
            </div>
            <div style={{ gridColumn: "1 / 3" }}>
              <label>Endereço</label>
              <textarea placeholder="Rua X, Número Y, Bairro Z"></textarea>
            </div>
          </div>
          <button className="btn">Salvar Alterações</button>
        </section>

        {/* USUÁRIOS */}
        <section className="section">
          <h2>Gerenciamento de Usuários</h2>

          <button
            className="btn"
            onClick={() => alert('Aqui abriria o modal de novo usuário')}
          >
            + Novo Usuário
          </button>

          <div className="table-wrap" style={{ marginTop: "15px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Função</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Administrador</td>
                  <td>admin@sistema.com</td>
                  <td>
                    <span className="role role-admin">Admin</span>
                  </td>
                  <td>
                    <a href="#">Editar</a> | <a href="#">Remover</a>
                  </td>
                </tr>
                <tr>
                  <td>João Silva</td>
                  <td>joao@sistema.com</td>
                  <td>
                    <span className="role role-user">Usuário</span>
                  </td>
                  <td>
                    <a href="#">Editar</a> | <a href="#">Remover</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PREFERÊNCIAS */}
        <section className="section">
          <h2>Preferências do Sistema</h2>
          <div className="form-grid">
            <div>
              <label>Tema</label>
              <select>
                <option>Claro</option>
                <option>Escuro</option>
              </select>
            </div>
            <div>
              <label>Idioma</label>
              <select>
                <option>Português (BR)</option>
                <option>Inglês (EN)</option>
              </select>
            </div>
            <div>
              <label>Notificações</label>
              <select>
                <option>Ativadas</option>
                <option>Desativadas</option>
              </select>
            </div>
          </div>
          <button className="btn">Salvar Preferências</button>
        </section>

        {/* FINANCEIRO */}
        <section className="section">
          <h2>Preferências Financeiras</h2>
          <div className="form-grid">
            <div>
              <label>Categoria Padrão</label>
              <input type="text" placeholder="Ex: Materiais" />
            </div>
            <div>
              <label>Forma de Pagamento Padrão</label>
              <select>
                <option>Pix</option>
                <option>Boleto</option>
                <option>Cartão</option>
                <option>Transferência</option>
              </select>
            </div>
            <div style={{ gridColumn: "1 / 3" }}>
              <label>Observações para Relatórios</label>
              <textarea placeholder="Texto exibido no rodapé de relatórios"></textarea>
            </div>
          </div>
          <button className="btn">Salvar Configurações</button>
        </section>

        {/* INTEGRAÇÕES */}
        <section className="section">
          <h2>Integrações</h2>
          <div className="form-grid">
            <div>
              <label>WhatsApp API</label>
              <input type="text" placeholder="Token de integração" />
            </div>
            <div>
              <label>SMTP (E-mail)</label>
              <input type="text" placeholder="Servidor SMTP" />
            </div>
            <div style={{ gridColumn: "1 / 3" }}>
              <label>Chave de API Externa</label>
              <input type="text" placeholder="API Key" />
            </div>
          </div>
          <button className="btn">Salvar Integrações</button>
        </section>

        {/* SEGURANÇA */}
        <section className="section">
          <h2>Segurança</h2>
          <div className="form-grid">
            <div>
              <label>Autenticação 2FA</label>
              <select>
                <option>Desativada</option>
                <option>Google Authenticator</option>
              </select>
            </div>
            <div>
              <label>Log de Atividades</label>
              <select>
                <option>Ativado</option>
                <option>Desativado</option>
              </select>
            </div>
          </div>
          <button className="btn">Salvar Segurança</button>
        </section>
      </main>
    </>
  );
}

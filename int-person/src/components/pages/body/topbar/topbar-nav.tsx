'use clients';

import './styleTopbarNav.css';

export default function TopbarNav() {
  return (
    <>
      {/*Topbar */}
      <div className="topbar">
        <h1>Dashboard</h1>
        <div className="profile">Olá, Usuário</div>
      </div>
    </>
  );
}

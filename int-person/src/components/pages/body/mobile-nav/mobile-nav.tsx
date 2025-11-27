'use client';

import './styleMobileNav.css';

export default function MobileNav() {
  function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  }

  return (
    <div className="mobile-nav">
      <h2>Construtora</h2>

      <button className="menu-btn" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}

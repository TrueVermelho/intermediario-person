'use client';

import LogoutButton from '@/components/auth/logout/LogoutButton';
import './styleMobileNav.css';

interface MobileNavProps {
  open: boolean;
  toggleMenu: () => void;
}

export default function MobileNav({ open, toggleMenu }: MobileNavProps) {
  return (
    <>
      {/* MOBILE NAV */}
      <div className="mobile-nav">
        <h2>Construtora</h2>

        <button className="menu-btn" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
          <LogoutButton />
        </button>
      </div>

      <div
        id="sidebar-overlay"
        className={`sidebar-overlay ${open ? 'show' : ''}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}

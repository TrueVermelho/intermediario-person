"use client";

import { useEffect } from "react";
import { MenuController } from "./menuController";
import "./styleHeader.css";

export default function Header() {
  useEffect(() => {
    new MenuController(".menu-button");
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">SeuLogo</a>
        </div>

        <nav className="nav" id="mainMenu">
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <button
          className="menu-button"
          data-target="mainMenu"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

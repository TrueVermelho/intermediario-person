'use client';

import { dataYear } from "@/utils/data";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>SeuNome</h2>
          <p>Criando sites modernos e rápidos para o seu negócio.</p>
        </div>

        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <p>Email: <a href="mailto:seuemail@gmail.com">seuemail@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/5599999999999" target="_blank">(99) 99999-9999</a></p>
        </div>

        <div className="footer-social">
          <h3>Siga-me</h3>
          <div className="social-icons">
            <a href="https://instagram.com/seuinsta" target="_blank">
              <Image
                src="./img/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="https://facebook.com/seuface" target="_blank">
              <Image
                src="./img/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="https://youtube.com/seuyt" target="_blank">
              <Image
                src="./img/youtube.svg"
                alt="Youtube"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {dataYear()} SeuNome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

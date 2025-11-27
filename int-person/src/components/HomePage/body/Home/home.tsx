import Image from "next/image";
import './botao-media-print.css';
import './styleHome.css';

export default function Home() {
  return (
    <section className="home section background" id="home">
      <div className="overlay"></div>

      <div className="home-content">
        <div className="profile-img">
          <Image
            src="https://cdn.pixabay.com/photo/2025/10/14/15/49/leaf-9894303_1280.jpg"
            alt="Foto de Perfil"
            width={150}
            height={150}
          />
        </div>

        <h1>Olá, eu sou <span>NAME XXX</span></h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis maxime provident similique consectetur rem libero
          earum mollitia, eius accusantium error delectus cumque,
          totam cum natus adipisci officiis repellendus eum ducimus?
        </p>

        <div className="home-buttons">
          <button
            type="button"
            className="buttonDownload"
            onClick={() => window.print()}
          >
            Baixar Portfólio
          </button>
          <a
            href="https://wa.me/5599999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Básico%20do%20site."
            className="botao-home-secondary"
            target="_blank">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import Youtube from '@/components/HomePage/services/youtube/youtube';
import './styleSobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre section">

      <section className="sobre-container">
        <div className="sobre-conteudo">
          <div className="sobre-texto">
            <h2>Sobre o Projeto</h2>
            <p>
              Este site foi criado com o objetivo de compartilhar conhecimento e experiências sobre
              desenvolvimento web, design moderno e tecnologias digitais. A ideia é transformar ideias
              em soluções criativas e acessíveis, inspirando outras pessoas a aprender e construir.
            </p>
            <p>
              Aqui você encontrará conteúdos sobre HTML, CSS, JavaScript e muito mais, sempre com exemplos
              práticos e explicações simples. O foco é ajudar quem está começando e mostrar que qualquer
              um pode criar algo incrível na web.
            </p>
          </div>
        </div>
      </section>

      <Youtube />
    </section>
  );
}

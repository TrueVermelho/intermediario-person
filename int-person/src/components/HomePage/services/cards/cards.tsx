import Image from "next/image";
import './styleCards.css';

export default function Cards() {
  return (
    <section className="venda background" id="servicos">
      <div className="cardsContainer">

        <div className="cardVenda">
          <div className="cardImagem">
            <Image
              src="https://cdn.pixabay.com/photo/2025/10/14/15/49/leaf-9894303_1280.jpg"
              alt="Plano Básico"
              width={150}
              height={150}
            />
          </div>

          <div className="cardConteudo">
            <h3>Plano Básico</h3>
            <p>
              Perfeito para quem quer um site moderno e funcional com ótimo custo-benefício.
              Ideal para profissionais e pequenas empresas.
            </p>

            <ul className="cardLista">
              <li>✔ 1 página personalizada</li>
              <li>✔ Domínio e hospedagem</li>
              <li>✔ Formulário de contato</li>
              <li>✔ Suporte técnico mensal</li>
            </ul>

            <div className="cardPreco">
              <span className="preco">R$ 59<span>/mês</span></span>
            </div>

            <a
              href="https://wa.me/5599999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Básico%20do%20site."
              className="btnCard"
              target="_blank">
              Assinar Agora
            </a>
          </div>
        </div>

        <div className="cardVenda">
          <div className="cardImagem">
            <Image
              src="https://cdn.pixabay.com/photo/2025/10/14/15/49/leaf-9894303_1280.jpg"
              alt="Plano Básico"
              width={150}
              height={150}
            />
          </div>

          <div className="cardConteudo">
            <h3>Plano Básico</h3>
            <p>
              Perfeito para quem quer um site moderno e funcional com ótimo custo-benefício.
              Ideal para profissionais e pequenas empresas.
            </p>

            <ul className="cardLista">
              <li>✔ 1 página personalizada</li>
              <li>✔ Domínio e hospedagem</li>
              <li>✔ Formulário de contato</li>
              <li>✔ Suporte técnico mensal</li>
            </ul>

            <div className="cardPreco">
              <span className="preco">R$ 59<span>/mês</span></span>
            </div>

            <a
              href="https://wa.me/5599999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Básico%20do%20site."
              className="btnCard"
              target="_blank">
              Assinar Agora
            </a>
          </div>
        </div>

        <div className="cardVenda">
          <div className="cardImagem">
            <Image
              src="https://cdn.pixabay.com/photo/2025/10/14/15/49/leaf-9894303_1280.jpg"
              alt="Plano Básico"
              width={150}
              height={150}
            />
          </div>

          <div className="cardConteudo">
            <h3>Plano Básico</h3>
            <p>
              Perfeito para quem quer um site moderno e funcional com ótimo custo-benefício.
              Ideal para profissionais e pequenas empresas.
            </p>

            <ul className="cardLista">
              <li>✔ 1 página personalizada</li>
              <li>✔ Domínio e hospedagem</li>
              <li>✔ Formulário de contato</li>
              <li>✔ Suporte técnico mensal</li>
            </ul>

            <div className="cardPreco">
              <span className="preco">R$ 59<span>/mês</span></span>
            </div>

            <a
              href="https://wa.me/5599999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Básico%20do%20site."
              className="btnCard"
              target="_blank">
              Assinar Agora
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

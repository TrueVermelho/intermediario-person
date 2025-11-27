import './styleEmail.css';

export default function Email() {
  return (
    <form
      className="formEmail"
      action="https://formsubmit.co/seuemail@gmail.com"
      method="POST"
    >
      <h2 className="titleEmail">Fale Comigo</h2>

      <input
        className="nameEmail"
        type="text"
        name="name"
        placeholder="Seu nome"
        required
      />

      <input
        className="textEmail"
        type="email"
        name="email"
        placeholder="Seu e-mail"
        required
      />

      <textarea
        className="areaTextEmail"
        name="message"
        placeholder="Digite sua mensagem..."
        required
      ></textarea>

      <button className="buttonEmail" type="submit">
        Enviar Mensagem
      </button>

      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://seusite.github.io/obrigado.html"
      />
    </form>
  );
}

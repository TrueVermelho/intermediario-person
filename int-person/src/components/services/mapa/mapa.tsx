import "./styleMapa.css";

export default function Mapa() {
  return (
    <section className="mapSection">
      <h2 className="titleMap">📍 Encontre-nos</h2>

      <div className="mapWrapper">
        <iframe
          className="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8613038966993!2d-46.66224808502111!3d-23.57707396885145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d9d13b1b6b%3A0x9c4e2b72f1a7289d!2sPaulista%20Avenue!5e0!3m2!1sen!2sbr!4v1605881234567!5m2!1sen!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="mapDescription">
        Avenida Paulista, São Paulo - SP
        <br />
        Horário de atendimento: 9h às 18h, de segunda a sexta.
      </p>
    </section>
  );
}

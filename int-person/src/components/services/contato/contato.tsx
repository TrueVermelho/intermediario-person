import Email from "@/components/services/email/email";
import './styleContato.css';

export default function Contato() {
  return (
    <section className="social-section" id="contato">
      <div className="social-links">
        <a href="https://www.instagram.com/seuusuario" className="instagram" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/seuusuario" className="facebook" target="_blank">Facebook</a>
        <a href="https://www.youtube.com/@seuusuario" className="youtube" target="_blank">YouTube</a>
      </div>
      <Email />
    </section>
  );
}

import React from "react";
import "../style/AboutUsPage.css";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* IZQUIERDA */}
        <div className="contact-form-side">
          <h2>Solicita tu presupuesto sin compromiso Gratis</h2>

          <form className="contact-form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo" />
            <input type="tel" placeholder="Teléfono" />
            <textarea placeholder="Mensaje" rows={5} />

            <button type="submit" className="contact-btn">
              Enviar <span>→</span>
            </button>
          </form>
        </div>

        {/* DERECHA */}
        <div className="contact-info-side">
          <h2>Contacta con nuestro equipo</h2>

          <p>
            ¿Necesitas ayuda o saber más sobre nuestros servicios?
            Contáctanos sin compromiso y te asesoramos.
          </p>

          <div className="contact-item">
            <strong>📞 Llama:</strong> (+34) 689 342 821
          </div>

          <div className="contact-item">
            <strong>✉️ Email:</strong> info@lagalardonada.es
          </div>

          <div className="contact-item">
            <strong>🌐 Online:</strong> Haz clic para reservar tu servicio
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
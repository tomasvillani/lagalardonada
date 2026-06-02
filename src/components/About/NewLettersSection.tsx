import React from "react";
import "../../style/AboutUsPage.css";

const NewsletterSection: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-card">
        
        {/* IZQUIERDA */}
        <div className="newsletter-text">
          <h2>Suscríbete a nuestro Newsletter</h2>
          <p>
            Infórmate de nuestras últimas noticias y promociones suscribiéndote aquí.
          </p>
        </div>

        {/* DERECHA */}
        <form className="newsletter-form">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo electrónico" />

          <button type="submit" className="newsletter-btn">
            Suscribirse <span>→</span>
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterSection;
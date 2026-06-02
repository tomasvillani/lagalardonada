import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section className="info-contact-strip">

      <div className="info-contact-container">

        <div className="info-contact-item">
          <span className="icon">📞</span>
          <p>Llama: (+34) 689 342 821</p>
        </div>

        <div className="info-contact-item">
          <span className="icon">✉️</span>
          <p>Email: info@lagalardonada.es</p>
        </div>

        <div className="info-contact-item">
          <span className="icon">🌐</span>
          <p>Reserva tu servicio Online</p>
        </div>

      </div>

    </section>
  );
};

export default ContactInfo;
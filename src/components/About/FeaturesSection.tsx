import React from "react";
import "../../style/AboutUsPage.css";

const features = [
  {
    title: "Confianza & Experiencia",
    text: "En La Galardonada contamos con más de 25 años de experiencia en servicios de limpieza de sofás y colchones, lo que nos ha permitido consolidar la confianza de nuestros clientes.",
  },
  {
    title: "Eficacia & Comodidad",
    text: "Hemos perfeccionado nuestro método para ofrecer un servicio eficaz y cómodo a domicilio, oficina o centro de actividad, adaptándonos a las necesidades del cliente.",
  },
  {
    title: "Resultados garantizados",
    text: "Contamos con expertos y maquinaria de última generación que nos permite ofrecer servicios de calidad y resultados garantizados en cada intervención.",
  },
  {
    title: "Satisfacción del cliente",
    text: "La satisfacción del cliente es nuestra prioridad. Ofrecemos un servicio personalizado adaptado a sus necesidades y preferencias.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features">
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
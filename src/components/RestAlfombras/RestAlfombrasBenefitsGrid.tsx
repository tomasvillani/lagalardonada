import React from "react";

const benefits = [
  {
    title: "Profesionales Altamente Capacitados",
    text: "Nuestro equipo de expertos en restauración de alfombras en la Comunidad de Madrid está formado por profesionales altamente capacitados y con años de experiencia, garantizando resultados impecables."
  },
  {
    title: "Maestros Artesanos",
    text: "Nuestros equipos de maestros artesanos con su trabajo y experiencia garantizan el logro de un resultado inmejorable."
  },
  {
    title: "Personalización de Servicios",
    text: "Entendemos que cada alfombra es única. Adaptamos nuestros métodos de restauración al tipo y las necesidades específicas según el grado de deterioro de tus alfombras, considerando el tipo de tejido y el material del que dispone la propia pieza."
  },
  {
    title: "Servicio Rápido y Eficiente",
    text: "Nuestro compromiso es devolverte tus alfombras reparadas, restauradas y recuperadas en el menor tiempo posible, sin comprometer la calidad del trabajo."
  },
  {
    title: "Materiales Naturales y de Calidad",
    text: "Utilizamos fibras naturales de lana envejecida, seda tanto artificial como natural o de bambú, algodón, yute y diversos tipos de hilaturas."
  },
  {
    title: "Transparencia en los Precios",
    text: "Te proporcionamos presupuestos detallados para que sepas exactamente cuánto costará el servicio, sin sorpresas desagradables."
  },
  {
    title: "Atención Personalizada",
    text: "Cada cliente es único, por lo que ofrecemos una atención al cliente personalizada para satisfacer todas tus necesidades."
  },
  {
    title: "Amplia Cobertura en la Comunidad de Madrid",
    text: "Nuestros servicios de restauración de alfombras están disponibles en toda la Comunidad de Madrid, asegurando que llegamos a donde sea necesario."
  },
  {
    title: "Satisfacción Garantizada",
    text: "Nuestro compromiso es tu satisfacción. Si no quedas satisfecho con el resultado, haremos todo lo posible para corregirlo y asegurarnos de que tu alfombra esté en condiciones inmejorables."
  }
];

const RestAlfombrasBenefitsGrid: React.FC = () => {
  return (
    <section className="benefits-section">

      <div className="benefits-grid">

        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>

            <div className="benefit-title">
              <span className="check">✓</span>
              <h3>{item.title}</h3>
            </div>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default RestAlfombrasBenefitsGrid;
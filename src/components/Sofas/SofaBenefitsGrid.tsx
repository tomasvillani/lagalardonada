import React from "react";

const benefits = [
  {
    title: "Profesionales Altamente Capacitados",
    text: "Nuestro equipo de expertos en limpieza de sofás en la Comunidad de Madrid está formado por profesionales altamente capacitados y con años de experiencia, garantizando resultados impecables."
  },
  {
    title: "Tecnología de Limpieza de Vanguardia",
    text: "Tecnología de Limpieza de Vanguardia Utilizamos tecnología de limpieza de vanguardia que garantiza la eliminación de manchas, gérmenes y olores, dejando tus sofás como nuevos."
  },
  {
    title: "Personalización de Servicios",
    text: "Entendemos que cada sofá es único. Adaptamos nuestros métodos de limpieza a las necesidades específicas de tus muebles, considerando el tipo de tela o material."
  },
  {
    title: "Servicio Rápido y Eficiente",
    text: "Nuestro compromiso es devolverte tus sofás limpios y frescos en el menor tiempo posible, sin comprometer la calidad del trabajo"
  },
  {
    title: "Productos Biodegradables y Seguros",
    text: "Utilizamos productos de limpieza ecológicos y seguros, asegurando un entorno libre de productos químicos dañinos."
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
    text: "Nuestros servicios de limpieza de sofás a domicilio están disponibles en toda la Comunidad de Madrid, asegurando que llegamos a donde sea necesario."
  },
  {
    title: "Satisfacción Garantizada",
    text: "Estamos comprometidos con tu satisfacción. Si no quedas satisfecho con el resultado, haremos todo lo posible para corregirlo y asegurarnos de que tus sofás estén en perfectas condiciones."
  }
];

const SofaBenefitsGrid: React.FC = () => {
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

export default SofaBenefitsGrid;
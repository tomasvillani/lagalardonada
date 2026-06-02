import React from "react";
import "../style/AboutUsPage.css";

const OurDedication: React.FC = () => {
  return (
    <section className="our-dedication">
      <div className="our-dedication-image">
        <img
          src="/sobre-nosotros-2.jpeg"
          alt="Nuestra dedicación"
        />
      </div>

      <div className="our-dedication-content">
        <h2>Nuestra dedicación</h2>

        <p>
          En Limpiezas La Galardonada somos especialistas en limpieza de textiles,
          en concreto limpieza de sofás, colchones, cortinas y edredones.
          Nuestra profesionalidad y resultados vienen por más de 25 años de
          experiencia y formación en el sector textil.
          
          Hemos ideado una forma de ofrecer nuestros servicios pensando siempre en
          la comodidad del cliente, llegando a la solución de servicio a domicilio,
          realizando la limpieza in situ.
        </p>

        <ul>
          <li>Servicio de limpieza de sofás y colchones a domicilio (casa u oficina)</li>
          <li>Listo para usar en menos de 24h</li>
          <li>Tratamiento antiácaros</li>
          <li>Eliminación de malos olores</li>
          <li>Desinfección completa</li>
        </ul>

        <a href="/servicios" className="dedication-btn">
          Nuestros servicios <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default OurDedication;
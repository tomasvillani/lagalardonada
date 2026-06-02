import React from "react";
import SolicitarCitaButton from "../SolicitarCitaButton";

const ColchonesCleaningInfoSection: React.FC = () => {
  return (
    <section className="info">

      <div className="info-container">

        {/* IZQUIERDA */}
        <div className="info-left">
          <h2>
            Limpieza de Alfombras Recogida y Entrega Gratuita A Domicilio en Madrid – Resplandece con Nuestro Servicio a Domicilio
          </h2>

          <p>
            En Limpiezas La Galardonada, nos enorgullece ofrecer un servicio especializado de limpieza de alfombras en la Comunidad de Madrid.
            Recupera la belleza original de tus alfombras con nuestro equipo profesional y la comodidad de un servicio a domicilio además de recogida y entrega a domicilio, incluye el montaje y desmontaje de la alfombra moviendo el mobiliario necesario.
          </p>
        </div>

        {/* DERECHA */}
        <div className="info-right">

          <h4 className="price-title">Limpieza de alfombras Precios</h4>

          <p style={{ fontSize: "0.9rem", marginBottom: "0.8rem", color: "#555" }}>
            Precios desde, según el tipo de alfombra
          </p>

          <div className="price">
            <span className="currency">€</span>
            <span className="amount">9,95</span>
            <span className="unit">/Metro cuadrado</span>
          </div>

          <ul>
            <li>Limpieza con productos biodegradable</li>
            <li>Desinfección y tratamientos anti ácaros</li>
            <li>Eliminar malos olores</li>
            <li>Tratamiento de manchas</li>
            <li>IVA no Incluido</li>
          </ul>

          <div className="info-action">
            <SolicitarCitaButton texto="Solicitar servicio"/>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ColchonesCleaningInfoSection;
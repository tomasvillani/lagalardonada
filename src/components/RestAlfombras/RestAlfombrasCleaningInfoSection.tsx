import React from "react";
import SolicitarCitaButton from "../SolicitarCitaButton";

const RestAlfombrasCleaningInfoSection: React.FC = () => {
  return (
    <section className="info">

      <div className="info-container">

        {/* IZQUIERDA */}
        <div className="info-left">
          <h2>Dale una Nueva Vida: Restauración y Reparación de Alfombras a tu Medida</h2>

          <h3>Recupera la esencia de tus alfombras favoritas</h3>

          <p>
            Recupera la esencia de tus alfombras favoritas con nuestro servicio exclusivo de
            restauración y reparación. Desde la restauración de destejidos hasta la reparación
            de los rotos más complejos, nuestro equipo de expertos artesanos trabaja
            incansablemente para devolverles su antiguo esplendor.
          </p>

          <p>
            Confía en nosotros para transformar tus alfombras en piezas únicas y atemporales
            que contarán historias por generaciones.
          </p>
        </div>

        {/* DERECHA */}
        <div className="info-right">

          <h4 className="price-title">Restauración de alfombras</h4>

          <div className="price">
            <span className="currency">€</span>
            <span className="amount">0</span>
            <span className="unit">/A consultar</span>
          </div>

          <ul>
            <li>Rotos, destejidos, enmascarar, ribetes, cadeneta, etc.</li>
            <li>Restauración de orillas y flecos</li>
            <li>Tratamiento de manchas</li>
            <li>Tratamiento de látex</li>
            <li>Cortar a medida</li>
            <li>Restauración de quemaduras</li>
            <li>Corrección de forro</li>
            <li>Tratamiento de tintes y desteñidos</li>
            <li>Teñir la fibra de la propia alfombra</li>
          </ul>

          <div className="info-action">
            <SolicitarCitaButton texto="Solicitar servicio"/>
          </div>

        </div>

      </div>

    </section>
  );
};

export default RestAlfombrasCleaningInfoSection;
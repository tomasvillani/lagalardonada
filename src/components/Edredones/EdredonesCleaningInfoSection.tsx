import React from "react";
import SolicitarCitaButton from '../SolicitarCitaButton'

const EdredonesCleaningInfoSection: React.FC = () => {
  return (
    <section className="info">

      <div className="info-container">

        {/* IZQUIERDA */}
        <div className="info-left">
          <h2>Limpieza de Edredones a Domicilio en Madrid –</h2>

          <h3>Renueva tu Confort de Manera Sencilla</h3>

          <p>
            ¿Cansado de lidiar con edredones sucios y difíciles de lavar? En La Galardonada,
            te ofrecemos la solución perfecta. Somos expertos en limpieza de edredones con
            servicio a domicilio en la Comunidad de Madrid.
          </p>

          <p>
            Descubre cómo podemos devolver la frescura y comodidad a tu descanso.
          </p>
        </div>

        {/* DERECHA */}
        <div className="info-right">

          <h4 className="price-title">Limpieza de edredones precio</h4>

          <div className="price">
            <span className="currency">€</span>
            <span className="amount">20</span>
            <span className="unit">/Unidad</span>
          </div>

          <ul>
            <li>Limpieza con productos biodegradables</li>
            <li>Desinfección y tratamiento antiácaros</li>
            <li>Eliminación de malos olores</li>
            <li>Tratamiento de manchas</li>
          </ul>

          <div className="info-action">
            <SolicitarCitaButton texto="Solicitar servicio"/>
          </div>

        </div>

      </div>

    </section>
  );
};

export default EdredonesCleaningInfoSection;
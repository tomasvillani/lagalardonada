import React from "react";

const SofaCleaningInfoSection: React.FC = () => {
  return (
    <section className="info">

      <div className="info-container">

        {/* IZQUIERDA */}
        <div className="info-left">
          <h2>Limpieza de Sofás Madrid:</h2>

          <h3>Renueva tu Hogar con Elegancia y Comodidad</h3>

          <p>
            En Limpiezas La Galardonada, entendemos la importancia de mantener un hogar limpio
            y confortable. Los sofás son piezas clave de cualquier sala de estar y, con el
            tiempo, pueden acumular polvo, manchas y olores desagradables.
          </p>

          <p>
            Nuestro equipo de expertos en limpieza está listo para ayudarte a dar nueva vida
            a tus sofás sin que tengas que preocuparte por el traslado de muebles pesados.
          </p>
        </div>

        {/* DERECHA */}
        <div className="info-right">

          <h4 className="price-title">Limpieza de sofás a domicilio Precios</h4>

          <div className="price">
            <span className="currency">€</span>
            <span className="amount">44,95</span>
            <span className="unit">/plaza</span>
          </div>

          <ul>
            <li>Limpieza con productos biodegradables</li>
            <li>Desinfección y tratamiento antiácaros</li>
            <li>Eliminación de malos olores</li>
            <li>Tratamiento de manchas</li>
          </ul>

          <div className="info-action">
            <a href="/contacto" className="info-btn">
              Solicitar servicio
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SofaCleaningInfoSection;
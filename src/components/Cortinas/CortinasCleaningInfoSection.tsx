import React from "react";

const EdredonesCleaningInfoSection: React.FC = () => {
  return (
    <section className="info">

      <div className="info-container">

        {/* IZQUIERDA */}
        <div className="info-left">
          <h2>Nuestro Compromiso</h2>

          <p>
            En Limpiezas La Galardonada, entendemos que las cortinas son más que accesorios
            decorativos, y que mantenerlas limpias es esencial en nuestros hogares. Nuestro equipo
            profesional se compromete a ofrecer un servicio de limpieza de cortinas que preserve
            su frescura y elegancia, mejorando la calidad de tu hogar.
          </p>
        </div>

        {/* DERECHA */}
        <div className="info-right">

          <h4 className="price-title">Limpieza de Cortinas</h4>

          <div className="price">
            <span className="currency">€</span>
            <span className="amount">8</span>
            <span className="unit">/Metro Cuadrado</span>
          </div>

          <ul>
            <li>Limpieza con productos biodegradables</li>
            <li>Desinfección y tratamiento antiácaros</li>
            <li>Eliminación de malos olores</li>
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

export default EdredonesCleaningInfoSection;
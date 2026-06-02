import React from "react";

const SofaCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>Limpieza de sofás a domicilio Madrid</h1>

          <p>
            Servicio profesional de limpieza de Sofás. Con la dedicación y la experiencia
            en La Galardonada hemos perfeccionado nuestros métodos de limpieza de sofás
            para llevarlos a los hogares de los madrileños. Aprovecha nuestros servicios
            y disfruta de tu sofá limpio con La Galardonada.
          </p>
        </div>

        <div className="action">
          <a href="/contacto" className="btn">
            Contactar
          </a>
        </div>
      </div>

      {/* FILA 2 */}
      <div className="bottom">
        <div className="card">
          <h3>Comodidad</h3>
          <p>
            La principal ventaja es la comodidad de no tener que transportar tus sofás
            a una ubicación de limpieza, ya que el servicio se realiza en tu propio hogar.
          </p>
        </div>

        <div className="card">
          <h3>Eficiencia</h3>
          <p>
            Evitas el tiempo y los problemas que supone transportar tu sofá. En La Galardonada
            nos desplazamos por ti y limpiamos en tu domicilio u oficina sin desmontajes.
          </p>
        </div>

        <div className="card">
          <h3>Atención personalizada</h3>
          <p>
            Adaptamos el servicio a tus necesidades y tipo de sofá, garantizando una
            limpieza eficiente y adecuada.
          </p>
        </div>
      </div>

    </section>
  );
};

export default SofaCleaningMadridSection;
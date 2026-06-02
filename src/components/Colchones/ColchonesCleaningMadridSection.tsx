import React from "react";

const ColchonesCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>Limpieza de colchones en la comunidad de madrid</h1>

          <p>
            En la Comunidad de Madrid, ofrecemos servicios de limpieza de colchones a domicilio. Nuestro equipo profesional utiliza métodos eficaces para eliminar alérgenos y garantizar un descanso saludable. Descubre la comodidad y frescura de tus colchones renovados en la capital y sus alrededores
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
            La principal ventaja es la comodidad de no tener que transportar tus colchones a una ubicación de limpieza, ya que el servicio se realiza en tu propio hogar.
          </p>
        </div>

        <div className="card">
          <h3>Eficiencia</h3>
          <p>
            Evitas el tiempo que tomaría desmontar, transportar y volver a montar tus Colchones, ya que los profesionales de limpieza se encargan de todo en tu casa.
          </p>
        </div>

        <div className="card">
          <h3>Atención personalizada</h3>
          <p>
            En La Galardonada desde el primer momento te asosarmos sobre nuestro servicio de limpieza de edredones solo tienes que ponerte en contacto con nosotros,
          </p>
        </div>
      </div>

    </section>
  );
};

export default ColchonesCleaningMadridSection;
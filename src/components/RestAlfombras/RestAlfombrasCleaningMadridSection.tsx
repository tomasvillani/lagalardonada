import React from "react";

const RestAlfombrasCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>Restauración y Reparación de Alfombras</h1>

          <p>
            Aprovecha la oportunidad de darle nueva vida a tus alfombras. En La Galardonada
            somos expertos en la restauración y reparación de alfombras y tapices, desde los
            rotos más sencillos hasta los más complejos en distintos tipos de alfombras.
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
          <h3>Calidad</h3>
          <p>
            Realizamos nuestros trabajos de restauración de alfombras de forma artesanal,
            disponiendo de diversos tipos de materiales como lanas, sedas, yutes, algodón
            e hilaturas, que garantizan un resultado satisfactorio.
          </p>
        </div>

        <div className="card">
          <h3>Artesanía</h3>
          <p>
            En La Galardonada contamos con equipos artesanos con una larga trayectoria
            profesional en distintos tipos de tejidos y alfombras, tanto persas y orientales
            como nacionales, sea cual sea el material de la alfombra.
          </p>
        </div>

        <div className="card">
          <h3>Maestros Alfombreros</h3>
          <p>
            Nos avalan nuestros trabajos y la satisfacción de nuestros clientes. Contamos
            con nuestro propio equipo de maestros artesanos persas y españoles con una larga
            carrera de éxitos profesionales.
          </p>
        </div>
      </div>

    </section>
  );
};

export default RestAlfombrasCleaningMadridSection;
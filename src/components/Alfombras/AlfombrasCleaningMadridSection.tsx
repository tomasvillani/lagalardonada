import React from "react";
import ContactButton from "../ContactButton";

const ColchonesCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>
            Tratamientos de antipolilla y antiácaros incluido en nuestra limpieza de alfombras
          </h1>

          <p>
            En Limpiezas La Galardonada entendemos que tus alfombras no solo son decorativas,
            sino también una inversión en el confort de tu hogar. Nuestro equipo experto se
            dedica a proporcionar una limpieza que no solo elimina manchas y suciedad, sino que
            también preserva la calidad de las fibras.
          </p>
        </div>

        <div className="action">
          <ContactButton />
        </div>
      </div>

      {/* FILA 2 */}
      <div className="bottom">

        <div className="card">
          <h3>Comodidad</h3>
          <p>
            La principal ventaja es la comodidad de no tener que llevar tus alfombras para
            realizar el servicio de limpieza de alfombras. En Limpiezas La Galardonada,
            para mejorar la calidad de nuestros servicios, disponemos de recogida y entrega gratuita.
          </p>
        </div>

        <div className="card">
          <h3>Eficiencia</h3>
          <p>
            Evitas el tiempo que tomaría desmontar, transportar y volver a montar tu alfombra,
            ya que los profesionales de limpieza se encargan de todo.
          </p>
        </div>

        <div className="card">
          <h3>Atención personalizada</h3>
          <p>
            En Limpiezas La Galardonada buscamos garantizar que el servicio satisfaga de manera
            óptima las expectativas y necesidades individuales de nuestros clientes, generando
            así una experiencia más satisfactoria y adaptada a sus circunstancias específicas.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ColchonesCleaningMadridSection;
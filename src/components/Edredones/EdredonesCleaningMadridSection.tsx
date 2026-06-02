import React from "react";
import ContactButton from "../ContactButton";

const EdredonesCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>Limpieza de Edredones</h1>

          <p>
            Renueva tus edredones sin salir de casa. En toda la Comunidad de Madrid, ofrecemos
            un servicio profesional de limpieza de edredones a domicilio. Experimenta la comodidad
            y frescura en tu descanso. Contáctanos hoy y disfruta de edredones impecables.
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
            La principal ventaja es la comodidad de no tener que transportar tus colchones
            a una ubicación de limpieza, ya que el servicio se realiza en tu propio hogar.
          </p>
        </div>

        <div className="card">
          <h3>Eficiencia</h3>
          <p>
            Evitas el tiempo que tomaría para llevar y volver a traerlo. En La Galardonada
            nos desplazamos por ti, recogemos tus edredones y una vez limpio te lo entregamos
            a tu domicilio.
          </p>
        </div>

        <div className="card">
          <h3>Atención personalizada</h3>
          <p>
            En La Galardonada ofrecemos atención personalizada a nuestros clientes. Puedes
            gestionar tus dudas o consultas con nosotros rellenando el formulario. Te las
            solucionamos en menos de 24h.
          </p>
        </div>
      </div>

    </section>
  );
};

export default EdredonesCleaningMadridSection;
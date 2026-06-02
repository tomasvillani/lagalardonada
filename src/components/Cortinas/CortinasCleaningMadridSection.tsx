import React from "react";

const CortinasCleaningMadridSection: React.FC = () => {
  return (
    <section className="section">

      {/* FILA 1 */}
      <div className="top">
        <div className="text">
          <h1>Limpieza de Cortinas a Domicilio</h1>

          <p>
            En Limpiezas La Galardonada, nos especializamos en la limpieza de cortinas a domicilio
            en Madrid, brindando un servicio que revitaliza tus espacios totalmente limpios. Olvídate
            de desmontar tus cortinas, nuestro equipo se encarga de todo, desde la evaluación
            personalizada hasta la entrega impecable en tu hogar. Utilizamos tecnología avanzada para
            preservar la calidad de los tejidos, eliminando polvo y alérgenos. ¡Contáctanos y dale
            a tus cortinas el cuidado que merecen!
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
            La principal ventaja es la comodidad de no tener que transportar, montar y desmontar
            tus cortinas. Nuestros expertos se encargarán de todo el proceso.
          </p>
        </div>

        <div className="card">
          <h3>Eficiencia</h3>
          <p>
            Evitas el tiempo y los problemas que supone llevarlo para limpiarlo. En Limpiezas La
            Galardonada nos desplazamos por ti y nos encargamos de todo el proceso necesario, tanto
            la limpieza como el montaje y desmontaje de las cortinas.
          </p>
        </div>

        <div className="card">
          <h3>Atención Personalizada</h3>
          <p>
            En Limpiezas La Galardonada nos enorgullece poder decir que nuestro mayor logro es la
            perfecta atención al cliente, que hace impecables nuestros servicios.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CortinasCleaningMadridSection;
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">

      {/* IZQUIERDA */}
      <div className="about-image">
        <img src="quienes-somos.jpeg" alt="Quiénes somos" />
      </div>

      {/* DERECHA */}
      <div className="about-content">

        <h2>¿Quiénes somos?</h2>

        <p>
          <strong>Limpiezas La Galardonada</strong> es una empresa especializada en la <strong>limpieza de alfombras en Madrid</strong>,
          colchones, sofás, edredones y cortinas, tanto para hogares como para empresas.
          Con más de <strong>25 años de experiencia</strong> en el sector de la limpieza y el cuidado de textiles,
          nuestra misión es devolver la frescura, higiene y confort a los tejidos que forman parte de tu día a día.
        </p>

        <p>
          Nacimos con una clara vocación: ofrecer un servicio profesional y de alta calidad en la <strong>limpieza de tapicerías</strong> y textiles del hogar.
          Desde nuestros inicios en 1997, hemos trabajado en la <strong>restauración, mantenimiento y limpieza de sofás, colchones, cortinas y edredones.</strong>
        </p>

        <p>
          En el año 2021, decidimos dar un paso adelante y consolidarnos bajo la marca <strong>La Galardonada</strong>, ampliando nuestra cobertura en toda la Comunidad de Madrid y centrando todos nuestros recursos en una atención experta y personalizada en la <strong>limpieza de textiles en el hogar</strong>.
        </p>

        {/* CAJA AZUL */}
        <div className="about-box">

          <h3>¿Por qué elegirnos?</h3>

          <ul>
            <li><FaCheck /> Más de 25 años de experiencia</li>
            <li><FaCheck /> Técnicos especializados en tapicerías</li>
            <li><FaCheck /> Productos ecológicos y maquinaria profesional</li>
            <li><FaCheck /> Atención personalizada</li>
            <li><FaCheck /> Servicio rápido y eficaz</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default About;
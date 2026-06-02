import { Link } from "react-router-dom";

const services = [
  {
    title: "Limpieza de alfombras en Madrid",
    path: "/limpieza-de-alfombras-madrid",
    text: (
      <>
        <strong>Limpieza de alfombras en Madrid.</strong> <br />
        Limpieza de alfombras de lana, persas, orientales, nacionales, yute, viscosa, mecánicas, etc. con productos neutros. <br />
        <br />
        Sin coste de desplazamiento. Disfruta de tu servicio de limpieza de alfombras con La Galardonada.
      </>
    ),
    img: "limpieza-alfombras.jpeg",
  },
  {
    title: "Limpieza de sofás en Madrid",
    path: "/limpieza-de-sofas-a-domicilio-madrid",
    text: (
      <>
        Servicio de <strong>limpieza de sofás a domicilio en Madrid</strong> sin coste de desplazamiento. <br />
        Tratamientos de manchas y eliminación de malos olores. <br /><br />
        <strong>Limpieza profesional</strong> de todo tipos de sofás de materiales como algodón, poliéster, nylon, acetato, yute, acrílico, seda artificial y/o natural, etc.
      </>
    ),
    img: "limpieza-sofas.jpg",
  },
  {
    title: "Limpieza de colchones en Madrid",
    path: "/limpieza-de-colchones-a-domicilio-madrid",
    text: (
      <>
        Servicio de <strong>limpieza de colchones en la comunidad de Madrid</strong> sin coste de desplazamiento. <br /><br />
        Desinfección y tratamiento de eliminación de malos olores. <br />
        Tratamiento genérico de manchas amarillas. <br /><br />
        Limpieza profesional de colchones tipo viscoelástico, espuma hr, látex, muelles, etc.
      </>
    ),
    img: "limpieza-colchones.jpg",
  },
  {
    title: "Limpieza de cortinas en Madrid",
    path: "/limpieza-de-cortinas",
    text: (
      <>
        Servicio <strong>limpieza de cortinas en Madrid</strong> con montaje, desmontaje y desplazamiento a su domicilio sin coste adicional.
        <br /><br />
        Tratamiento de fibra con productos neutros y biodegradables.
        <br /><br />
        Limpieza de cortinas de lino, algodón, de seda, poliéster, etc. sin coste del desplazamiento.
      </>
    ),
    img: "limpieza-cortinas.jpg",
  },
  {
    title: "Restauración de alfombras en Madrid",
    path: "/restauracion-de-alfombras",
    text: (
      <>
        <strong>Restauración de alfombras</strong> en la Comunidad de Madrid. Restauración, arreglo y reparación de todo tipo de rotos, destejidos, técnicas de consolidación, reparación de flecos, ribete y orillas, etc.
        <br /><br />
        Restauración y reparación de todo tipos de alfombras, tapices, kilims y reposteros.
      </>
    ),
    img: "restauracion-alfombras.jpeg",
  },
  {
    title: "Limpieza de edredones en Madrid",
    path: "/limpieza-de-edredones",
    text: (
      <>
        <strong>Limpieza de edredones en Madrid</strong>. Limpieza de colchas y edredones nórdicos, sintéticos, algodón, pluma, etc. con productos neutros.
        <br /><br />
        Sin coste de desplazamiento. Disfruta de tu servicio de limpieza de edredones con la satisfacción con Limpiezas La Galardonada.
      </>
    ),
    img: "limpieza-edredones.jpg",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Nuestros servicios de limpiezas en Madrid</h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.img} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <Link to={item.path} className="service-link">
              Ver servicio <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
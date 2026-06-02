import {
  FaHandshake,
  FaHeadset,
  FaMedal,
} from "react-icons/fa";

const items = [
  {
    title: "Confianza & Experiencia",
    icon: <FaHandshake />,
    text: "En La Galardonada contamos con más de 25 años de experiencia en ofrecer servicios de limpieza de sofás y colchones por lo que nos ha hecho imprescindible conseguir la experiencia y a base de eso mantener la confianza de nuestros clientes.",
  },
  {
    title: "Atención personalizada",
    icon: <FaHeadset />,
    text: "Puedes gestionar con nosotros cualquier duda o consulta sobre la limpieza de tu sofá, colchón, edredón o cortinas, rellenando el formulario. Te la solucionamos en menos de 24h. También puedes llamarnos al 689 34 28 21",
  },
  {
    title: "Calidad y Garantía",
    icon: <FaMedal />,
    text: "Contamos con expertos y maquinarias de punta que lo que hace que nuestros servicios a diarios sean de calidad de garantía.",
  },
  {
    title: "Satisfacción de clientes",
    icon: "🤩",
    text: "Su preocupación también es nuestra. Consideramos fundamental conocer las preferencias y las necesidades de nuestros clientes para ofrecer servicios satisfactorios. Solo tiene que contactar con nosotros para obtener servicio y asesoramiento personalizado.",
  },
];

const DifCompetencia = () => {
  return (
    <section className="dif">

      <h2 className="dif-title">
        ¿Qué nos diferencia de la competencia?
      </h2>

      <div className="dif-grid">

        {items.map((item, i) => (
          <div className="dif-card" key={i}>

            <div className="dif-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default DifCompetencia;
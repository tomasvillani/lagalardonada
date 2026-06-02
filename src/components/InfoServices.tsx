import { FaSuitcase, FaPaintBrush, FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Qué incluye",
    icon: <FaSuitcase />,
    items: [
      "Servicio a domicilio gratuito",
      "Desinfección de bacterias y ácaros",
      "Tratamiento de manchas y mal olor",
    ],
  },
  {
    title: "Cómo funcionamos",
    icon: <FaPaintBrush />,
    items: [
      "Asesoramiento y atención al cliente",
      "Te damos cita",
      "Nos desplazamos y realizamos el servicio contratado",
    ],
  },
  {
    title: "Las ventajas",
    icon: <FaMedal />,
    items: [
      "Nos desplazamos por ti",
      "Limpieza profunda",
      "Tiempo de espera menos de 12 horas",
    ],
  },
];

const InfoServices = () => {
  return (
    <section className="info">

      <h2 className="info-title">Nuestros servicios</h2>

      <div className="info-grid">

        {sections.map((sec, i) => (
          <div className="info-card" key={i}>

            <div className="info-icon">{sec.icon}</div>

            <h3>{sec.title}</h3>

            <ul>
              {sec.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
      <div className="info-button-wrapper">
        <Link to="/servicios" className="btn-primary">
          Más información
        </Link>
      </div>
    </section>
  );
};

export default InfoServices;
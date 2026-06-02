import { FaPaintBrush, FaBacteria, FaTint, FaWind } from "react-icons/fa";

const stats = [
  {
    number: "3,500+",
    title: "Limpieza Profunda",
    icon: <FaPaintBrush />,
  },
  {
    number: "3,500+",
    title: "Desinfección completa",
    icon: <FaBacteria />,
  },
  {
    number: "3,500+",
    title: "Tratamientos de manchas",
    icon: <FaTint />,
  },
  {
    number: "3,500+",
    title: "Eliminación de malos olores",
    icon: <FaWind />,
  },
];

const Stats = () => {
  return (
    <section className="stats">

      <h2>Número de servicios realizados</h2>

      <div className="stats-line"></div>

      <div className="stats-grid">
        {stats.map((item, i) => (
          <div className="stats-card" key={i}>
            <div className="icon">{item.icon}</div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Stats;
import React from "react";
import SolicitarCitaButton from '../SolicitarCitaButton'

const plans = [
  {
    name: "Espacios reducidos",
    subtitle: "Adaptado para espacios pequeños",
    price: "159",
    note: "",
    unit: "/pack",
    features: [
      "Limpieza profunda de alfombras (lana) hasta 4 m²",
      "Limpieza de sofás hasta 3 plazas",
      "O limpieza de colchón hasta 90 cm de anchura",
    ],
  },
  {
    name: "Espacios medianos",
    subtitle: "",
    price: "345",
    note: "",
    unit: "/pack",
    features: [
      "Limpieza profunda de alfombras (lana) hasta 6 m²",
      "Limpieza de sofás hasta 4 plazas",
      "O limpieza de colchón hasta 135-160 cm de anchura",
    ],
  },
  {
    name: "Regular Housekeeping",
    subtitle: "",
    price: "465",
    note: "",
    unit: "/pack",
    features: [
      "Limpieza profunda de alfombras (lana) hasta 9 m²",
      "Limpieza de sofás hasta 4 plazas + chaise longue",
      "O limpieza de colchón hasta 160-180 cm de anchura",
    ],
  },
];

const NuestrasPromociones: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Nuestras Promociones</h2>
        <p>¡Encontrarás la mejor promoción adaptada totalmente por ti!</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>

            <div className="pricing-card-top">
              <span className="pricing-name">{plan.name}</span>
              {plan.subtitle && (
                <span className="pricing-note">{plan.subtitle}</span>
              )}
              <div className="pricing-price">
                <span className="pricing-currency">€</span>
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-unit">{plan.unit}</span>
              </div>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="pricing-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <SolicitarCitaButton texto="Solicitar promoción"/>

          </div>
        ))}
      </div>

    </section>
  );
};

export default NuestrasPromociones;
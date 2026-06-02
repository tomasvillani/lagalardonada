import React from "react";

const plans = [
  {
    name: "Restauración de alfombras, tapices, kilims y reposteros",
    price: "--",
    note: "Impuestos no incluidos",
    unit: "/Pieza",
    features: [
      "No disponemos de precios cerrados para la restauración",
      "Presupuestos sin compromiso para tu alfombra",
      "¡Contáctenos y te informamos!",
    ],
  },
];

const PreciosRestAlfombras: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Restauración de Alfombras, Tápiz, Kilims y Reposteros — Precios</h2>
        <p>Consulta nuestras tarifas y solicita tu servicio de forma rápida y sencilla.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>

            <div className="pricing-card-top">
              <span className="pricing-name">{plan.name}</span>
              <span className="pricing-note">{plan.note}</span>
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

            <button
              className="pricing-btn"
              onClick={() => window.open("https://lagalardonada.es/solicita-tu-cita/", "_blank")}
            >
              Solicitar servicio
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PreciosRestAlfombras;
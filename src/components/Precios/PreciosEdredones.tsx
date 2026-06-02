import React from "react";
import SolicitarCitaButton from '../SolicitarCitaButton'

const plans = [
  {
    name: "Limpieza de edredones",
    price: "19,95",
    note: "Impuestos no incluidos",
    unit: "/Unidad",
    features: [
      "Recogida y entrega a domicilio incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de manchas y de malos olores no incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
];

const PreciosEdredones: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Limpieza de Edredones — Precios</h2>
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

            <SolicitarCitaButton texto="Solicitar servicio"/>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PreciosEdredones;
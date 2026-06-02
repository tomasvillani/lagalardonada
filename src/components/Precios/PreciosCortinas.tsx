import React from "react";

const plans = [
  {
    name: "Cortinas sin forro",
    price: "7,80",
    note: "Impuestos no incluidos",
    features: [
      "Servicio de montaje y desmontaje incluido",
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Cortinas con forro",
    price: "7,80",
    note: "Impuestos no incluidos",
    features: [
      "Servicio de montaje y desmontaje incluido",
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Estores",
    price: "9,20",
    note: "Impuestos no incluidos",
    features: [
      "Servicio de montaje y desmontaje incluido",
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Visillo",
    price: "7,40",
    note: "Impuestos no incluidos",
    features: [
      "Servicio de montaje y desmontaje incluido",
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
];

const PreciosCortinas: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Limpieza de Cortinas a Domicilio — Precios</h2>
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
                <span className="pricing-unit">/Metro cuadrado</span>
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
              onClick={() => window.open("/", "_blank")}
            >
              Solicitar servicio
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PreciosCortinas;
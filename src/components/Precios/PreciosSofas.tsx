import React from "react";

const plans = [
  {
    name: "Butaca",
    price: "54",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Sofá de 2 plazas",
    price: "72",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Sofá de 3 plazas",
    price: "89",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Sofá de 3 plazas + chaise longue",
    price: "120",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Sofá de 4 plazas + chaise longue",
    price: "160",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Silla sin respaldo",
    price: "12",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio no incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Silla con respaldo",
    price: "16",
    note: "Impuestos no incluidos",
    features: [
      "Tratamiento de manchas y de malos olores",
      "Tratamiento de polillas y antiácaros",
      "Limpieza con productos biodegradables",
      "Precio sujeto al servicio mínimo",
      "Servicio a domicilio no incluido",
      "Impuestos e IVA no incluidos",
    ],
  },
];

const PreciosSofas: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Limpieza de Sofás a Domicilio — Precios</h2>
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
                <span className="pricing-unit">/unidad</span>
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

export default PreciosSofas;
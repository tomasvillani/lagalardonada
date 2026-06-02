import React from "react";
import SolicitarCitaButton from '../SolicitarCitaButton'

const plans = [
  {
    name: "Alfombras mecánicas pelo corto",
    price: "9,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza totalmente manual de La Galardonada",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Solo aplicable a alfombras mecánicas y/o sintéticas de pelo corto",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras orientales, de lana, nacionales, de pelo largo",
    price: "13,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza totalmente artesanal con La Galardonada",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Solo aplicable a alfombras manuales o artesanales de lana nacionales, orientales o mecánicas de pelo largo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras de lana y seda",
    price: "15,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para alfombras de lana y seda",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras de seda natural",
    price: "29,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para alfombras de seda",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras de seda viscosa",
    price: "19,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para alfombras de seda viscosa",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras de piel",
    price: "29,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para alfombras de piel",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Tápiz manual",
    price: "48,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para tapices clásicos y antiguos",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Tápiz mecánico",
    price: "24,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para tapices clásicos y antiguos",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Petite points y Aubusson",
    price: "18,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para Petite Point y Aubusson",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
  {
    name: "Alfombras viscosas y de tufting",
    price: "18,95",
    note: "Impuestos no incluidos",
    features: [
      "Limpieza especial de La Galardonada para alfombras viscosas y tuftings",
      "Recogida y entrega a domicilio incluido",
      "Servicio de montaje y desmontaje incluido",
      "Servicio de almacenaje y conservación incluido",
      "Tratamiento de desempolvado incluido",
      "Tratamiento de manchas y de malos olores incluido",
      "Tratamiento de antipolillas y antiácaros incluido",
      "Precio sujeto al servicio mínimo",
      "Impuestos e IVA no incluidos",
    ],
  },
];

const PreciosAlfombras: React.FC = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-header">
        <h2>Limpieza de Alfombras — Precios</h2>
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

            <SolicitarCitaButton texto="Solicitar servicio"/>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PreciosAlfombras;
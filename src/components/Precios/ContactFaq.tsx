import React, { useState } from "react";

const faqs = [
  {
    question: "¿El mal olor se puede quitar?",
    answer:
      "Nuestro tratamiento es capaz de eliminar hasta los olores más fuertes de nuestros espacios, ya sea alfombra, sofá, colchón, edredón o cortina.",
  },
  {
    question: "¿Ofrecéis vuestros servicios en toda la Comunidad de Madrid sin coste de desplazamiento?",
    answer:
      "Lo cierto es que sí. Salvo algunas zonas que tengan una difícil comunicación, damos nuestros servicios sin coste de desplazamiento.",
  },
  {
    question: "¿Disponéis de servicio mínimo?",
    answer:
      "Sí, y depende de tu zona y del servicio contratado. Lo habitual son 35€ más IVA en Madrid ciudad y alrededores. Puedes consultarnos tu servicio mínimo y te informamos.",
  },
  {
    question: "¿Vuestros servicios se realizan in situ?",
    answer:
      "Salvo los servicios relacionados con limpieza y restauración de alfombras, limpieza de edredones y cortinas, que los realizamos en nuestras instalaciones, el resto de servicios como limpieza de sofás y colchones los hacemos in situ.",
  },
  {
    question: "Mi sofá tiene manchas que he intentado quitar pero no he podido. ¿Se puede limpiar?",
    answer:
      "Es muy difícil que una mancha no se quite. Desde La Galardonada siempre buscamos la satisfacción de nuestros clientes y, con la aplicación de productos específicos de limpieza, lo maximizamos en su punto más alto.",
  },
  {
    question: "¿Tengo que pagar por adelantado o hacer el abono antes de completar el servicio?",
    answer:
      "En ningún momento. Cobramos al completar el servicio. Cosa distinta sucede con conservación o almacenaje, que en estos casos sí se debe realizar el pago por adelantado.",
  },
];

const ContactFaq: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="contact-faq-section">
      <div className="contact-faq-container">

        {/* IZQUIERDA — Formulario */}
        <div className="contact-form-wrapper">
          <h2>Contacta con nosotros</h2>
          <p>Por favor, rellene los siguientes campos:</p>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="tu@email.com"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="600 000 000"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Enviar
            </button>

          </form>
        </div>

        {/* DERECHA — FAQ */}
        <div className="faq-wrapper">
          <h2>F.A.Q.</h2>
          <p>Preguntas frecuentes sobre nuestros servicios.</p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>

                <button
                  className={`faq-question ${openIndex === index ? "open" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-arrow">{openIndex === index ? "▲" : "▼"}</span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFaq;
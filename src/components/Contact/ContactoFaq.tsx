import React, { useState } from "react";

const faqs = [
  {
    question: "Teléfonos de atención al cliente La Galardonada",
    answer: `En La Galardonada disponemos tanto del teléfono de atención al cliente como del correo electrónico dedicados a la atención al cliente. Así que, no te preocupes, no te va a faltar asistencia en ningún momento.

Teléfono: 689 342 821
Correo: info@lagalardonada.es
Correo: cliente@lagalardonada.es

Nuestro horario de atención al cliente es bastante amplio: te atenderemos de lunes a viernes de 08:30 a 19:00h y los sábados de 10:00 a 14:00h.`,
  },
  {
    question: "¿Cómo y cuándo me llega mi servicio contratado?",
    answer: "Funcionamos por rutas diarias a la mayor parte de las localidades de la Comunidad de Madrid. Una vez contratado el servicio, tardamos menos de 72h en realizarlo desde el momento de la aceptación.",
  },
  {
    question: "La cobertura de nuestros servicios",
    answer: "En La Galardonada ofrecemos nuestros servicios en toda la Comunidad de Madrid, respetando el precio mínimo según la zona y el servicio. El coste del desplazamiento en Madrid y alrededores es totalmente gratuito.",
  },
  {
    question: "¿Tenéis horario de tarde?",
    answer: "En La Galardonada también disponemos del servicio en turno de tarde para nuestros clientes que tienen dificultades en el turno de mañana.",
  },
  {
    question: "¿Cómo y cuándo debo realizar el pago?",
    answer: "Se realiza el pago al finalizar el servicio (salvo los casos de conservación, guardar y almacenaje, que se realiza por adelantado) y se puede hacer tanto con tarjeta como en efectivo o transferencia bancaria.",
  },
];

const ContactoFaq: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
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
          <h2>Contáctanos</h2>
          <p>Rellena el formulario y te respondemos en menos de 24h.</p>

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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
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
          <h2>Preguntas frecuentes</h2>
          <p>Resolvemos tus dudas más habituales.</p>

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
                    <p style={{ whiteSpace: "pre-line" }}>{faq.answer}</p>
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

export default ContactoFaq;
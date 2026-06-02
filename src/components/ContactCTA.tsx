import { useState } from "react";

const ContactCTA = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    policy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="cta-section">
      <div className="cta-header">
        <h2>Solicita tu presupuesto sin compromiso GRATIS</h2>
        <p>Rellena el formulario y nos pondremos en contacto contigo lo antes posible</p>
      </div>

      <div className="cta-form-wrapper">
        <form className="cta-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Nota adicional"
            value={form.message}
            onChange={handleChange}
          />

          <label className="cta-policy">
            <input
              type="checkbox"
              name="policy"
              checked={form.policy}
              onChange={handleChange}
            />
            Acepto la política de privacidad
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
import React, { useState } from "react";

interface FormularioProps {
  imagen: string;
  altImagen?: string;
}

const Formulario: React.FC<FormularioProps> = ({ imagen, altImagen = "Formulario" }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="budget-section">
      <div className="budget-container">

        {/* IZQUIERDA — Imagen */}
        <div className="budget-image">
          <img src={imagen} alt={altImagen} />
        </div>

        {/* DERECHA — Formulario */}
        <div className="budget-form-wrapper">
          <h2>Consigue tu oferta personalizada</h2>
          <p>Rellena el siguiente formulario y te contactaremos con tu oferta en menos de 24h.</p>

          <form className="budget-form" onSubmit={handleSubmit}>

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
              <label htmlFor="servicio">¿Qué servicio necesitas?</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Selecciona un servicio</option>
                <option value="limpieza-sofas">Limpieza de sofás</option>
                <option value="limpieza-colchones">Limpieza de colchones</option>
                <option value="limpieza-cortinas">Limpieza de cortinas</option>
                <option value="limpieza-edredones">Limpieza de edredones</option>
                <option value="limpieza-alfombras">Limpieza de alfombras</option>
                <option value="restauracion-alfombras">Restauración de alfombras</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje (opcional)</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuéntanos más sobre lo que necesitas..."
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="budget-btn">
              Enviar
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Formulario;
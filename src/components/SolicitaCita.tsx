import React, { useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../style/SolicitaCita.css'

const SolicitaCita: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    dia: "",
    hora: "",
    direccion: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />

      <section className="reserva-section">
        <div className="reserva-wrapper">

          <h2 className="reserva-titulo">Reserva tu cita online</h2>

          <form className="reserva-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dia">Día preferido</label>
                <input
                  type="date"
                  id="dia"
                  name="dia"
                  value={formData.dia}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora preferida</label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Tu dirección completa"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>

            <hr className="reserva-divider" />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="correo">Correo electrónico</label>
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
                  required
                />
              </div>
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

            <button type="submit" className="reserva-btn">
              Enviar
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolicitaCita;
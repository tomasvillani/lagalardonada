import React from "react";
import "../style/AboutUsPage.css";

const JoinUsSection: React.FC = () => {
  return (
    <section className="join-us">
      <div className="join-us-container">
        <h2>Únete a nosotros</h2>

        <p className="join-us-intro">
          Únete a nuestro equipo de profesionales haciendo clic en la casilla de
          «unirte a nuestro equipo».
        </p>

        <div className="join-us-grid">
          <div className="join-card">
            <h3>Conseguirás...</h3>
            <ul>
              <li>Trabajos de limpieza garantizados en tu horario</li>
              <li>Inicio inmediato según disponibilidad</li>
              <li>Formación completa y soporte continuo</li>
              <li>Oportunidad de crecimiento a largo plazo</li>
              <li>Realización de tareas preestablecidas</li>
              <li>Excelente oportunidad de volver a trabajar</li>
            </ul>
          </div>

          <div className="join-card">
            <h3>Necesitarás...</h3>
            <ul>
              <li>Conocimientos del sector textil</li>
              <li>Experiencia en limpieza profesional</li>
              <li>Compromiso con altos estándares de calidad</li>
              <li>Flexibilidad horaria</li>
              <li>Carnet de conducir B</li>
              <li>Disponibilidad para viajar</li>
            </ul>
          </div>
        </div>

        <div className="join-us-footer">
          <a href="/contacto" className="join-btn">
            Únete a nuestro equipo <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
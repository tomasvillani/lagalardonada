import React from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  imagen: string;
  altImagen?: string;
  titulo: string;
  texto: string;
  features?: string[];
  botones?: { label: string; href: string; variante?: "primary" | "outline" }[];
  imagenPosicion?: "izquierda" | "derecha";
  colorFondo?: string;
  colorTexto?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imagen,
  altImagen = "Servicio",
  titulo,
  texto,
  features = [],
  botones = [],
  imagenPosicion = "izquierda",
  colorFondo = "#fff",
  colorTexto = "#111",
}) => {
  const navigate = useNavigate();
  const esFondoOscuro = colorTexto === "#fff";
  const colorSubtexto = esFondoOscuro ? "rgba(255,255,255,0.85)" : "#555";
  const colorLista = esFondoOscuro ? "rgba(255,255,255,0.9)" : "#444";

  const handleClick = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      navigate(href);
    }
  };

  return (
    <div className="service-card-wrapper">
      <div
        className="service-card"
        style={{
          backgroundColor: colorFondo,
          flexDirection: imagenPosicion === "derecha" ? "row-reverse" : "row",
        }}
      >
        <div className="service-card-image">
          <img src={imagen} alt={altImagen} />
        </div>

        <div className="service-card-content">
          <h3 className="service-card-titulo" style={{ color: colorTexto }}>
            {titulo}
          </h3>
          <p className="service-card-texto" style={{ color: colorSubtexto }}>
            {texto}
          </p>

          {features.length > 0 && (
            <ul className="service-card-features">
              {features.map((f, i) => (
                <li key={i} style={{ color: colorLista }}>
                  <span className="service-card-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          {botones.length > 0 && (
            <div className="service-card-botones">
              {botones.map((btn, i) => (
                <button
                  key={i}
                  className={
                    btn.variante === "outline"
                      ? esFondoOscuro
                        ? "service-card-btn-outline-white"
                        : "service-card-btn-outline"
                      : "service-card-btn-primary"
                  }
                  onClick={() => handleClick(btn.href)}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
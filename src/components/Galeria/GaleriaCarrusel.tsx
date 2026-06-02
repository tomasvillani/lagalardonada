import React, { useState } from "react";
import ContactButton from "../ContactButton";

interface Slide {
  tipo: "imagen" | "video";
  src: string;
  alt?: string;
  titulo: string;
  descripcion: string;
}

interface GaleriaCarruselProps {
  slides: Slide[];
}

const GaleriaCarrusel: React.FC<GaleriaCarruselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section className="carrusel-section">
      <div className="carrusel-wrapper">

        {/* FLECHA IZQ */}
        <button
          className="carrusel-arrow carrusel-arrow-left"
          onClick={prev}
          aria-label="Anterior"
        >
          &#8592;
        </button>

        {/* CONTENIDO */}
        <div className="carrusel-slide">

          {/* MEDIA — imagen o video */}
          <div className="carrusel-image">
            {slide.tipo === "video" ? (
              <video
                src={slide.src}
                controls
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <img src={slide.src} alt={slide.alt ?? slide.titulo} />
            )}
          </div>

          {/* TEXTO */}
          <div className="carrusel-content">
            <h3 className="carrusel-titulo">{slide.titulo}</h3>
            <p className="carrusel-descripcion">{slide.descripcion}</p>
            <ContactButton />
          </div>

        </div>

        {/* FLECHA DCHA */}
        <button
          className="carrusel-arrow carrusel-arrow-right"
          onClick={next}
          aria-label="Siguiente"
        >
          &#8594;
        </button>

      </div>

      {/* INDICADORES */}
      <div className="carrusel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carrusel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default GaleriaCarrusel;
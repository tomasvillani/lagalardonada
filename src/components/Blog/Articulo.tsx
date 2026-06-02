import React from "react";

interface ArticuloProps {
  imagen: string;
  altImagen?: string;
  titulo: string;
  fecha: string;
  categoria: string;
  texto: string;
}

const Articulo: React.FC<ArticuloProps> = ({
  imagen,
  altImagen = "Artículo",
  titulo,
  fecha,
  categoria,
  texto,
}) => {
  return (
    <div className="articulo-wrapper">
      <article className="articulo-card">

        <div className="articulo-imagen">
          <a href="#">
            <img src={imagen} alt={altImagen} />
          </a>
        </div>

        <div className="articulo-content">
          <a href="#" className="articulo-titulo">
            {titulo}
          </a>

          <div className="articulo-meta">
            <span className="articulo-fecha">{fecha}</span>
            <span className="articulo-separador">|</span>
            <a href="#" className="articulo-categoria">
              {categoria}
            </a>
          </div>

          <p className="articulo-texto">{texto}</p>
        </div>

      </article>
    </div>
  );
};

export default Articulo;
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GaleriaBanner from "./GaleriaBanner";
import GaleriaCarrusel from "./GaleriaCarrusel";

const slidesColchones = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-2.jpg",
    alt: "Antes de limpieza",
    titulo: "Antes de impieza del colchón individual con manchas de Orin",
    descripcion: "Manchas de orín de mascotas secos con marcas",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-3.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Después de tratamiento de limpieza del colchon y eliminar el 100% de la manchas",
    descripcion: "Aplicación de tratamientos de manchas correspondiente y tratamiento de  limpieza produnda",
  },
];

const slidesSofas = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-4.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Antes de limpieza del sofá Britanico",
    descripcion: "Limpieza profunda de sofa a domicilio, material terciopelo y estilo Britanico",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-5.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Después de tratamiento de limpieza de sofá y también de la alfombra",
    descripcion: "Aplicación correcta del tratamieto de limpieza con productos correspondientes para evitar el daño del tejido",
  }
];

const slidesAlgodon = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-15.png",
    alt: "Proceso de limpieza profunda",
    titulo: "Proceso de limpieza del sofá de tela 100% algodón",
    descripcion: "Tratamiento de limpieza de agua y champú biodegradable para extraer toda la suciedad y los malos olores",
  }, {
    tipo: "imagen" as const,
    src: "/galeria/galeria-6.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Comparación de zonas con tratamiento y zonas sin ello",
    descripcion: "EL resultado de limpieza del sofá espectacular, despues de aplicar el tratamiento",
  }
];

const slidesRestAlfombra = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-7.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Restauración de Alfombra Kilim de lana y algodón",
    descripcion: "Restauracion de rotos y destejidos en los flecos y en las uniones reforzando las mismas zonas.",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-8.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Despues de restauracion de restauracion de los flecos con cadeneta",
    descripcion: "La cadeneta es un remate que reforza las zonas más susceptibles al daño.",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-9.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Zonas destejidas de la misma",
    descripcion: "",
  }, 
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-10.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Restauración de zonas rotas y detejidas en centro del Kilim",
    descripcion: "Las alfombras Kilim por su caracter son para ambientes calidos y ademas son más susceptibles a cualquier daño",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-11.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "El resultado final de limpieza y restauración de alfombra y kilim",
    descripcion: "Alfombra totalmente restaurada y reforzada en las zonas más importantes para darle una nueva vida.",
  }
];

const slidesSofaTela = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-12.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Limpieza de sofás de tela antes",
    descripcion: "Limpieza de sofá de tela de 3 plazas con chaise lounge",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-13.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Limpieza de sofá de tela después",
    descripcion: "Después de aplicar el tratamiento de limpieza hemos podido quitar todas las manchas de café que habia en ella.",
  }
];

const slidesAlfombraLana = [
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-16.png",
    alt: "Proceso de limpieza profunda",
    titulo: "Limpieza de alfombras de lana y seda del parte del tratamiento",
    descripcion: "Limpieza de alfombra de lana y seda moderna de fabricación India con su posterior insalación en la casa de nuestro cliente.",
  },
  {
    tipo: "imagen" as const,
    src: "/galeria/galeria-14.jpg",
    alt: "Proceso de limpieza profunda",
    titulo: "Limpieza de alfombras de lana y seda Instalada",
    descripcion: "Limpieza de alfombra de lana y seda moderna de fabricación India con su posterior insalación en la casa de nuestro cliente.",
  }
];

const Galeria = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />
      <GaleriaBanner />
      <GaleriaCarrusel slides={slidesColchones} />
      <GaleriaCarrusel slides={slidesSofas} />
      <GaleriaCarrusel slides={slidesAlgodon} />
      <GaleriaCarrusel slides={slidesRestAlfombra} />
      <GaleriaCarrusel slides={slidesSofaTela} />
      <GaleriaCarrusel slides={slidesAlfombraLana} />
      <Footer />
    </div>
  );
};

export default Galeria;
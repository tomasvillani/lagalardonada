import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import ContactButton from "../ContactButton";
import ServiceCard from "./ServiceCard";
import '../../style/OurServices.css'

const OurServices = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />
      <section className="hero our-services">
        <div className="hero-content">
          <h1>
            Grupo La Galardonada: excelencia del servicio
          </h1>

          <p>
            Descubre la ventaja de nuestros servicios en limpieza. Infórmate contactándonos
            o simplemente solicita tu cita online.
          </p>

          <div className="hero-buttons">
            <ContactButton />
          </div>
        </div>
      </section>

      <ServiceCard
        imagen="/sofas/sofas-1.jpeg"
        altImagen="Limpieza de sofás"
        titulo="Limpieza de sofás a domicilio"
        texto="Revitaliza tus sofás con el servicio de limpieza a domicilio de Limpiezas La Galardonada. Descubre la ventaja de nuestros servicios:"
        features={[
          "24h el máximo de tiempo necesario para volver a usarlo de nuevo",
          "Nos desplazamos por ti",
          "Eliminación de malos olores",
          "Tratamiento antiácaros",
          "Desinfección y tratamiento genérico de manchas",
        ]}
        botones={[
          { label: "Ver servicio", href: "/limpieza-de-sofas-a-domicilio-madrid", variante: "primary" },
          { label: "Contactar", href: "/contacto", variante: "outline" },
        ]}
        imagenPosicion="izquierda"
        colorFondo="#fff"
        colorTexto="#111"
      />

      <ServiceCard
        imagen="/colchones/colchones-1.jpg"
        altImagen="Limpieza de colchones"
        titulo="Limpieza de colchones"
        texto="La importancia de la limpieza de colchones para un sueño saludable. Descubre las ventajas de nuestros servicios especializados de limpieza de colchón:"
        features={[
          "Mejora la higiene: eliminamos ácaros, bacterias y alérgenos, promoviendo un ambiente más saludable",
          "Prolonga la vida útil: preserva la calidad del colchón, evitando el desgaste prematuro",
          "Mejora la calidad del sueño: un colchón limpio y fresco contribuye a un descanso más reparador",
          "Reducción de alergias: eliminamos partículas que pueden desencadenar alergias y problemas respiratorios",
          "Aroma agradable: un colchón limpio emana un olor fresco y agradable",
          "Aspecto impecable: eliminamos manchas y marcas, mejorando la apariencia del colchón",
          "Salud general: contribuye a un ambiente más saludable en el hogar",
        ]}
        botones={[
          { label: "Ver servicio", href: "/limpieza-de-colchones-a-domicilio-madrid", variante: "primary" },
          { label: "Contactar", href: "/contacto", variante: "outline" },
        ]}
        imagenPosicion="derecha"
        colorFondo="#0d6efd"
        colorTexto="#fff"
      />

      <ServiceCard
        imagen="/limpieza-alfombras.jpeg"
        altImagen="Limpieza de alfombras"
        titulo="Limpieza de alfombras"
        texto="La limpieza de alfombras es esencial para mantener un hogar fresco y saludable. Nuestras soluciones profesionales eliminan el polvo, la suciedad, alérgenos y manchas, devolviendo la belleza y la higiene de tus alfombras. Disfruta de un ambiente renovado con alfombras limpias y relucientes."
        features={[
          "Tratamiento de antipolillas y antiácaros",
          "Eliminación de mohos y gérmenes",
          "Recogida y entrega gratis",
          "Desinfección y limpieza profunda",
          "Tratamiento de manchas de mascota, café, vino, etc.",
          "Tratamiento de inundación",
          "Eliminación de malos olores",
          "Tratamiento de fibra de lana, seda, viscosa, sintética, yute y algodón",
          "Montaje y desmontaje incluido",
          "Ambiente más saludable",
        ]}
        botones={[
          { label: "Ver servicio", href: "/limpieza-de-alfombras-madrid", variante: "primary" },
          { label: "Contactar", href: "/contacto", variante: "outline" },
        ]}
        imagenPosicion="izquierda"
        colorFondo="#fff"
        colorTexto="#111"
      />

      <ServiceCard
        imagen="/restauracion-alfombras.jpeg"
        altImagen="Restauración de alfombras"
        titulo="Restauración de alfombras"
        texto="Restauración y reparación de alfombras artesanal en toda la Comunidad de Madrid. En La Galardonada contamos con nuestro equipo de profesionales, maestros artesanos capaces de realizar restauraciones desde los arreglos más sencillos hasta los rotos y destejidos más complejos, en todo tipo de alfombras, tapices, kilim y reposteros, ya sean orientales, nacionales, de lana, seda, viscosa, yute, etc."
        features={[
          "Restauración de rotos y destejidos",
          "Cortar alfombras a medida",
          "Restauración de flecos y orillas",
          "Técnicas de tintes y desteñidos",
          "Técnicas de consolidación",
          "Restauración de zonas gastadas",
          "Reponer flecos",
        ]}
        botones={[
          { label: "Contactar", href: "/contacto", variante: "outline" },
          { label: "Ver servicio", href: "/restauracion-de-alfombras", variante: "primary" },
        ]}
        imagenPosicion="derecha"
        colorFondo="#0d6efd"
        colorTexto="#fff"
      />

      <ServiceCard
        imagen="/cortinas/cortinas-1.jpeg"
        altImagen="Limpieza de cortinas"
        titulo="Limpieza de cortinas"
        texto="La limpieza de cortinas es esencial para mantener un hogar fresco y saludable. Nuestras soluciones profesionales eliminan el polvo, alérgenos y manchas, devolviendo la belleza y la higiene de tus cortinas. Disfruta de un ambiente renovado con cortinas limpias y relucientes."
        features={[
          "Mejora de la higiene: eliminamos polvo, ácaros y alérgenos, creando un ambiente más saludable",
          "Preservación de la inversión: mantener tus cortinas limpias prolonga su vida útil",
          "Renovación del aspecto: eliminación de manchas y revitalización de colores y tejidos",
          "Ahorro de tiempo y esfuerzo: dejamos la limpieza en manos de profesionales",
          "Mantenimiento especializado: contamos con experiencia y equipos de última generación",
          "Conveniencia: nos encargamos de desmontar, limpiar y volver a instalar tus cortinas",
          "Ambiente más saludable: mejora la calidad del aire interior",
          "Protección contra daños: la limpieza regular previene daños futuros en las cortinas",
        ]}
        botones={[
          { label: "Ver servicio", href: "/limpieza-de-cortinas", variante: "primary" },
          { label: "Contactar", href: "/contacto", variante: "outline" },
        ]}
        imagenPosicion="izquierda"
        colorFondo="#fff"
        colorTexto="#111"
      />

      <ServiceCard
        imagen="/edredones/edredones-1.jpeg"
        altImagen="Limpieza de edredones"
        titulo="Limpieza de edredones"
        texto="La limpieza de edredones no solo renueva tu ropa de cama, sino también tu bienestar en tiempos de frío. Nuestro servicio especializado elimina manchas, polvo y alérgenos, devolviendo a tu edredón su suavidad y limpieza. Renueva tu cama y disfruta de noches de descanso inigualables."
        features={[
          "Comodidad: no es necesario llevar el edredón a una lavandería, el servicio se realiza en tu hogar",
          "Higiene mejorada: eliminamos polvo, ácaros y alérgenos para un ambiente de sueño más saludable",
          "Preservación de la inversión: mantener el edredón limpio prolonga su vida útil",
          "Reducción de alergias: especialmente beneficioso para personas con alergias o problemas respiratorios",
          "Conveniencia: nos encargamos de todo el proceso, desde la recogida hasta la entrega",
          "Personalización: adaptamos el servicio a las necesidades específicas de tu edredón",
          "Ambiente más saludable: mejora la calidad del aire en tu habitación y tu bienestar general",
          "Mejora del aspecto: eliminamos manchas y olores desagradables",
        ]}
        botones={[
          { label: "Ver servicio", href: "/limpieza-de-edredones", variante: "primary" },
          { label: "Contactar", href: "/contacto", variante: "outline" },
        ]}
        imagenPosicion="derecha"
        colorFondo="#fff"
        colorTexto="#111"
      />

      <ContactInfo />
      <Footer />
    </div>
  );
};

export default OurServices;
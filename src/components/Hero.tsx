import ContactButton from "./ContactButton";
import OurServicesButton from "./OurServicesButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">

        <h1>
          Limpieza de Alfombras, Sofás y Tapicerías en Madrid
        </h1>

        <p className="hero-subtitle">
          Expertos en Limpieza Profesional de Sofás, Colchones, Alfombras y Tapicerías ⭐ 5/5 en Madrid
        </p>

        <p className="hero-text home">
          En <strong>La Galardonada</strong>, transformamos lo viejo en nuevo. ¿Alfombras opacas, sofás manchados o colchones que perdieron su frescura?
          Somos tu aliado en Madrid para una limpieza profunda, ecológica y con garantía de satisfacción.
          ¡Respira un aire nuevo en tu hogar!
        </p>

        <div className="hero-buttons">
          <ContactButton />
          <OurServicesButton/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
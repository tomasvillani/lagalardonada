import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import CortinasCleaningMadridSection from "./CortinasCleaningMadridSection";
import CortinasCleaningInfoSection from "./CortinasCleaningInfoSection";
import CortinasInfo from "./CortinasInfo";
import CortinasBenefitsGrid from "./CortinasBenefitsGrid";

const Cortinas = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero cortinas">
        <div className="hero-content">
          <h1>
            Limpieza de Cortinas
          </h1>

          <p>
            Descubre la solución perfecta para mantener tus cortinas impecables sin salir de casa.
            En Limpiezas La Galardonada, ofrecemos un servicio especializado de limpieza de cortinas
            a domicilio en la Comunidad de Madrid. Devuelve la elegancia de tus espacios con nuestros
            servicios de limpieza de cortinas, atención experta y resultados duraderos.
          </p>

          <div className="hero-buttons">
            <a href="/contacto" className="btn-outline">
              Contactar
            </a>
            <a href="/servicios" className="btn-outline">
              Resérvalo online
            </a>
          </div>
        </div>
      </section>
        <CortinasCleaningMadridSection />
        <CortinasCleaningInfoSection />
        <CortinasInfo />
        <CortinasBenefitsGrid />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Cortinas;
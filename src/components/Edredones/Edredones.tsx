import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import EdredonesCleaningMadridSection from "./EdredonesCleaningMadridSection";
import EdredonesCleaningInfoSection from "./EdredonesCleaningInfoSection";
import EdredonesInfo from "./EdredonesInfo";
import EdredonesBenefitsGrid from "./EdredonesBenefitsGrid";

const Edredones = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero edredones">
        <div className="hero-content">
          <h1>
            Limpieza de edredones
          </h1>

          <p>
            ¿Cansado de lidiar con edredones sucios y difíciles de lavar? En La Galardonada, te ofrecemos la solución perfecta. Somos expertos en limpieza de edredones con servicio a domicilio en la Comunidad de Madrid. Descubre cómo podemos devolver la frescura y comodidad a tu descanso.
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
        <EdredonesCleaningMadridSection />
        <EdredonesCleaningInfoSection />
        <EdredonesInfo />
        <EdredonesBenefitsGrid />
        <ContactInfo />
      <Footer />
    </div>
  );
};

export default Edredones;
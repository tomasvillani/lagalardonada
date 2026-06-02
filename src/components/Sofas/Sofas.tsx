import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SofaCleaningMadridSection from "./SofaCleaningMadridSection";
import SofasInfo from "./SofasInfo";
import SofaBenefitsGrid from "./SofaBenefitsGrid";
import ContactInfo from "../ContactInfo";
import SofaCleaningInfoSection from "./SofaCleaningInfoSection";
import ContactButton from "../ContactButton";
import SolicitarCitaButton from "../SolicitarCitaButton";

const Sofas = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero sofas">
        <div className="hero-content">
          <h1>
            Limpieza de sofas a domicilio. En Todo Madrid
          </h1>

          <p>
            ¿Tu sofá luce desgastado y sucio? ¿Sientes que ya no es el lugar acogedor que solía ser? No te preocupes, tenemos la solución perfecta para ti. Nuestro servicio de limpieza de sofás a domicilio te permite renovar tus sofás de manera rápida y sencilla, devolviéndoles su brillo y comodidad original.
          </p>

          <div className="hero-buttons">
            <ContactButton />
            <SolicitarCitaButton texto="Resérvalo online"/>
          </div>
        </div>
      </section>
        <SofaCleaningMadridSection />
        <SofaCleaningInfoSection />
        <SofasInfo />
        <SofaBenefitsGrid />
        <ContactInfo />
      <Footer />
    </div>
  );
};

export default Sofas;
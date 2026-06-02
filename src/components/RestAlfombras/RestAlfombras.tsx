import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import RestAlfombrasCleaningMadridSection from "./RestAlfombrasCleaningMadridSection";
import RestAlfombrasCleaningInfoSection from "./RestAlfombrasCleaningInfoSection";
import RestAlfombrasInfo from "./RestAlfombrasInfo";
import RestAlfombrasBenefitsGrid from "./RestAlfombrasBenefitsGrid";
import ContactButton from "../ContactButton";
import SolicitarCitaButton from '../SolicitarCitaButton'

const RestAlfombras = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />
      <section className="hero restalfombras">
        <div className="hero-content">
          <h1>
            Restauración de alfombras
          </h1>

          <p>
            En nuestro servicio de restauración y reparación de alfombras, devolvemos la vida y el esplendor a tus preciadas piezas. Con una atención meticulosa, nuestro equipo de expertos aborda cada detalle, desde reparaciones especializadas hasta restauraciones que preservan la autenticidad y belleza original de tus alfombras. Confía en nosotros para renovar y proteger tus alfombras.
          </p>

          <div className="hero-buttons">
            <ContactButton />
            <SolicitarCitaButton texto="Resérvalo online"/>
          </div>
        </div>
      </section>
      <RestAlfombrasCleaningMadridSection />
      <RestAlfombrasCleaningInfoSection />
      <RestAlfombrasInfo />
      <RestAlfombrasBenefitsGrid />
        <ContactInfo />
      <Footer />
    </div>
  );
};

export default RestAlfombras;
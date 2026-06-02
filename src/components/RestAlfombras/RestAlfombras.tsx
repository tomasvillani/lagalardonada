import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import RestAlfombrasCleaningMadridSection from "./RestAlfombrasCleaningMadridSection";
import RestAlfombrasCleaningInfoSection from "./RestAlfombrasCleaningInfoSection";
import RestAlfombrasInfo from "./RestAlfombrasInfo";
import RestAlfombrasBenefitsGrid from "./RestAlfombrasBenefitsGrid";

const RestAlfombras = () => {
  return (
    <div>
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
            <a href="/contacto" className="btn-outline">
              Contactar
            </a>
            <a href="/servicios" className="btn-outline">
              Resérvalo online
            </a>
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
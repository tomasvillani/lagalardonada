import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import AlfombrasCleaningMadridSection from "./AlfombrasCleaningMadridSection";
import AlfombrasCleaningInfoSection from "./AlfombrasCleaningInfoSection";
import AlfombrasInfo from "./AlfombrasInfo";
import AlfombrasBenefitsGrid from "./AlfombrasBenefitsGrid";

const Alfombras = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero alfombras">
        <div className="hero-content">
          <h1>
            Limpieza de Alfombras Madrid por tan sólo 45€
          </h1>

          <p>
            En Limpiezas La Galardonada nos enorgullece ofrecer un servicio especializado de <strong>limpieza de alfombras en la Comunidad de Madrid, incluyendo alfombras de lana, persas, nacionales, kilims y yute, entre otras.</strong> 
            Recupera la belleza original de tus alfombras y mantenlas en perfecto estado con nuestro equipo profesional y la comodidad de un <strong>servicio a domicilio con recogida, entrega, montaje y desmontaje</strong> incluido.  
            Además, todas nuestras limpiezas incluyen tratamientos antipolilla y antiácaros para garantizar la máxima higiene y protección.
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
      <AlfombrasCleaningMadridSection />
      <AlfombrasCleaningInfoSection />
      <AlfombrasInfo />
      <AlfombrasBenefitsGrid />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Alfombras;
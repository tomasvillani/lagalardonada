import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OurHistory from "./OurHistory";
import OurDedication from "./OurDedication";
import "../../style/AboutUsPage.css";
import FeaturesSection from "./FeaturesSection";
import NewsletterSection from "./NewLettersSection";
import JoinUsSection from "./JoinUsSection";
import ContactSection from "../ContactSection";
import ContactButton from "../ContactButton";
import OurServicesButton from "../OurServicesButton";

const AboutUsPage = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Descubre quiénes somos y cómo trabajamos en el Grupo La Galardonada</h1>
          <p>Tu destino de confianza para la limpieza de tus comodidades del hogar en Madrid.</p>
          <div className="about-hero-buttons">
            <OurServicesButton />
            <ContactButton />
          </div>
        </div>
      </section>

      <OurHistory />
      <OurDedication />
      <FeaturesSection />
      <NewsletterSection />
      <JoinUsSection />
      <ContactSection /> 
      <Footer />
    </div>
  );
};

export default AboutUsPage;
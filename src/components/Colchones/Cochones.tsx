import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactInfo from "../ContactInfo";
import ColchonesCleaningInfoSection from "./ColchonesCleaningInfoSection";
import ColchonesCleaningMadridSection from "./ColchonesCleaningMadridSection";
import ColchonesInfo from "./ColchonesInfo";
import ColchonesBenefitsGrid from "./ColchonesBenefitsGrid";
import ContactButton from "../ContactButton";
import SolicitarCitaButton from "../SolicitarCitaButton";

const Colchones = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero our-services">
        <div className="hero-content">
          <h1>
            Limpieza de Colchones
          </h1>

          <p>
            Contrata tu servicio de limpieza de colchones con todas las ventajas de nuestros servicios a domicilio. En La Galardonada ofrecemos nuestros servicios de limpieza de colchones en toda la comunidad de Madrid, esencial para mantener un entorno de descanso saludable. Nuestro servicio profesional elimina ácaros, alérgenos y manchas, brindando no solo limpieza, sino también un sueño más fresco y confortable
          </p>

          <div className="hero-buttons">
            <ContactButton />
            <SolicitarCitaButton texto="Resérvalo online"/>
          </div>
        </div>
      </section>
        <ColchonesCleaningMadridSection />
        <ColchonesCleaningInfoSection />
        <ColchonesInfo />
        <ColchonesBenefitsGrid />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Colchones;
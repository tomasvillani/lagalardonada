import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";import ContactInfo from "../ContactInfo";
import ContactoFaq from "./ContactoFaq";
import SolicitarCitaButton from '../SolicitarCitaButton'

const Galeria = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />
      <section className="hero contact">
        <div className="hero-content">
          <h1>
            Contáctanos
          </h1>

          <p>
            Descubre la ventaja de nuestros servicios y nuestra atención personalizada al cliente.
          </p>

          <div className="hero-buttons">
            <SolicitarCitaButton texto="Consigue tu presupuesto"/>
          </div>
        </div>
      </section>
      <ContactInfo />
      <ContactoFaq />
      <Footer />
    </div>
  );
};

export default Galeria;
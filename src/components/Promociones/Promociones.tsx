import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Formulario from "../Formulario";
import NuestrasPromociones from "./NuestrasPromociones";
import ContactSection from "../ContactSection";
import ContactButton from "../ContactButton";
import SolicitarCitaButton from '../SolicitarCitaButton'

const Promociones = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero promociones">
        <div className="hero-content">
          <h1>
            Promociones y Ofertas
          </h1>

          <p>
            Recibe tu promoción a tu medida con la ventaja de todos nuestros servicios.
          </p>

          <div className="hero-buttons">
            <SolicitarCitaButton texto="Consigue tu presupuesto"/>
            <ContactButton />
          </div>
        </div>
      </section>
      <Formulario imagen="/sofas/sofas-2.jpg" altImagen="Promociones"/>
      <NuestrasPromociones />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Promociones;
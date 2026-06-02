import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Formulario from "./Formulario";
import PreciosSofas from "./PreciosSofas";
import "../../style/Precios.css";
import PreciosCortinas from "./PreciosCortinas";
import PreciosAlfombras from "./PreciosAlfombras";
import PreciosEdredones from "./PreciosEdredones";
import PreciosRestAlfombras from "./PreciosRestAlfombras";
import ContactFaq from "./ContactFaq";

const RestAlfombras = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="hero precios">
        <div className="hero-content">
          <h1>
            Nuestros Precios
          </h1>

          <p>
            Consulta el precio de tu servicio aquí. En el grupo La Galardonada ofrecemos nuestros
            servicios al mejor precio con la garantía de nuestra calidad.
          </p>

          <div className="hero-buttons">
            <a href="/precios/#formulario_de_presupuesto_pag_servicio" className="btn-outline">
              Consigue tu presupuesto
            </a>
            <a href="/contacto" className="btn-outline">
              Contactar
            </a>
          </div>
        </div>
      </section>
      <Formulario />
      <PreciosSofas />
      <PreciosCortinas />
      <PreciosAlfombras />
      <PreciosEdredones />
      <PreciosRestAlfombras />
      <ContactFaq />
      <Footer />
    </div>
  );
};

export default RestAlfombras;
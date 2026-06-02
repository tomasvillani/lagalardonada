import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* 1 */}
        <div className="footer-col">
          <img src="/lagalardonada-footer.svg" alt="Logo" className="footer-logo" />
          <p>
            Expertos en limpieza profesional de sofás, colchones, alfombras y tapicerías en Madrid.
          </p>
        </div>

        {/* 2 */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📞 689 34 28 21</p>
          <p>✉️ info@lagalardonada.com</p>
          <p>📍 Madrid, España</p>
        </div>

        {/* 3 */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li>Limpieza de sofás a domicilio en Madrid</li>
            <li>Limpieza de alfombras en Madrid</li>
            <li>Limpieza de colchones a domicilio en Madrid</li>
            <li>Limpieza de edredones a domicilio en Madrid</li>
            <li>Restauración de alfombras</li>
            <li>Limpieza de cortinas en Madrid</li>
            <li>Mapa de la Web</li>
            <li>Posicionamiento web por SoySEOLocal</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Aviso Legal</li>
            <li>Política de privacidad</li>
            <li>Cookies</li>
          </ul>
        </div>

      </div>

      {/* SEPARADOR */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">
          📞 689 34 28 21 · ✉️ info@lagalardonada.com
        </div>

        <div className="footer-bottom-right">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
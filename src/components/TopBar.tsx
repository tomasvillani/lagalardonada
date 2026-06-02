import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      {/* IZQUIERDA */}
      <div className="topbar-left">
        <span>📞 689 342 821</span>
        <span>✉️ info@lagalardonada.es</span>
      </div>

      {/* DERECHA */}
      <div className="topbar-right">
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="#" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
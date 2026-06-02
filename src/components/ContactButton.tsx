import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <Link to="/contacto" className="btn-outline">
        Contactar
    </Link>
  );
};

export default ContactButton;
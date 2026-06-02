import { Link } from 'react-router-dom';

interface SolicitarButtonProps {
  texto: string;
}

const SolicitarButton = ({ texto }: SolicitarButtonProps) => {
  return (
    <Link to="/solicita-tu-cita" className="btn-outline">
      {texto}
    </Link>
  );
};

export default SolicitarButton;
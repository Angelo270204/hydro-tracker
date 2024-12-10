import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/app">Inicio</Link>
        </li>
        <li>
          <Link to="/goal">Establecer Meta</Link>
        </li>
        <li>
          <Link to="/log">Registrar Consumo</Link>
        </li>
        <li>
          <Link to="/history">Historial</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
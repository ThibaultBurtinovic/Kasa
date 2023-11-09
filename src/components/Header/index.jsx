
import { NavLink, Link } from 'react-router-dom'
import logo from "../../assets/LOGO.svg";
import './header.scss'
    
function Header() {
  return (
    <header className="headerWrapper">
        <Link to='/'>
      <img src={logo} alt="Kasa Logo" className="nav-logo" />
        </Link>
        
      <nav className="nav">
        <ul>
            <NavLink to='/'>
            <li>Accueil</li>
            </NavLink>
            <NavLink to='A-propos'>
            <li>A Propos</li>
            </NavLink>
        </ul>

      </nav>
    </header>
  );
}

export default Header;

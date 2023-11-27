
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from "../../assets/LOGO.svg";
import './header.scss';

function Header() {
  const location = useLocation();
  const isAccueilActif = location.pathname === '/Kasa';
  const isAProposActif = location.pathname === '/A-propos';

  return (
    <header className="headerWrapper">
      <Link to='/Kasa'>
        <img src={logo} alt="Kasa Logo" className="nav-logo" />
      </Link>

      <nav className="nav">
        <ul>
          <NavLink to='/Kasa'>
            <li className={isAccueilActif ? 'underline' : ''}>Accueil</li>
          </NavLink>
          <NavLink to='/A-propos'>
            <li className={isAProposActif ? 'underline' : ''}>A&nbsp;Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
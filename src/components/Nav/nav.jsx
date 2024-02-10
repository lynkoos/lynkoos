import React, { useEffect } from 'react';
import './css/Index.css';
import feather from 'feather-icons';

const Nav = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link"><i data-feather="home"></i><span>Inicio</span></a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link"><i data-feather="message-square"></i><span>Mensajes</span></a>        
        </li>
        <li className="navbar__item">
          <a href="/usuarios" className="navbar__link"><i data-feather="users"></i><span>Usuarios</span></a>        
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link"><i data-feather="star"></i><span>Favoritos</span></a>        
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link"><i data-feather="archive"></i><span>Guardados</span></a>        
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link"><i data-feather="help-circle"></i><span>Ayuda</span></a>        
        </li>
        <li className="navbar__item">
          <a href="/ajustes" className="navbar__link"><i data-feather="settings"></i><span>Ajustes</span></a>        
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

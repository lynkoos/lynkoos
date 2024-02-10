// File: src/components/dist/Nav.jsx
import React from 'react';
import '../css/Index.css'

const Nav = ({ Nav }) => {
  return (
    <div className='cont'>
      <header>
        <div className="container">
          <a href="/" className="logo"><b>L</b>ynkoos</a>
          <ul className="links">
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Trabajo</li>
            <li>Informacion</li>
            <li>
              <a href="/blog" target="_blank" rel="noopener noreferrer">Registrate</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Nav;
// src/acount/Index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logo from '../assets/LogoRed.png';

function Index() {
  return (
    <div className="index-container">
      <img src={logo} alt="Lyred Logo" className="logo" />
      <h2>Bienvenido a Lyred</h2>
      <p>Un entorno hecho para los trabajadores de lynkoos</p>
      <Link to="/acount/login">
        <button>Iniciar Sesión</button>
      </Link>
    </div>
  );
}

export default Index;

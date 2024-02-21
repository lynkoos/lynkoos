import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Index() {
  return (
    <div className="index-container">
      <div className="index-back">
        <h1 className="index-title">Bienvenido a Artevo</h1>
        <p className="index-description">Descubre y comparte arte en 3D</p>
        <p className="index-action">¡Regístrate o <Link to="/login" className="index-link">inicia sesión</Link> para comenzar!</p>
      </div>
    </div>
  );
}

export default Index;

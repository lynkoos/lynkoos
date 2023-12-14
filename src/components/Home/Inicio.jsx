// src/components/Home/Home.jsx
import React from 'react';

const Home = () => {
  
  const usuarioRandom = {
    nombre: 'karol',
    apellido: 'florez',
    edad: 20,
  };

  const endpointUsuario = `/o/${usuarioRandom.nombre.toLowerCase()}${usuarioRandom.apellido.toLowerCase()}`;

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>¡Bienvenido a tu página de inicio!</p>
      <div>
        <h2>Información del Usuario</h2>
        <p>Nombre: {usuarioRandom.nombre}</p>
        <p>Apellido: {usuarioRandom.apellido}</p>
        <p>Edad: {usuarioRandom.edad}</p>
      </div>
      <div>
        <a href={endpointUsuario} target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña</a>
      </div>
    </div>
  );
};

export default Home;

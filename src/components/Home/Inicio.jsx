// src/components/Home/Home.jsx
import React from 'react';
import './Inicio.css';

const Home = () => {
  
  const usuarioRandom = {
    nombre: 'karol',
    apellido: 'florez',
    edad: 20,
  };

  const endpointUsuario = `/o/${usuarioRandom.nombre.toLowerCase()}${usuarioRandom.apellido.toLowerCase()}`;

  return (
    <div>
      <div className='display'>

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

      <div className='di'>
        <div className='derdi'>
          <div>
            <div>
              <img className='user-image' src="https://img.icons8.com/?size=256&id=AZazdsitsrgg&format=png" alt="User" />
            </div>
            <div>
              <h3>Nombre</h3>
              <h3>Apellido</h3>
            </div>
          </div>
        </div>
        <div className='izdi'></div>
      </div>


    </div>
    
  );
};

export default Home;

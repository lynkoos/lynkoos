// src/components/Home/Home.jsx
import React from 'react';
import './Inicio.css';
const Home = () => {
  const usuarioRandom = {
    nombre: 'Karol',
    apellido: 'Florez',
    follower: 3591,
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
          <div className='content-di'>
            <div className='Icon-User User-Icon'>
              <div>
                <img className='user-image' src="https://media.discordapp.net/attachments/1123832495171965049/1184913088135319755/Screenshot_20231203-0035022.png?ex=658db34e&is=657b3e4e&hm=85d2331b7e8b780e3cbb4d728f9734b3c0758faf5f0d87603438da42e4742d8e&=&format=webp&quality=lossless&width=522&height=522" alt="User"/>
              </div>
              <div className='Verified-icon'>
                <img className='Verified-user' src="https://media.discordapp.net/attachments/1055292395505332336/1184904520833187930/verificado.png?ex=658dab54&is=657b3654&hm=69a65482c187148fb458b91139779c095a036ee765561fca251c30d7a57d1567&=&format=webp&quality=lossless&width=50&height=50" alt="Verified" />
              </div>
            </div>
            <div className='User-Name'>
              <h3>{usuarioRandom.nombre}</h3>
              <h3>{usuarioRandom.apellido}</h3>
            </div>
            <div className='follow-acount'>
              <h5>Seguidores</h5>
              <div>
                <h5>{usuarioRandom.follower}</h5>
              </div>
            </div>
          </div>
          <div>
            <div className='content_back'>
              <div className='Content_follow'>
                <div className='follow-content'>
                  <div className='Cursor-Follow'>
                    <img className='Img-user-Follow' src="https://img.icons8.com/?size=256&id=6svx5N5sTaA0&format=png" alt="icon user" />
                  </div>
                  <h3 className='Cursor-Follow'>{usuarioRandom.nombre}</h3>
                  <div>
                  <a className='Cursor-Follow' href={endpointUsuario} target="_blank" rel="noopener noreferrer">Seguir</a>
                  </div>
                </div>
                <hr />
                <div className='follow-content'>
                  <div className='Cursor-Follow'>
                    <img className='Img-user-Follow' src="https://img.icons8.com/?size=256&id=6svx5N5sTaA0&format=png" alt="icon user" />
                  </div>
                  <h3 className='Cursor-Follow'>{usuarioRandom.nombre}</h3>
                  <div>
                  <a className='Cursor-Follow' href={endpointUsuario} target="_blank" rel="noopener noreferrer">Seguir</a>
                  </div>
                </div>
                <hr />
                <div className='follow-content'>
                  <div className='Cursor-Follow'>
                    <img className='Img-user-Follow' src="https://img.icons8.com/?size=256&id=6svx5N5sTaA0&format=png" alt="icon user" />
                  </div>
                  <h3 className='Cursor-Follow'>{usuarioRandom.nombre}</h3>
                  <div>
                  <a className='Cursor-Follow' href={endpointUsuario} target="_blank" rel="noopener noreferrer">Seguir</a>
                  </div>
                </div>
                <hr />
                <div className='follow-content'>
                  <div className='Cursor-Follow'>
                    <img className='Img-user-Follow' src="https://img.icons8.com/?size=256&id=6svx5N5sTaA0&format=png" alt="icon user" />
                  </div>
                  <h3 className='Cursor-Follow'>{usuarioRandom.nombre}</h3>
                  <div>
                  <a className='Cursor-Follow' href={endpointUsuario} target="_blank" rel="noopener noreferrer">Seguir</a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className='izdi'></div>
      </div>
    </div>
  );
};
export default Home;
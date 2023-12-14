// src/components/Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div className='log-container'>
      <div className='log-img'>
        <div className='text-cont'>
          <p className='Text-Par'>Nice to see you again</p>
          <div className='text-up'>
            <h1>Welcome to </h1>
          </div>
        </div>
        <img src="https://media.discordapp.net/attachments/1055292395505332336/1184636863307337818/logosn.png?ex=658cb20d&is=657a3d0d&hm=7db25faf994ee479b32f416c9b183cb501032dbf8450c8a52f834da631aa0939&=&format=webp&quality=lossless&width=625&height=625" alt="Logo" />
      </div>
      <div className='log-cod'>
        <div className='cont-card'>
          <h3>Discovery Adventure</h3>
          <div className='card-img'>
            <img src="https://media.discordapp.net/attachments/1055292395505332336/1182852245621063802/coding.png?ex=658633ff&is=6573beff&hm=ecec8fd53de192070cad4c368c59519db549d6a165e4768bd62bc469af508a14&=&format=webp&quality=lossless" alt="" />
          </div>
        </div>
        <div className='Log-text'>
          <h2>Login</h2>
          <div className='Log-textP'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet
              perferendis numquam expedita magnam obcaecati iusto
            </p>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <label>
            Usuario:
          </label>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>
            Contraseña:
          </label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className='submit'>
            Iniciar sesión
          </button>
          <div className='check'>
            <input type="checkbox" className='check-button' required name="pqr" id="pqr" />
            <p>
              Acepto los términos y condiciones
            </p>
          </div>
          <div>
            <a href="/#">
              Restablecer contraseña
            </a>
          </div>
          <button type='button'>
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

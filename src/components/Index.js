import React from 'react';
import Imagesvg from '../img/logo-black.svg';
import Imagepng from '../img/Logo-Black.png';
import UserPng from '../img/user.png';
import './index.css';

const Index = () => {
  return (
    <div className='Content'>
      <div className='watch'>
        <a href='/'>
          <img src={Imagesvg} alt='Logo'></img>
        </a>
      </div>
      <div className='landing'>
        <div className='nav'>
          <div className='Nav-logo'>
            <a href='/'><img src={Imagesvg} alt='Logo'></img></a>
          </div>                                                                                                                                                       
          <ul className='list'> 
            <li>
              <a href='/contacto'>Contacto</a>
            </li>
            <li>
              <a href='/soporte'>Soporte</a>
            </li>
            <li>
              <a href='/acerca'>Acerca</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
          <div className='User-nav'>
            <a href='/cuenta'>
              <img src={UserPng} alt='User'></img>
            </a>
          </div>
        </div>
        <div className='main'>
          <div className='main-cont'>
            <div className='main-left'>
              <div className='cont-text'>
                <p className='title'>Bienvenido a <strong>Lynkoos</strong></p>
                <p></p>
              </div>
            </div>
            <div className='main-right'>
              <div>
                <div className='LogoPng'>
                  <img src={Imagepng} alt="logo" />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Index;

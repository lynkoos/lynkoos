import React from 'react';
import Imagesvg from '../img/logo-black.svg';
import Imagepng from '../img/Logo-Black.png';
import './index.css';

const Index = () => {
  return (
    <div className='Content'>
      <div className='watch'>
        <img src={Imagesvg} alt="logo" />
      </div>
      <div className='landing'>
        <div className='nav'>
          <div className='Nav-logo'>
            <img src={Imagesvg} alt="logo" />
          </div>                                                                                                                                                       
          <ul className='list'> 
            <li>
              <a href='/#'>Contacto</a>
            </li>
            <li>
              <a href='/#'>Soporte</a>
            </li>
            <li>
              <a href='/#'>Acerca</a>
            </li>
            <li>
              <a href='/#'>Blog</a>
            </li>
          </ul>
          <div className='User-nav'>
            <img src={Imagesvg} alt="logo" />
            <img src={Imagesvg} alt="logo" />
          </div>
        </div>
        <div className='main'>
          <div className='main-cont'>
            <div className='main-left'>
              <div className='cont-text'>
                <p className='title'>The Perfect Moment</p>
                <p>Between Past And <br></br> Future</p>
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

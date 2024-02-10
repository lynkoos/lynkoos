// File: src/components/dist/Section.jsx
import React from 'react';
import ImgPleaceholer from '../img/img500x300.jpeg'
import '../css/Index.css'

const Section = ({ Section }) => {
  return (
    <div>
      <div>
      <div className="landing-page">
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Compartir Te Conecta</h1>
              <button>Iniciar</button>
            </div>
            <div className="image">
              <img src={ImgPleaceholer} alt="Logo No Disponible" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Section;
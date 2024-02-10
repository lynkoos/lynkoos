// File: src/components/Depen.js
import React from 'react';
import './dist/css/Index.css'
import Nav from '../Nav/nav'
import Div from './dist/Div/div'


const Depen = () => {
  return (
    <div className='class-sett-cont'>
      <div className='class-sett-cont-iz'>
        <div className='class-cont-sett'>
          <Nav/>
        </div>
      </div>
      <Div></Div>
    </div>
  );
}

export default Depen;
// File: src/components/dist/Index.jsx
import React from 'react';
import '../css/Index.css'
import Nav from '../../Nav/nav'
import Der from './Der'
import Izq from './Izq'

const Index = ({ Index }) => {
    return (
        <div>
            <div className='class-sett-cont'>
                <Izq>
                    <Nav></Nav>
                </Izq>
                <Der></Der>
            </div>
        </div>
    );
}

export default Index;
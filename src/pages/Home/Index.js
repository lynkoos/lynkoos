import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css'; 

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenido a la aplicación de mensajería y agenda</h1>
            <div className="cards-container">
                <div className="card">
                    <h2>Enviar Mensajes</h2>
                    <p>Envía mensajes a tus contactos de manera rápida y sencilla.</p>
                    <Link to="/chat" className="button">Ir a Enviar Mensajes</Link>
                </div>
                <div className="card">
                    <h2>Agendar Citas</h2>
                    <p>Programa reuniones y citas con tus contactos para mantener un calendario organizado.</p>
                    <Link to="/agendar-citas" className="button">Ir a Agendar Citas</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

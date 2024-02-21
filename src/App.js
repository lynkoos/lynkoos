// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Inicio';
import Index from './components/Index';
import User from './components/User/User';
import O from './components/O/Public';
import Register from './components/Register/Register';
import Contacto from './components/Contact/Contact';
import Support from './components/Support/Suport';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Acount from './components/Acount/Acount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/register" element={<Register />} />
        <Route path="/soporte" element={<Support />} />
        <Route path="/cuenta" element={<Acount />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Index />} />
        <Route path="/o/:nombreUsuario" element={<O />} />
      </Routes>
    </Router>
  );
}

export default App;
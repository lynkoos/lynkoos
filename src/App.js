// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Inicio';
import Index from './components/Index';
import User from './components/User/User';
import O from './components/O/Public';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/" element={<Index />} />
        <Route path="/o/:nombreUsuario" element={<O />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './acount/Index';
import Login from './acount/Login/Index';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/acount/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
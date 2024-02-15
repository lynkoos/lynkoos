import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './acount/Index';
import Login from './acount/Login/Index';
import HomeScreen from './pages/Home/Index';
import ChatScreen from './pages/Messenger/Index';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/acount/login" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
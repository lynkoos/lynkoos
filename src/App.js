import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Blog from './components/Blog/Index';
import Setting from './components/Setting/Index'
import Users from './components/Users/Index'
import Test from './components/Cont/Index'
import './App.css'
import './Root.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/ajustes' element={<Setting/>}/>
        <Route path='/usuarios' element={<Users/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from './api/Api'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';

import './App.css'

const App = () => {
  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  </div>;
};

export default App;

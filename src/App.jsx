import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from './api/Api'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';

import './App.css'
import ProtectedRoute from './components/Helper/ProtectedRoute';
import User from './components/user/User';

const App = () => {
  return <div>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path='conta/*' element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute >}
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;

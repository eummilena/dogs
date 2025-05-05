import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from './api/Api'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';
import Photo from './components/photo/Photo';

import './App.css'
import ProtectedRoute from './components/Helper/ProtectedRoute';
import User from './components/user/User';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/NotFound';

const App = () => {
  return <div className='App'>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className='AppBody'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path='conta/*' element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute >}
            />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;

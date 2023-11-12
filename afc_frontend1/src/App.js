import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Landing from './components/publicasLogueo/Landing';
import Header from './components/comunes/Header'
import Login from './components/publicasLogueo/Login'
import Register from './components/publicasLogueo/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

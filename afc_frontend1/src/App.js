import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Landing from './components/publicasLogueo/Landing';
import Header from './components/comunes/Header'
import Login from './components/publicasLogueo/Login'
import Register from './components/publicasLogueo/Register';
import RegisterCliente from './components/cliente/RegisterCliente'
import ListadoCliente from './components/cliente/ListadoCliente'
import RegisterFacturaVenta from './components/facturasVentas/RegisterFacturaVenta'

import ListFacturaVenta from './components/facturasVentas/ListFacturaVenta'
import RegisterIncidentes from './components/incidentes/RegisterIncidentes'
import ListIncidentes from './components/incidentes/ListIncidentes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cliente/register' element={<RegisterCliente />} />
        <Route path='/cliente/listado' element={<ListadoCliente />} />
        <Route path='/factura/venta/register' element={<RegisterFacturaVenta />} />

        <Route path='/factura/venta/list' element={< ListFacturaVenta />} />
        <Route path='/incidentes/registro' element={< RegisterIncidentes />} />
        <Route path='/incidentes/list' element={<  ListIncidentes />} />

       

      </Routes>
    </BrowserRouter>
  );
}

export default App;

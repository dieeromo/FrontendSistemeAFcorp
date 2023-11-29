import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Landing from './components/publicasLogueo/Landing';

import Login from './components/publicasLogueo/Login'
import Register from './components/publicasLogueo/Register';
import RegisterCliente from './components/cliente/RegisterCliente'
import ListadoCliente from './components/cliente/ListadoCliente'


import RegisterFacturaVenta from './components/facturasVentas/RegisterFacturaVenta'
import RegisterDetalle from './components/facturasVentas/RegisterDetalle'


import ListFacturaVenta from './components/facturasVentas/ListFacturaVenta'
import RegisterIncidentes from './components/incidentes/RegisterIncidentes'
import ListIncidentes from './components/incidentes/ListIncidentes'
import RegisterProductos from './components/productos/RegisterProductos'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/cliente/register' element={<RegisterCliente />} />
        <Route path='/cliente/listado' element={<ListadoCliente />} />


        <Route path='/factura/venta/register' element={<RegisterFacturaVenta />} />

        <Route path='/factura/venta/list' element={< ListFacturaVenta />} />
        <Route path='/factura/venta/register/detalle' element={< RegisterDetalle />} />
   


        <Route path='/incidentes/registro' element={< RegisterIncidentes />} />
        <Route path='/incidentes/list' element={<  ListIncidentes />} />

        
        <Route path='/productos/register' element={<  RegisterProductos />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;

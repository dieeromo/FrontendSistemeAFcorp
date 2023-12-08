import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//componentes
import Landing from './components/publicasLogueo/Landing';

import Login from './components/publicasLogueo/Login'
import Register from './components/publicasLogueo/Register';
import RegisterCliente from './components/cliente/RegisterCliente'
import ListadoCliente from './components/cliente/ListadoCliente'



import RegisterFacVenta from './components/facturasVentas/RegisterFacVenta'
import ListFacturaVenta from './components/facturasVentas/ListFacturaVenta'
import ShowFacturaDetalle from './components/facturasVentas/ShowFacturaDetalle'

import RegisterProductos from './components/productos/RegisterProductos'

//INCIDENTES
import RegisterIncidentes from './components/incidentes/RegisterIncidentes'
import ListIncidentes from './components/incidentes/ListIncidentes'

//BITACORA
import RegisterEquipoRed from './components/bitacora/RegisterEquipoRed'
import ListEquipoRed from './components/bitacora/ListEquiposRed'
import RegTrazadoFO from './components/bitacora/RegTrazadosFO'
import ListTrazadoFO from './components/bitacora/ListTrazadoFO'
import RegTrabajoFO from './components/bitacora/RegTrabajoFO'
import ListTrabajosFO from './components/bitacora/ListTrabajosFO'


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

        <Route path='/factura/venta/registro' element={<RegisterFacVenta />} />
        <Route path='/factura/venta/list' element={< ListFacturaVenta />} />
        <Route path='/factura/venta/show/' element={< ShowFacturaDetalle />} />

       
   


        <Route path='/incidentes/registro' element={< RegisterIncidentes />} />
        <Route path='/incidentes/list' element={<  ListIncidentes />} />

        
        <Route path='/productos/register' element={<  RegisterProductos />} />
      

        <Route path='/bitacora/register_equipo' element={<  RegisterEquipoRed />} />
        <Route path='/bitacora/list_equipo' element={<  ListEquipoRed />} />
        <Route path='/bitacora/register_trazado_fo' element={<RegTrazadoFO/>}/>
        <Route path='/bitacora/list_trazado_fo' element={<ListTrazadoFO/>} />
        <Route path='/bitacora/register_trabajo_fo' element={<RegTrabajoFO/>}/>
        <Route path='/bitacora/list_trabajo_fo' element={<ListTrabajosFO/>}/>






      </Routes>
    </BrowserRouter>
  );
}

export default App;

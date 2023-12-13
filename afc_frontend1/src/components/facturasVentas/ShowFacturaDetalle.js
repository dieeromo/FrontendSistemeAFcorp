import NavbarAF from '../comunes/NavbarAF'
import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

import MUIDataTable from "mui-datatables"

//import { useParams } from 'react-router-dom'
//import { useEffect } from 'react'
import Select from 'react-select'
import { SelectorFacturasV } from './norender/selectorFacturasV'
import {facturaVentaDetallesSolaAction } from '../../actions/facturaVentaActions'



const ShowFacturaDetalle = ({facturaDetalleSola }) => {
    const dispatch = useDispatch();
    const [factura, setFactura] = useState('')
    

    const handleClick = (event) => {
        dispatch(
            facturaVentaDetallesSolaAction(factura)
            )
    }
    console.log(facturaDetalleSola)

    const columns = [
        {
            name: 'factura',
            label: '# Factura'
        },
        {
            name: 'producto',
            label: 'Producto'
        },
        {
            name: 'precio',
            label: 'precio USD'
        },
        {
            name: 'cantidad',
            label: 'Cantidad'
        },
        {
            name: 'subtotal',
            label: 'Subtotal'
        },
        {
            name: 'total',
            label: 'Total'
        },
        {
            
            name: 'bodega',
            label: 'Bodega'
        },
        {
            name: 'user',
            label: 'Digitador'
        },
    ]

    return (
        <>
            <NavbarAF />

            <div>
                <div>
                    <h1>Detalles factura</h1>
                    <label htmlFor="factura">Factura:</label>
                    <Select
                        options={SelectorFacturasV()}
                        onChange={(e) => {
                            setFactura(e.value)
                        }}
                    />
                </div>

                <button onClick={handleClick}> Mostrar</button>
                <MUIDataTable
                title = {"Detalle"}
                data = {facturaDetalleSola}
                columns = {columns}
                />
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    facturaDetalleSola: state.facturaVentaDetallesSola.facturaDetalleSola
})

const mapDispatchToProps = {
    facturaVentaDetallesSolaAction 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFacturaDetalle )


///////////////
// import NavbarAF from '../comunes/NavbarAF'
// import { connect, useDispatch, useSelector } from 'react-redux'
// import { Selector_All_UltimaFactura } from './norender/selectorFacturasV'
// import {detalleUltimaFacturaVentaAction} from '../../actions/facturaVentaActions'
// import MUIDataTable from "mui-datatables"

// const ShowFacturaDetalle = ({detalleVentas}) => {
//     const dispatch = useDispatch()
//     const ultima = Selector_All_UltimaFactura()

//     const handleClick = (event) => {
//         dispatch(detalleUltimaFacturaVentaAction(ultima.id))
//     }

//     //console.log(detalleVentas)

//     const columns = [
//         {
//             name : "producto",
//             label : "Producto"
//         },
//         { 
//             name : "cantidad",
//             label : "Cantidad"
//         },
//         {
//             name: "precio",
//             label: "precio"
//         },
//         {
//             name: "subtotal",
//             label: "Subtotal"
//         },
//         {
//             name: "bodega",
//             label: "Bodega"
//         },

//     ]



//     //console.log(detalles)
//     return (
//         <>
//             <NavbarAF />
//             <div className='show-factura-container'>
//                 <h1>detalles de factura</h1>
//                 <div>Factura #:{ultima.numero}</div>
//                 <div>Fecha:{ultima.fecha}</div>
//                 <div>Cliente: {ultima.cliente}</div>
//                 <div>Empresa: {ultima.empresa}</div>
//                 <div>Modo compra: {ultima.modo_cv}            </div>
//                 <div>Plazo:{ultima.plazo_meses}</div>
//                 <div>Monto:{ultima.monto}</div>
//                 <div>Saldo: {ultima.saldo}</div>
//                 <div>Digitador: {ultima.user}</div>
//                 <button onClick={handleClick}>Mostrar</button>
//                 <div>
//                     <MUIDataTable
//                     title = {"Detalle"}
//                     data = {detalleVentas}
//                     columns = {columns}
//                     />
//                 </div>
//             </div>

//         </>
//     )
// }

// const mapStateToProps = (state) =>({
//     detalleVentas: state.detalleFacturaVentaList.detalleVentas
// })

// const mapDispatchToProps = {
//     detalleUltimaFacturaVentaAction,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ShowFacturaDetalle)
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {listFacturaVentaAction, getUltimaFacturaVentaAction , allUltimaFacturaVentaAction, detalleUltimaFacturaVentaAction} from '../../../actions/facturaVentaActions'


// export function SelectorDetalleultimaFacturaVenta(props){
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(detalleUltimaFacturaVentaAction(props.id))
//     }, [dispatch])
          
//     const detalleFacturaVentaList = useSelector(state => state.detalleFacturaVentaList)
//     const {error, loading, detalleVentas} = detalleFacturaVentaList
//     return(detalleVentas)
// }

export function Selector_All_UltimaFactura(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUltimaFacturaVentaAction())
    }, [dispatch])

    const facturaVentasList = useSelector(state => state.facturaVentasList)
    const {error, loading, facturasVentas} = facturaVentasList

    return(facturasVentas)
}


export function SelectorUltimaFactura(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUltimaFacturaVentaAction())
    }, [dispatch])

    const facturaVentasList = useSelector(state => state.facturaVentasList)
    const {error, loading, facturasVentas} = facturaVentasList
    return(facturasVentas)
}


export function SelectorFacturasV(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listFacturaVentaAction())
    }, [dispatch])

    const facturaVentasList = useSelector(state => state.facturaVentasList)
    const {error, loading, facturasVentas} = facturaVentasList


    const lista_facturas_vendidas = facturasVentas.map((item) => (
        {

            id : item.id,
            numero : item.numero,
            fecha : item.fecha,
            cliente : item.cliente,
            modo_cv : item.modo_cv,
            user: item.user,
            empresa: item.empresa,
            estado_pago : item.estado_pago ? "Pagado": "No Pagado",
            monto : item.monto,
            saldo : item.saldo,
            plazo_meses : item.plazo_meses,
            observacion : item.observacion
        }
    
    ))
    return( lista_facturas_vendidas)
}
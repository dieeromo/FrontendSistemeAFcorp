import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {listFacturaVentaAction} from '../../../actions/facturaVentaActions'

export function SelectorFacturasV(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listFacturaVentaAction())
    }, [dispatch])

    const facturaVentasList = useSelector(state => state.facturaVentasList)
    const {error, loading, facturasVentas} = facturaVentasList


    const lista_facturas_vendidas = facturasVentas.map((item) => (
        {
   
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
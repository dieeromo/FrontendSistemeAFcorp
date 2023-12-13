

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {listCobroFacturaAction} from '../../../actions/cobrosActions'
import {SelectorCliente} from '../../cliente/norender/selectoresClientes'  //solo solucion temporal
import {SelectorFacturasV} from '../../facturasVentas/norender/selectorFacturasV' //solo solucion temporal

export function SelectorCobro(){
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listCobroFacturaAction())
    }, [dispatch])

    const cobroFacturaList = useSelector(state => state.cobroFacturaList)
    const {error,loading,cobrosFacturas} = cobroFacturaList

    
    const lista_cobros = cobrosFacturas.map((item) =>({
        label: item.factura + " " + item.fecha + " " + item.monto_pago,
        value : item.id,


        factura: item.factura,
       
        fecha: item.fecha,
        monto_pago : item.monto_pago,
        monto_capital : item.monto_capital,
        monto_interes : item.monto_interes,
        caja : item.caja,
        empresa : item.empresa,
        observacion : item.observacion


    }))
    return(lista_cobros)
}
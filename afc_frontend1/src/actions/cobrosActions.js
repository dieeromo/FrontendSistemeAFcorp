import axios from 'axios'
import {
    COBRO_FACTURA_VENTA_CREATE_REQUEST,
    COBRO_FACTURA_VENTA_CREATE_SUCCESS,
    COBRO_FACTURA_VENTA_CREATE_FAIL,
    
    COBRO_FACTURA_VENTA_LIST_REQUEST,
    COBRO_FACTURA_VENTA_LIST_SUCCESS,
    COBRO_FACTURA_VENTA_LIST_FAIL,
    
} from '../constants/CobrosConstants'

import {RUTA_SERVIDOR} from '../ApiRoutes'

export const createCobroFacturaAction = (id_empresa,id_factura,fecha,montoPago,montoCapital,montoInteres,saldoActual, saldoAnterior, observacion) => async (dispatch, getState) => {

    try {
        dispatch({
            type: COBRO_FACTURA_VENTA_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(RUTA_SERVIDOR + `/cobros/registro/${id_factura}/${id_empresa}/`,
            {
                'fecha':fecha,
                'monto_pago':montoPago,
                'monto_capital':montoCapital,
                'monto_interes':montoInteres,
                'saldo_anterior':saldoAnterior,
                'saldo_actual':saldoActual,
                'observacion':observacion,
            },config
        )


        dispatch({
            type: COBRO_FACTURA_VENTA_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: COBRO_FACTURA_VENTA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listCobroFacturaAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COBRO_FACTURA_VENTA_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/cobros/listcobros/`, config);

        dispatch({
            type: COBRO_FACTURA_VENTA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COBRO_FACTURA_VENTA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

import axios from 'axios';
import {
FACTURA_VENTA_LIST_REQUEST,
FACTURA_VENTA_LIST_SUCCESS,
FACTURA_VENTA_LIST_FAIL,
FACTURA_VENTA_LIST_RESET,

FACTURA_VENTA_DELETE_REQUEST,
FACTURA_VENTA_DELETE_SUCCESS,
FACTURA_VENTA_DELETE_FAIL,

FACTURA_VENTA_CREATE_REQUEST,
FACTURA_VENTA_CREATE_SUCCESS ,
FACTURA_VENTA_CREATE_FAIL,

//DETALLE DE FACTURAS
FACTURA_DETALLE_VENTA_CREATE_REQUEST,
FACTURA_DETALLE_VENTA_CREATE_SUCCESS,
FACTURA_DETALLE_VENTA_CREATE_FAIL,

FACTURA_DETALLE_VENTA_LIST_REQUEST,
FACTURA_DETALLE_VENTA_LIST_SUCCESS,
FACTURA_DETALLE_VENTA_LIST_FAIL,
} from '../constants/facturasVentasConstants'
import {RUTA_SERVIDOR} from '../ApiRoutes'




export const createFacturaDetalleVentaAction = (id_factura,id_producto,precio, cantidad, subtotal, total,id_bodega, id_empresa,) => async (dispatch, getState) => {

    try {
        dispatch({
            type: FACTURA_DETALLE_VENTA_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/facturaventa/registro_detalle/${id_factura}/${id_producto}/${id_bodega}/${id_empresa}/`,
            {
                'precio': precio,
                'cantidad': cantidad,
                'subtotal':subtotal,
                'total':total,
            },config
        )


        dispatch({
            type: FACTURA_DETALLE_VENTA_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: FACTURA_DETALLE_VENTA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const createFacturaVentaAction = (numero, fecha, cliente, modocv, empresa) => async (dispatch, getState) => {
 
    try {
        dispatch({
            type: FACTURA_VENTA_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/facturaventa/registro/${cliente}/${modocv}/${empresa}/`,
            {
                'numero': numero,
                'fecha': fecha,
                'monto':'',
                'saldo':'',
                'plazo_meses':'',
                'observacion':'',
            },config
        )


        dispatch({
            type: FACTURA_VENTA_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: FACTURA_VENTA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listFacturaVentaAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FACTURA_VENTA_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/facturaventa/list/`, config);

        dispatch({
            type: FACTURA_VENTA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FACTURA_VENTA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

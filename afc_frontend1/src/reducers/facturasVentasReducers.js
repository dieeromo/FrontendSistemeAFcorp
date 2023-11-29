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


export const facturaDetalleVentaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FACTURA_DETALLE_VENTA_CREATE_REQUEST:
            return { loading: true }

        case FACTURA_DETALLE_VENTA_CREATE_SUCCESS:
            return { loading: false, success: true, facturaDetalleVenta: action.payload }

        case FACTURA_DETALLE_VENTA_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}





export const facturaVentaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FACTURA_VENTA_CREATE_REQUEST:
            return { loading: true }

        case FACTURA_VENTA_CREATE_SUCCESS:
            return { loading: false, success: true, facturaVenta: action.payload }

        case FACTURA_VENTA_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const facturaVentasListReducer = (state = { facturasVentas: [] }, action) => {
    switch (action.type) {
        case FACTURA_VENTA_LIST_REQUEST:
            return { loading: true, facturasVentas: [] }

        case FACTURA_VENTA_LIST_SUCCESS:
            return { loading: false, facturasVentas: action.payload }

        case FACTURA_VENTA_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


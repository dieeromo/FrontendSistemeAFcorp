import {
COBRO_FACTURA_VENTA_CREATE_REQUEST,
COBRO_FACTURA_VENTA_CREATE_SUCCESS,
COBRO_FACTURA_VENTA_CREATE_FAIL,

COBRO_FACTURA_VENTA_LIST_REQUEST,
COBRO_FACTURA_VENTA_LIST_SUCCESS,
COBRO_FACTURA_VENTA_LIST_FAIL,


} from '../constants/CobrosConstants'

export const cobroFacturaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case COBRO_FACTURA_VENTA_CREATE_REQUEST:
            return { loading: true }

        case COBRO_FACTURA_VENTA_CREATE_SUCCESS:
            return { loading: false, success: true, cobroFactura: action.payload }

        case COBRO_FACTURA_VENTA_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const cobroFacturaListReducer = (state = { cobrosFacturas: [] }, action) => {
    switch (action.type) {
        case COBRO_FACTURA_VENTA_LIST_REQUEST:
            return { loading: true, cobrosFacturas: [] }

        case COBRO_FACTURA_VENTA_LIST_SUCCESS:
            return { loading: false, cobrosFacturas: action.payload }

        case COBRO_FACTURA_VENTA_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
import {
FACTURA_VENTA_LIST_REQUEST,
FACTURA_VENTA_LIST_SUCCESS,
FACTURA_VENTA_LIST_FAIL,


FACTURA_VENTA_UNICA_REQUEST ,  // para tomar laultima factura en registro de factura
FACTURA_VENTA_UNICA_SUCCESS,
FACTURA_VENTA_UNICA_FAIL,


FACTURA_VENTA_CREATE_REQUEST,
FACTURA_VENTA_CREATE_SUCCESS ,
FACTURA_VENTA_CREATE_FAIL,

FACTURA_VENTA_UPDATE_REQUEST,
FACTURA_VENTA_UPDATE_SUCCESS,
FACTURA_VENTA_UPDATE_FAIL,
FACTURA_VENTA_UPDATE_RESET,
//DETALLE DE FACTURAS
FACTURA_DETALLE_VENTA_CREATE_REQUEST,
FACTURA_DETALLE_VENTA_CREATE_SUCCESS,
FACTURA_DETALLE_VENTA_CREATE_FAIL,

FACTURA_SOLA_DETALLE_VENTA_REQUEST,
FACTURA_SOLA_DETALLE_VENTA_SUCCESS,
FACTURA_SOLA_DETALLE_VENTA_FAIL,


} from '../constants/facturasVentasConstants'

//CREAR DETALLE DE PRODUCTOS A UNA FACTURA
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



// FACTURA VENTA

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


export const facturaVentasUnicaReducer = (state = { facturasVentas: [] }, action) => {
    switch (action.type) {
        case FACTURA_VENTA_UNICA_REQUEST:
            return { loading: true, facturasVentas: [] }

        case FACTURA_VENTA_UNICA_SUCCESS:
            return { loading: false, facturasVentas: action.payload }

        case FACTURA_VENTA_UNICA_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



// obtener la ultima factura en registro de factura
export const facturaVentaLastListReducer = (state = { facturaLast: [] }, action) => {
    switch (action.type) {
        case FACTURA_VENTA_UNICA_REQUEST:
            return { loading: true, facturaLast: [] }

        case FACTURA_VENTA_UNICA_SUCCESS:
            return { loading: false, facturaLast: action.payload }

        case FACTURA_VENTA_UNICA_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}




// para actualizar el monto pendiente cada vez que se realice un pago
export const facturaVentaUpdateReducer = (state = { facturaUp: {} }, action) => {
    switch (action.type) {
        case FACTURA_VENTA_UPDATE_REQUEST:
            return { loading: true }

        case FACTURA_VENTA_UPDATE_SUCCESS:
            return { loading: false, success: true, facturaUp: action.payload }

        case FACTURA_VENTA_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case FACTURA_VENTA_UPDATE_RESET:
            return { facturaUp: {} }

        default:
            return state
    }
}




export const facturaVentaDetallesSolaReducer = (state = { facturaDetalleSola: [] }, action) => {
    switch (action.type) {
        case FACTURA_SOLA_DETALLE_VENTA_REQUEST:
            return { loading: true, facturaDetalleSola: [] }

        case FACTURA_SOLA_DETALLE_VENTA_SUCCESS:
            return { loading: false, facturaDetalleSola: action.payload }

        case FACTURA_SOLA_DETALLE_VENTA_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

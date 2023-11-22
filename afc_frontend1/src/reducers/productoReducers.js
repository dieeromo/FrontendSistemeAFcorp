import {

PRODUCTO_CREATE_REQUEST,
PRODUCTO_CREATE_SUCCESS,
PRODUCTO_CREATE_FAIL,

TIPO_PRODUCTO_LIST_REQUEST,
TIPO_PRODUCTO_LIST_SUCCESS,
TIPO_PRODUCTO_LIST_FAIL,
TIPO_PRODUCTO_LIST_RESET,

SUBTIPO_PRODUCTO_LIST_REQUEST,
SUBTIPO_PRODUCTO_LIST_SUCCESS,
SUBTIPO_PRODUCTO_LIST_FAIL,
SUBTIPO_PRODUCTO_LIST_RESET,

ESTADO_PRODUCTO_LIST_REQUEST,
ESTADO_PRODUCTO_LIST_SUCCESS,
ESTADO_PRODUCTO_LIST_FAIL,
ESTADO_PRODUCTO_LIST_RESET,
} from '../constants/productoConstants'


export const productoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCTO_CREATE_REQUEST:
            return { loading: true }

        case PRODUCTO_CREATE_SUCCESS:
            return { loading: false, success: true, producto_crear: action.payload }

        case PRODUCTO_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tipoProductoListReducer = (state = { tipoProducto: [] }, action) => {
    switch (action.type) {
        case TIPO_PRODUCTO_LIST_REQUEST:
            return { loading: true, tipoProducto: [] }

        case TIPO_PRODUCTO_LIST_SUCCESS:
            return { loading: false, tipoProducto: action.payload }

        case TIPO_PRODUCTO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const subTipoProductoListReducer = (state = { subTipoProducto: [] }, action) => {
    switch (action.type) {
        case SUBTIPO_PRODUCTO_LIST_REQUEST:
            return { loading: true, subTipoProducto: [] }

        case SUBTIPO_PRODUCTO_LIST_SUCCESS:
            return { loading: false, subTipoProducto: action.payload }

        case SUBTIPO_PRODUCTO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const estadoProductoListReducer = (state = { estadoProducto: [] }, action) => {
    switch (action.type) {
        case ESTADO_PRODUCTO_LIST_REQUEST:
            return { loading: true, estadoProducto: [] }

        case ESTADO_PRODUCTO_LIST_SUCCESS:
            return { loading: false, estadoProducto: action.payload }

        case ESTADO_PRODUCTO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

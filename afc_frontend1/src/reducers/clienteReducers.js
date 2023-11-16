import {

CLIENTE_LIST_REQUEST,
CLIENTE_LIST_SUCCESS,
CLIENTE_LIST_FAIL,
CLIENTE_LIST_RESET,

CLIENTE_DELETE_REQUEST,
CLIENTE_DELETE_SUCCESS,
CLIENTE_DELETE_FAIL,

CLIENTE_CREATE_REQUEST,
CLIENTE_CREATE_SUCCESS,
CLIENTE_CREATE_FAIL,

CLIENTE_UPDATE_REQUEST,
CLIENTE_UPDATE_SUCCESS,
CLIENTE_UPDATE_FAIL,
CLIENTE_UPDATE_RESET,
} from '../constants/clienteConstants'

export const clienteCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENTE_CREATE_REQUEST:
            return { loading: true }

        case CLIENTE_CREATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload }

        case CLIENTE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const clienteListReducer = (state = { clientes: [] }, action) => {
    switch (action.type) {
        case CLIENTE_LIST_REQUEST:
            return { loading: true, clientes: [] }

        case CLIENTE_LIST_SUCCESS:
            return { loading: false, clientes: action.payload }

        case CLIENTE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

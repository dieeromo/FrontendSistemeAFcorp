import {
NIVEL_LIST_REQUEST,
NIVEL_LIST_SUCCESS,
NIVEL_LIST_FAIL,
NIVEL_LIST_RESET,

//constante para nivel de la red
RED_LIST_REQUEST,
RED_LIST_SUCCESS,
RED_LIST_FAIL,
RED_LIST_RESET,

//constante para nodo
NODO_LIST_REQUEST,
NODO_LIST_SUCCESS,
NODO_LIST_FAIL,
NODO_LIST_RESET,

//constante para tipo de incidente
TIPO_LIST_REQUEST,
TIPO_LIST_SUCCESS,
TIPO_LIST_FAIL ,
TIPO_LIST_RESET,

//Constantes para el registro de incidentes
INCIDENTE_CREATE_REQUEST ,
INCIDENTE_CREATE_SUCCESS,
INCIDENTE_CREATE_FAIL,

INCIDENTES_LIST_REQUEST,
INCIDENTES_LIST_SUCCESS,
INCIDENTES_LIST_FAIL,
INCIDENTES_LIST_RESET,
} from '../constants/incidentesConstants'


export const nivelListReducer = (state = {nivel:[] }, action) => {
    switch (action.type) {
        case NIVEL_LIST_REQUEST:
            return { loading: true, nivel: [] }

        case NIVEL_LIST_SUCCESS:
            return { loading: false, nivel: action.payload }

        case NIVEL_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const redListReducer = (state = {red:[] }, action) => {
    switch (action.type) {
        case RED_LIST_REQUEST:
            return { loading: true, red: [] }

        case RED_LIST_SUCCESS:
            return { loading: false, red: action.payload }

        case RED_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const nodoListReducer = (state = {nodo:[] }, action) => {
    switch (action.type) {
        case NODO_LIST_REQUEST:
            return { loading: true, nodo: [] }

        case NODO_LIST_SUCCESS:
            return { loading: false, nodo: action.payload }

        case NODO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tipoListReducer = (state = {tipo:[] }, action) => {
    switch (action.type) {
        case TIPO_LIST_REQUEST:
            return { loading: true, tipo: [] }

        case TIPO_LIST_SUCCESS:
            return { loading: false, tipo: action.payload }

        case TIPO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const incidenteCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case INCIDENTE_CREATE_REQUEST:
            return { loading: true }

        case INCIDENTE_CREATE_SUCCESS:
            return { loading: false, success: true, incidente: action.payload }

        case INCIDENTE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const incidenteListReducer = (state = {incidente:[] }, action) => {
    switch (action.type) {
        case INCIDENTES_LIST_REQUEST:
            return { loading: true, incidente: [] }

        case INCIDENTES_LIST_SUCCESS:
            return { loading: false, incidente: action.payload }

        case INCIDENTES_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



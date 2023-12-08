import {
    //##############
//BITACORA equipos
//Equipos de red
EQUIPO_RED_CREATE_REQUEST,
EQUIPO_RED_CREATE_SUCCESS,
EQUIPO_RED_CREATE_FAIL,

EQUIPO_RED_LIST_REQUEST,
EQUIPO_RED_LIST_SUCCESS,
EQUIPO_RED_LIST_FAIL,

// mantenimiento equipo
MANTENIMIENTO_EQUIPO_CREATE_REQUEST,
MANTENIMIENTO_EQUIPO_CREATE_SUCCESS,
MANTENIMIENTO_EQUIPO_CREATE_FAIL,

MANTENIMIENTO_EQUIPO_LIST_REQUEST,
MANTENIMIENTO_EQUIPO_LIST_SUCCESS,
MANTENIMIENTO_EQUIPO_LIST_FAIL,

//Movimiento equipos
MOVIMIENTO_EQUIPO_CREATE_REQUEST,
MOVIMIENTO_EQUIPO_CREATE_SUCCESS,
MOVIMIENTO_EQUIPO_CREATE_FAIL,

MOVIMIENTO_EQUIPO_LIST_REQUEST,
MOVIMIENTO_EQUIPO_LIST_SUCCESS,
MOVIMIENTO_EQUIPO_LIST_FAIL,

//#######################################
//constantes para BITACORA fIBRA
//Trazado fibra
TRAZADO_FIBRA_CREATE_REQUEST,
TRAZADO_FIBRA_CREATE_SUCCESS,
TRAZADO_FIBRA_CREATE_FAIL,

TRAZADO_FIBRA_LIST_REQUEST,
TRAZADO_FIBRA_LIST_SUCCESS,
TRAZADO_FIBRA_LIST_FAIL,

//trabajos fibra
TRABAJOS_FIBRA_CREATE_REQUEST,
TRABAJOS_FIBRA_CREATE_SUCCESS,
TRABAJOS_FIBRA_CREATE_FAIL,

TRABAJOS_FIBRA_LIST_REQUEST,
TRABAJOS_FIBRA_LIST_SUCCESS,
TRABAJOS_FIBRA_LIST_FAIL,

//TIPO FIBRA
TIPOS_FIBRA_LIST_REQUEST,
TIPOS_FIBRA_LIST_SUCCESS,
TIPOS_FIBRA_LIST_FAIL,

//TIPO FIBRA
TIPOS_TRABAJOS_LIST_REQUEST,
TIPOS_TRABAJOS_LIST_SUCCESS,
TIPOS_TRABAJOS_LIST_FAIL,

} from '../constants/bitacoraConstants'


//##################################
//BITACORA

//EQUIPO  RED
//crear
export const equipoRedCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EQUIPO_RED_CREATE_REQUEST:
            return { loading: true }

        case EQUIPO_RED_CREATE_SUCCESS:
            return { loading: false, success: true, equipo_red: action.payload }

        case EQUIPO_RED_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//listar
export const equipoRedListReducer = (state = {equipo_red: [] }, action) => {
    switch (action.type) {
        case EQUIPO_RED_LIST_REQUEST:
            return { loading: true, equipo_red: [] }

        case EQUIPO_RED_LIST_SUCCESS:
            return { loading: false, equipo_red: action.payload }

        case EQUIPO_RED_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//MANTENIMIENTO EQUIPO
//crear
export const mantenimientoEquipoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MANTENIMIENTO_EQUIPO_CREATE_REQUEST:
            return { loading: true }

        case MANTENIMIENTO_EQUIPO_CREATE_SUCCESS:
            return { loading: false, success: true, mantenimiento_equipo: action.payload }

        case MANTENIMIENTO_EQUIPO_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//listar

export const mantenimientoEquipoListReducer = (state = {mantenimiento_equipo:[] }, action) => {
    switch (action.type) {
        case MANTENIMIENTO_EQUIPO_LIST_REQUEST:
            return { loading: true, mantenimiento_equipo: [] }

        case MANTENIMIENTO_EQUIPO_LIST_SUCCESS:
            return { loading: false, mantenimiento_equipo: action.payload }

        case MANTENIMIENTO_EQUIPO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//MOVIMIENTO EQUIPO
//crear
export const movimientoEquipoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIMIENTO_EQUIPO_CREATE_REQUEST:
            return { loading: true }

        case MOVIMIENTO_EQUIPO_CREATE_SUCCESS:
            return { loading: false, success: true, movimiento_equipo: action.payload }

        case MOVIMIENTO_EQUIPO_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

//listar
export const movimientoEquipoListReducer = (state = {movimiento_equipo:[] }, action) => {
    switch (action.type) {
        case MOVIMIENTO_EQUIPO_LIST_REQUEST:
            return { loading: true, movimiento_equipo: [] }

        case MOVIMIENTO_EQUIPO_LIST_SUCCESS:
            return { loading: false, movimiento_equipo: action.payload }

        case MOVIMIENTO_EQUIPO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}




//###############  FIBRA OPTICA
//trazado
export const trazadoFibraCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TRAZADO_FIBRA_CREATE_REQUEST:
            return { loading: true }

        case TRAZADO_FIBRA_CREATE_SUCCESS:
            return { loading: false, success: true, trazado_fibra: action.payload }

        case TRAZADO_FIBRA_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const trazadoFibraListReducer = (state = {trazado_fibra:[] }, action) => {
    switch (action.type) {
        case TRAZADO_FIBRA_LIST_REQUEST:
            return { loading: true, trazado_fibra: [] }

        case TRAZADO_FIBRA_LIST_SUCCESS:
            return { loading: false, trazado_fibra: action.payload }

        case TRAZADO_FIBRA_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//trabajos

export const trabajosFibraCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TRABAJOS_FIBRA_CREATE_REQUEST:
            return { loading: true }

        case TRABAJOS_FIBRA_CREATE_SUCCESS:
            return { loading: false, success: true, trabajo_fibra: action.payload }

        case TRABAJOS_FIBRA_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const trabajosFibraListReducer = (state = {trabajos_fibra:[] }, action) => {
    switch (action.type) {
        case TRABAJOS_FIBRA_LIST_REQUEST:
            return { loading: true, trabajos_fibra: [] }

        case TRABAJOS_FIBRA_LIST_SUCCESS:
            return { loading: false, trabajos_fibra: action.payload }

        case TRABAJOS_FIBRA_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//tipo fibra

export const tipoFibraListReducer = (state = {tipos_fibra:[] }, action) => {
    switch (action.type) {
        case TIPOS_FIBRA_LIST_REQUEST:
            return { loading: true, tipos_fibra: [] }

        case TIPOS_FIBRA_LIST_SUCCESS:
            return { loading: false, tipos_fibra: action.payload }

        case TIPOS_FIBRA_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//tipo trabajo

export const tipoTrabajoListReducer = (state = {tipos_trabajo:[] }, action) => {
    switch (action.type) {
        case TIPOS_TRABAJOS_LIST_REQUEST:
            return { loading: true, tipos_trabajo: [] }

        case TIPOS_TRABAJOS_LIST_SUCCESS:
            return { loading: false, tipos_trabajo: action.payload }

        case TIPOS_TRABAJOS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

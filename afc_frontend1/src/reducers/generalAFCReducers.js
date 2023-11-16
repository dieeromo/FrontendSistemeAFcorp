import {
    //Empresa_corp
EMPRESA_CORP_LIST_REQUEST,
EMPRESA_CORP_LIST_SUCCESS,
EMPRESA_CORP_LIST_FAIL,
EMPRESA_CORP_LIST_RESET,

// Caja_empresa
CAJA_EMPRESA_LIST_REQUEST,
CAJA_EMPRESA_LIST_SUCCESS,
CAJA_EMPRESA_LIST_FAIL,
CAJA_EMPRESA_LIST_RESET,

//Modo_CompraVenta
MODO_CV_LIST_REQUEST,
MODO_CV_LIST_SUCCESS,
MODO_CV_LIST_FAIL,
MODO_CV_LIST_RESET,

//Bodega
BODEGA_LIST_REQUEST,
BODEGA_LIST_SUCCESS,
BODEGA_LIST_FAIL,
BODEGA_LIST_RESET,

} from '../constants/generalAFCConstants'

export const empresa_corpListReducer = (state = { empresa_corp: [] }, action) => {
    switch (action.type) {
        case EMPRESA_CORP_LIST_REQUEST:
            return { loading: true, empresa_corp: [] }

        case EMPRESA_CORP_LIST_SUCCESS:
            return { loading: false, empresa_corp: action.payload }

        case EMPRESA_CORP_LIST_FAIL:
            return { loading: false, empresa_corp: action.payload }

        default:
            return state
    }
}


export const caja_empresaListReducer = (state = { caja_empresa: [] }, action) => {
    switch (action.type) {
        case CAJA_EMPRESA_LIST_REQUEST:
            return { loading: true, caja_empresa: [] }

        case CAJA_EMPRESA_LIST_SUCCESS:
            return { loading: false, caja_empresa: action.payload }

        case CAJA_EMPRESA_LIST_FAIL:
            return { loading: false, caja_empresa: action.payload }

        default:
            return state
    }
}


export const modo_cv_ListReducer = (state = { modo_cv: [] }, action) => {
    switch (action.type) {
        case MODO_CV_LIST_REQUEST:
            return { loading: true, modo_cv: [] }

        case MODO_CV_LIST_SUCCESS:
            return { loading: false, modo_cv: action.payload }

        case MODO_CV_LIST_FAIL:
            return { loading: false, modo_cv: action.payload }

        default:
            return state
    }
}


export const bodegaListReducer = (state = { bodega: [] }, action) => {
    switch (action.type) {
        case BODEGA_LIST_REQUEST:
            return { loading: true, bodega: [] }

        case BODEGA_LIST_SUCCESS:
            return { loading: false, bodega: action.payload }

        case BODEGA_LIST_FAIL:
            return { loading: false, bodega: action.payload }

        default:
            return state
    }
}
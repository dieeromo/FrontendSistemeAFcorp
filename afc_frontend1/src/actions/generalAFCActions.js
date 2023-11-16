import axios from 'axios'
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
import {RUTA_SERVIDOR} from '../ApiRoutes'

export const listEmpresaCorpAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: EMPRESA_CORP_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/generalafc/getempresa_corp/`, config);

        dispatch({
            type: EMPRESA_CORP_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EMPRESA_CORP_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listCajaEmpresaAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CAJA_EMPRESA_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/generalafc/getcaja_empresa/`, config);

        dispatch({
            type: CAJA_EMPRESA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CAJA_EMPRESA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listModoCV_Action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: MODO_CV_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/generalafc/getmodocompra_venta/`, config);

        dispatch({
            type: MODO_CV_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MODO_CV_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listBodega_Action = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BODEGA_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/generalafc/getbodega/`, config);

        dispatch({
            type: BODEGA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BODEGA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
import axios from 'axios'
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
    TIPO_LIST_FAIL,
    TIPO_LIST_RESET,

    //Constantes para el registro de incidentes
    INCIDENTE_CREATE_REQUEST,
    INCIDENTE_CREATE_SUCCESS,
    INCIDENTE_CREATE_FAIL,

    INCIDENTES_LIST_REQUEST,
    INCIDENTES_LIST_SUCCESS,
    INCIDENTES_LIST_FAIL,
    INCIDENTES_LIST_RESET,
} from '../constants/incidentesConstants'

import { RUTA_SERVIDOR } from '../ApiRoutes'



export const listNivelAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: NIVEL_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/listnivel/`, config);

        dispatch({
            type: NIVEL_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NIVEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listRedAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: RED_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/listred/`, config);

        dispatch({
            type: RED_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: RED_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listNodoAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: NODO_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/listnodo/`, config);

        dispatch({
            type: NODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NODO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listTipoAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TIPO_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/listtipo/`, config);

        dispatch({
            type: TIPO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createIncidenteAction = (inicio, fin, nivel, red, nodo, tipo, afectados, descripcion) => async (dispatch, getState) => {

    try {
        dispatch({
            type: INCIDENTE_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/incidentes/regincidente/${nivel}/${red}/${nodo}/${tipo}/`,
            {
                'inicio': inicio,
                'fin': fin,
                'afectados': afectados,
                'descripcion': descripcion,
            }, config
        )

        dispatch({
            type: INCIDENTE_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: INCIDENTE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listIncidenteAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: INCIDENTES_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/listincidente/`, config);

        dispatch({
            type: INCIDENTES_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INCIDENTES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
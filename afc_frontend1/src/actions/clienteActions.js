import axios from 'axios';
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

import {RUTA_SERVIDOR} from '../ApiRoutes'


export const listClienteAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CLIENTE_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/cliente/list/`, config);

        dispatch({
            type: CLIENTE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CLIENTE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}




export const createClienteAction = (nombre, direccion, telefono1, telefono2, observacion) => async (dispatch, getState) => {
    console.log("action")
    try {
        dispatch({
            type: CLIENTE_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/cliente/register/`,
            {
                'nombre': nombre,
                'direccion': direccion,
                'telefono1': telefono1,
                'telefono2': telefono2,
                'observacion': observacion
            },
            config
        )


        dispatch({
            type: CLIENTE_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log('error de accion')
        dispatch({
            type: CLIENTE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
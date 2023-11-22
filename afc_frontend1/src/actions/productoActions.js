import axios from 'axios';
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

import {RUTA_SERVIDOR} from '../ApiRoutes'

export const createProductoAction = (modelo,descripcion,codigo,tipo,subtipo,estado,precio_entrada,precio_salida,precio_promo,seguimiento,observacion) => async (dispatch, getState) => {
    console.log("accion")
    try {
        dispatch({
            type: PRODUCTO_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/productos/register/${tipo}/${subtipo}/${estado}/`,
            {
                'modelo': modelo,
                'descripcion':descripcion,
                'codigo':codigo,
                'precio_entrada':precio_entrada,
                'precio_salida':precio_salida,
                'precio_promo':precio_promo,
                'seguimiento':seguimiento,
                'observacion':observacion,

            },config
        )


        dispatch({
            type: PRODUCTO_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCTO_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listTipoProductoAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TIPO_PRODUCTO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/productos/list_tipo_producto/`, config);

        dispatch({
            type: TIPO_PRODUCTO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPO_PRODUCTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listSubTipoProductoAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: SUBTIPO_PRODUCTO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/productos/list_subtipo_producto/`, config);

        dispatch({
            type: SUBTIPO_PRODUCTO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SUBTIPO_PRODUCTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listEstadoProductoAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_PRODUCTO_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(RUTA_SERVIDOR + `/productos/list_estado_producto/`, config);

        dispatch({
            type: ESTADO_PRODUCTO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ESTADO_PRODUCTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
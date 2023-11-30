import axios from 'axios'
import {
     //##############
    //BITACORA
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
} from '../constants/bitacoraConstants'
import {RUTA_SERVIDOR} from '../ApiRoutes'


//BITACORA
//crear equipos

export const createEquipoRedAction = (codigo,alias ,descripcion, fecha_instalacion, id_nodo_inicial, id_nodo_actual, activoVF) => async (dispatch, getState) => {

    try {
        dispatch({
            type: EQUIPO_RED_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/incidentes/reg_equipo_red/${id_nodo_inicial}/${id_nodo_actual}/`,
            {
                'codigo': codigo,
                'alias': alias,
                'descripcion': descripcion,
                'fecha_instalacion':fecha_instalacion,
                //'nodo_inicial' : id_nodo_inicial,
                //'nodo_actual' : id_nodo_actual,
                'activo' : activoVF,
            }, config
        )

        dispatch({
            type: EQUIPO_RED_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: EQUIPO_RED_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listEquipoRedAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: EQUIPO_RED_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/list_equipo_red/`, config);

        dispatch({
            type: EQUIPO_RED_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EQUIPO_RED_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

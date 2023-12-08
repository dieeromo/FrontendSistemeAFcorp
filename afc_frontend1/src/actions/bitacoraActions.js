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

//+============    BITACORA FIBRA   ================
// tipo fibra
export const listTipoFibraAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: TIPOS_FIBRA_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/list_tipo_fibra/`, config);

        dispatch({
            type: TIPOS_FIBRA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPOS_FIBRA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

// tipos trabajo
export const listTipoTrabajosAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: TIPOS_TRABAJOS_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/list_tipo_trabajo/`, config);

        dispatch({
            type: TIPOS_TRABAJOS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TIPOS_TRABAJOS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
// trazado FO

export const createTrazadoFibraAction = (identificador, nombre, descripcion, pk_tipoFO, fecha) => async (dispatch, getState) => {

    try {
        dispatch({
            type: TRAZADO_FIBRA_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/incidentes/reg_trazado_fo/${pk_tipoFO}/`,
            {
                'identificador': identificador,
                'nombre': nombre,
                'descripcion': descripcion,
                'fecha':fecha,
            }, config
        )

        dispatch({
            type: TRAZADO_FIBRA_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: TRAZADO_FIBRA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listTrazadosFOAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: TRAZADO_FIBRA_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/list_trazado_fo/`, config);
                                                                      
        dispatch({
            type: TRAZADO_FIBRA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAZADO_FIBRA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//Trabajos FO

export const createTrabajoFibraAction = (pkTrazado, fecha, pkTipo_trabajo, pkTipoFibra_cambio, descripcion) => async (dispatch, getState) => {

    try {
        dispatch({
            type: TRABAJOS_FIBRA_CREATE_REQUEST
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

        const { data } = await axios.post(RUTA_SERVIDOR + `/incidentes/reg_trazado_trabajos_fo/${pkTipo_trabajo}/${pkTipoFibra_cambio}/${pkTrazado}/`,
            {
                'fecha':fecha,
                'descripcion': descripcion,
                
            }, config
        )

        dispatch({
            type: TRABAJOS_FIBRA_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: TRABAJOS_FIBRA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listTrabajosFOAction = () => async (dispatch, getState) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        dispatch({ type: TRABAJOS_FIBRA_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(RUTA_SERVIDOR + `/incidentes/list_trabajo_fo/`, config);
                                                                      
        dispatch({
            type: TRABAJOS_FIBRA_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRABAJOS_FIBRA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
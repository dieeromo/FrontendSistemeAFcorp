


import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {listEquipoRedAction} from '../../../actions/bitacoraActions'

export function SelectorEquipored(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEquipoRedAction())
    }, [dispatch])


    const  equipoRedList  = useSelector(state => state.equipoRedList)
    const {error, loading, equipo_red} = equipoRedList
                       

    const lista_equipo_red = equipo_red.map((item) =>(
        {
            codigo: item.codigo,
            descripcion: item.descripcion,
            alias : item.alias,
            fecha_instalacion : item.fecha_instalacion,
            nodo_inicial : item.nodo_inicial,
            nodo_actual : item.nodo_actual,
            activo : item.activo ? "Activo" : "Desuso",
            user: item.user

        }
    ))
    return(lista_equipo_red)
}
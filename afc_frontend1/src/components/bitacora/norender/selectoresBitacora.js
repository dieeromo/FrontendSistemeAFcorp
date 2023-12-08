


import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {listEquipoRedAction, listTipoFibraAction, listTipoTrabajosAction, listTrazadosFOAction, listTrabajosFOAction} from '../../../actions/bitacoraActions'

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


export function SelectorTipoFibra(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTipoFibraAction())
    }, [dispatch])
    const tipoFibraList = useSelector(state => state.tipoFibraList)
          
    const{error, loading, tipos_fibra} = tipoFibraList

    const lista_tipos_fibra = tipos_fibra.map((item)=>(
        {
            value : item.id,
            label:  item.tipo + " " + item.numero_hilos +"h" + " " + item.marca + ": " +item.descripcion,
        }
    ))
    return(lista_tipos_fibra)
}


export function SelectorTipoTrabajo(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTipoTrabajosAction())
    }, [dispatch])
    const tipoTrabajoList = useSelector(state => state.tipoTrabajoList)
    const {error, loading, tipos_trabajo} = tipoTrabajoList
    const lista_tipos_trabajo = tipos_trabajo.map((item) =>(
        {
            value: item.id,
            label: item.tipo_trabajo
        }
    ))
    return(lista_tipos_trabajo)
}


export function SelectorTrazadosFO(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTrazadosFOAction())
    }, [dispatch])
    const trazadoFibraList = useSelector(state => state.trazadoFibraList)
    const {error, loading, trazado_fibra} = trazadoFibraList 
    const lista_trazados = trazado_fibra.map((item) =>(
        {
            value: item.id,
            label: item.identificador + " : "  + item.nombre,

            nombre: item.nombre,
            identificador: item.identificador,
            tipo_fibra : item.tipo_fibra,
            fecha : item.fecha,
            digitador: item.user,
            descripcion: item.descripcion
        }
    ))
    //console.log(lista_trazados)
    return(lista_trazados)
}


export function SelectorTrabajosFO(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTrabajosFOAction())
    }, [dispatch])

    const trabajosFibraList = useSelector(state => state.trabajosFibraList)
    const {error, loading, trabajos_fibra} = trabajosFibraList
    const lista_trabajos = trabajos_fibra.map((item) =>(
        {
            value: item.id,
            label: item.trazado + " " + item.tipo_trabajo,

            trazado: item.trazado,
            fecha: item.fecha,
            tipo_trabajo : item.tipo_trabajo,
            tipo_fibra_cambio : item.tipo_fibra_cambio,
            descripcion : item.descripcion,
            digitador: item.user,
        }
            
    ))
    //console.log(lista_trazados)
    return(lista_trabajos)
}
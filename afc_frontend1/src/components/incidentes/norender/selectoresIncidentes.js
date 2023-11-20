
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {listNivelAction, listRedAction, listNodoAction, listTipoAction, listIncidenteAction}from '../../../actions/incidentesActions'         

import { format } from 'date-fns';


export function SelectorNivel() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listNivelAction())
    }, [dispatch])



    const nivelList = useSelector(state => state.nivelList)
    const { error, loading, nivel } = nivelList


    const lista_niveles = nivel.map((item) => ({
        label: item.nivel,
        value: item.id,
    }))


    return (lista_niveles)
}




export function SelectorRed() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listRedAction())
    }, [dispatch])



    const redList = useSelector(state => state.redList)
    const { error, loading, red } = redList


    const lista_redes = red.map((item) => ({
        label: item.red,
        value: item.id,
    }))


    return (lista_redes)
}


export function SelectorNodo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listNodoAction())
    }, [dispatch])

    const nodoList = useSelector(state => state.nodoList)
    const { error, loading, nodo } = nodoList

    const lista_nodo = nodo.map((item) => ({
        label: item.nodo,
        value: item.id,
    }))

    return (lista_nodo)
}


export function SelectorTipo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTipoAction())
    }, [dispatch])

    const tipoList = useSelector(state => state.tipoList)
    const { error, loading, tipo } = tipoList

    const lista_tipo = tipo.map((item) => ({
        label: item.tipo,
        value: item.id,
    }))
    
    return (lista_tipo)
}


export function SelectorIncidente() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listIncidenteAction())
    }, [dispatch])

        // const fechaFormateada = format(fechaObjeto, 'dd/MM/yyyy');

    // // Formatea la hora
    // const horaFormateada = format(fechaObjeto, 'HH:mm:ss');
    //const fechaObjeto = new Date(fechaDelBackend);

    const incidenteList = useSelector(state => state.incidenteList)
    const { error, loading, incidente } = incidenteList
    console.log(incidente)

    const lista_incidente = incidente.map((item) => ({
        fecha_inicio : format(new Date(item.inicio),'dd/MM/yyyy'),
        hora_inicio : format(new Date(item.inicio),'HH:mm:ss'),
        fecha_fin : format(new Date(item.fin),'dd/MM/yyyy'),
        hora_fin : format(new Date(item.fin),'HH:mm:ss'),

        nivel : item.nivel,
        red : item.red,
        nodo : item.nodo,
        tipo : item.tipo,
        afectados : item.afectados,
        descripcion : item.descripcion,
        user : item.user
    }))
    
    return (lista_incidente)
}
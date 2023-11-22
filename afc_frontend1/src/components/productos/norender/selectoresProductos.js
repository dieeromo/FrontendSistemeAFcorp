import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {listSubTipoProductoAction, listTipoProductoAction, listEstadoProductoAction} from '../../../actions/productoActions'

export function SelectorTipoProducto(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTipoProductoAction())
    }, [dispatch])

    const tipoProductoList = useSelector(state => state.tipoProductoList)

    const {error, loading, tipoProducto} = tipoProductoList
    const tipos_de_productos = tipoProducto.map((item)=>({
        label: item.tipo,
        value: item.id
    }))

return(tipos_de_productos)
}


export function SelectorSubTipoProducto(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listSubTipoProductoAction())
    }, [dispatch])

    const subTipoProductoList = useSelector(state => state.subTipoProductoList)

    const {error, loading, subTipoProducto} = subTipoProductoList
    const subtipos_de_productos = subTipoProducto.map((item)=>({
        label: item.subtipo,
        value: item.id
    }))

return(subtipos_de_productos)
}

export function SelectorEstadoProducto(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEstadoProductoAction())
    }, [dispatch])

    const estadoProductoList = useSelector(state => state.estadoProductoList)

    const {error, loading, estadoProducto} = estadoProductoList
    const estado_de_productos = estadoProducto.map((item)=>({
        label: item.estado,
        value: item.id
    }))

return(estado_de_productos)
}
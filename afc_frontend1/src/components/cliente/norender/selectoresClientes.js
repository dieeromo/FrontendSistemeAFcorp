
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listClienteAction } from '../../../actions/clienteActions'


export function SelectorCliente() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClienteAction())
    }, [dispatch])



    const clienteList = useSelector(state => state.clienteList)
    const { error, loading, clientes } = clienteList


    const clienteRegistrados = clientes.map((item) => ({
        label: item.nombre,
        value: item.id,
    }))

    return (clienteRegistrados)
}
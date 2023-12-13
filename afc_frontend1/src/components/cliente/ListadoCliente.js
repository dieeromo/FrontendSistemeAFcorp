
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listClienteAction } from '../../actions/clienteActions'
import MUIDataTable from "mui-datatables"
import NavbarAF from '../comunes/NavbarAF.js'




export default function ListadoCliente() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClienteAction())
    }, [dispatch])

    const clienteList = useSelector(state => state.clienteList)
    const { error, loading, clientes } = clienteList
    console.log(clientes)

    const columns = [
        {
            name:"nombre",
            label:"Nombres"
        },
        {
            name:"direccion",
            label:"Dirección"
        },
        {
            name:"telefono1",
            label:"Telefono"
        },
        {
            name:"telefono2",
            label:"Telefono"
        },
        {
            name:"observacion",
            label:"Observación"
        },
        {
            name:"fecha",
            label:"Fecha"
        }
    ]
    


    return (
        <>
        <NavbarAF/>
        <div className='register-cliente-container'>
        <h1> Lista de clientes</h1>
            <MUIDataTable
            title={"lista"}
            data = {clientes}
            columns = {columns}
            
            />

        </div>

        </>
    )
}
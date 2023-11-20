
import {SelectorFacturasV} from './norender/selectorFacturasV'

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MUIDataTable from "mui-datatables"


export default function ListFacturaVenta(){


    const facturasVentas = SelectorFacturasV()
  
    const columns = [
        {
            name: "numero",
            label: "Numero",
            options: { filter: false, sort: true }
        },
        {
            name: "fecha",
            label: "Fecha",
            options: { filter: false, sort: true }
        },
        {
            name: "empresa",
            label: "Empresa"
        },
        {
            name: "cliente",
            label: "Cliente"
        },
        {
            name: "modo_cv",
            label: "Tipo"
        },
        {
            name: "estado_pago",
            label: "Status pago"
        },
        {
            name: "monto",
            label: "Monto",
            options: { filter: false, sort: true }
        },
        {
            name: "saldo",
            label: "Saldo",
            options: { filter: false, sort: true }
        },
        {
            name: "plazo_meses",
            label: "Plazo",
            options: { filter: false, sort: true }
        },

    ]


    return(
        <>

        <h1>Listado de facturas</h1>
        <MUIDataTable
            title={"facturas"}
            data = {facturasVentas}
            columns = {columns}
            />
            
        </>
    )
}
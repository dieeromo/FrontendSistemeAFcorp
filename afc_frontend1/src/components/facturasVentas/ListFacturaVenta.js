
import { SelectorFacturasV } from './norender/selectorFacturasV'
import Select from 'react-select'

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MUIDataTable from "mui-datatables"
import NavbarAF from '../comunes/NavbarAF'

import '../../App.css'
export default function ListFacturaVenta() {


    const facturasVentas = SelectorFacturasV()
    //console.log(facturasVentas)

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
            name: "plazo_meses",
            label: "Plazo",
            options: { filter: false, sort: true }
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
            name: "observacion",
            label: "Observacion",
            options: { filter: false, sort: true }
        },

    ]


    return (
        <>
        <NavbarAF/>
            <div className='list-factura-container'>
                <MUIDataTable
                    title={"Facturas"}
                    data={facturasVentas}
                    columns={columns}
                />
            </div>



        </>
    )
}
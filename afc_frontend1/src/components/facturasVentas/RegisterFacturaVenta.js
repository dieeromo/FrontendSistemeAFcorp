import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Select from 'react-select'

import { SelectorEmpresa, SelectorModoCV} from '../comunes/norender/Selectores'
import { SelectorCliente } from '../cliente/norender/selectoresClientes'
import {createFacturaVentaAction} from '../../actions/facturaVentaActions'

import Messages from '../comunes/Messages'
import Loader from '../comunes/Loader';

export default function RegisterFacturaVenta() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const path = ('/cliente/listado');

    const [numero, setNumero] = useState('');
    const [fecha, setFecha] = useState('');
    const [cliente, setCliente] = useState('');
    const [modocv, setModocv] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [observacion, setObservacion] = useState('');



    const handleSelectChance_cliente = (event) => {
        setCliente(event.value)
    }

    const handleSelectChance_ModoCV = (event) => {
        setModocv(event.value)
    }

    const handleSelectChance_Empresa = (event) => {
        setEmpresa(event.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createFacturaVentaAction(numero,fecha,cliente,modocv,empresa))
        navigate(path);
    }
    return (
        <>

            <h1>Ingreso facturas venta</h1>
            <form onSubmit={handleSubmit} method="POST" action="#">

                <div>
                    <label htmlFor="numero" > Factura #: </label>
                </div>
                <textarea
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    type="text"
                    id="numero"
                    name="numero"
                    rows={1}
                    className=""
                    placeholder="Type Here!"
                />


                <div>
                    <label htmlFor="date">Fecha de registro:</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type="date"
                        id="fecha"
                        name="fecha" />
                </div>


                <div>
                    <label htmlFor="cliente">Cliente</label>
                    <Select
                        options={SelectorCliente()}
                        onChange={handleSelectChance_cliente}
                    />
                </div>

                <div>
                    <label htmlFor="modoCV">Tipo de compra:</label>
                    <Select
                        options={SelectorModoCV()}
                        onChange={handleSelectChance_ModoCV}
                    />
                </div>

                <div>
                    <label htmlFor="empresa">Empresa:</label>
                    <Select
                        options={SelectorEmpresa()}
                        onChange={handleSelectChance_Empresa}
                    />
                </div>

                <button type='submit'> Guardar </button>
            </form>
        </>
    )
}





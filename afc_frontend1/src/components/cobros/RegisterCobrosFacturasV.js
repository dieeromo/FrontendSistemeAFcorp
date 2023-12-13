
import React, { useState } from 'react'
import NavbarAF from '../comunes/NavbarAF'
import { SelectorFacturasV } from '../facturasVentas/norender/selectorFacturasV'
import {SelectorEmpresa} from '../comunes/norender/Selectores'
import {createCobroFacturaAction} from '../../actions/cobrosActions'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import {factura_venta_update_montoAction} from '../../actions/facturaVentaActions'


export default function RegistesCobrosfacturasV() {
    const dispatch = useDispatch();
    const [empresa, setEmpresa] = useState('')
    const [factura, setFactura] = useState('')
    const [fecha, setFecha] = useState('')
    const [montoPago, setMontoPago] = useState('')
    const [montoCapital, setMontoCapital] = useState('')
    const [montoInteres, setMontoInteres] = useState('')
    const [saldoAnterior, setSaldoAnterior] = useState('')
    const [saldoActual, setSaldoActual] = useState('')
    
    const [observacion, setObservacion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            factura_venta_update_montoAction(factura, saldoActual),    
            )
        dispatch(
            createCobroFacturaAction(empresa,factura,fecha,montoPago,montoCapital,montoInteres,saldoActual,saldoAnterior,observacion),
            )


    }

    return (
        <>
            <NavbarAF />
            <div className='register-cobro-container'>
                <h1>Registro de cobros</h1>
                <form onSubmit={handleSubmit} method="POST" action="#">
                {/* <div>
                        <label htmlFor="empresa">Empresa:</label>
                        <Select
                            options={SelectorEmpresa()}
                            onChange={(e) => setEmpresa(e.value)}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="factura">Factura:</label>
                        <Select
                            options={SelectorFacturasV()}
                            onChange={(e) => {
                            setFactura(e.value)
                            setEmpresa(e.valueEmpresa)
                        }}
                        />
                    </div>
                    <div>
                        <p>Empresa: {empresa}</p>
                    </div>

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
                        <label htmlFor="montoPago" > Monto a pagar: </label>
                        <input
                            value={montoPago}
                            onChange={(e) => setMontoPago(e.target.value)}
                            type="number"
                            id="montoPago"
                            name="montoPago"
                            rows={3}
                            className=""
                            placeholder="Ingrese el monto a pagar total"
                        />
                    </div>

                  
                    <div>
                        <label htmlFor="montoCapital" > Monto capital: </label>
                        <input
                            value={montoCapital}
                            onChange={(e) => setMontoCapital(e.target.value)}
                            type="number"
                            id="montoCapital"
                            name="montoCapital"
                            rows={3}
                            className=""
                            placeholder="Correspondiente a capital"
                        />
                    </div>

                    <div>
                        <label htmlFor="montoInteres" > Monto capital: </label>
                        <input
                            value={montoInteres}
                            onChange={(e) => setMontoInteres(e.target.value)}
                            type="number"
                            id="montoInteres"
                            name="montoInteres"
                            rows={3}
                            className=""
                            placeholder="Correspondiente a interes"
                        />
                    </div>

                    <div>
                        <label htmlFor="saldoAnterior" >Saldo Anterior : </label>
                        <input
                            value={saldoAnterior}
                            onChange={(e) => setSaldoAnterior(e.target.value)}
                            type="number"
                            id="saldoAnteior"
                            name="saldoAnteior"
                            rows={3}
                            className=""
                            placeholder="Saldo anterior"
                        />
                    </div>

                    <div>
                        
                    <p>Saldo actual: Saldo anterior - monto capital</p>
                        <label htmlFor="saldoActual" >Saldo Actual : </label>
                        <input
                            value={saldoActual}
                            onChange={(e) => setSaldoActual(e.target.value)}
                            type="number"
                            id="saldoActual"
                            name="saldoActual"
                            rows={3}
                            className=""
                            placeholder="Saldo actual"
                        />
                    </div>

                    <div>
                    <label htmlFor="observacion" > Observación: </label>
                    <textarea
                        value={observacion}
                        onChange={(e) => setObservacion(e.target.value)}
                        type="text"
                        id="observacion"
                        name="Observacion"
                        rows={2}
                        className=""
                        placeholder="Realice una observacion"
                    />
                </div>

                <button onClick={handleSubmit}>Guardar</button>

                </form>


            </div>
        </>
    )
}
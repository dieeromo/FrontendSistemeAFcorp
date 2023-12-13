import { connect } from "react-redux"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useNavigate } from 'react-router';
import { createFacturaDetalleVentaAction, getUltimaFacturaVentaAction } from '../../actions/facturaVentaActions'

import { SelectorCliente } from '../cliente/norender/selectoresClientes'
import { SelectorEmpresa, SelectorModoCV, SelectorBodega } from '../comunes/norender/Selectores'
import { SelectorProducto } from '../productos/norender/selectoresProductos'
import { createFacturaVentaAction } from '../../actions/facturaVentaActions'
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'

const RegisterFacVenta = ({ facturasVentas, getUltimaFacturaVentaAction }) => {
    const navigate = useNavigate();
    const path = ('/factura/venta/list');
    const dispatch = useDispatch();
    //// detalle factura
    const [bodega, set_bodega] = useState('')
    const [producto, set_producto] = useState('')  // id de producto
    const [cod_producto, setCodigoProducto] = useState('')  // cod de producto
    const [precio_salida, setPrecioSalida] = useState('')  // precio de producto
    const [descr_producto, setDescrProducto] = useState('')  // precio de producto
    const [cantidad, set_cantidad] = useState('')



    const [detalleFV_inter, SetDetalleFV_inter] = useState([])
    const [detalleFV_BD, SetDetalleFV_BD] = useState([])



    // datos factura
    const [numero, setNumero] = useState('');
    const [fecha, setFecha] = useState('');
    const [cliente, setCliente] = useState('');


    const [modocv, setModocv] = useState('');   // para ide de base de datos

    const [empresa, setEmpresa] = useState('');
    const [observacion, setObservacion] = useState('');
    const [montoTotal, setMontoTotal] = useState('')
    const [plazo, setPlazo] = useState('')




    const handleSelectChance_cliente = (event) => {
        setCliente(event.value)
    }

    const handleSelectChance_ModoCV = (event) => {
        setModocv(event.value)
    }

    const handleSelectChance_Empresa = (event) => {
        setEmpresa(event.value)
    }

    const handle_calcular = (event) => {
        let cal_monto = 0
        detalleFV_inter.map((item, index) => (
            cal_monto = cal_monto + item.total,
            setMontoTotal(cal_monto)
        ))
    }

    const handleSubmit_factura = (e) => {

        dispatch(createFacturaVentaAction(
            numero, fecha, cliente, modocv,plazo, empresa, montoTotal, observacion
        ))
    }

    const handleSubmit_detallesfactura = (e) => {
        detalleFV_BD.forEach(elemento => {
            dispatch(createFacturaDetalleVentaAction(
                facturasVentas.id_factura,
                elemento.producto,
                elemento.precio,
                elemento.cantidad,
                elemento.subtotal,
                elemento.total,
                elemento.bodega,
            ))
        })
        navigate(path)

    }

    return (
        <>
            <NavbarAF />
            <div className=" register-factura-container">

                <div>
                    <label htmlFor="bodega">Bodega1 :</label>
                    <Select
                        options={SelectorBodega()}
                        onChange={(e) => set_bodega(e.value)}
                    />
                </div>

                <div>
                    <label htmlFor="producto">Producto:</label>
                    <Select
                        options={SelectorProducto()}
                        onChange={(e) => {
                            set_producto(e.value)
                            setCodigoProducto(e.codigo)
                            setPrecioSalida(e.precio_salida)
                            setDescrProducto(e.descripcion)
                        }}
                    />
                </div>

                <label htmlFor="cantidad" > cantidad: </label>
                <input
                    value={cantidad}
                    onChange={(e) => set_cantidad(e.target.value)}
                    type="number"
                    id="cantidad"
                    name="cantidad"
                    rows={2}
                    className=""
                    placeholder="Ingrese cantidad"
                />

                <button onClick={
                    (e) => {
                        const newproduct_interfaz = {
                            codigo: cod_producto,
                            descripcion: descr_producto,
                            precio_salida: precio_salida,
                            cantidad: cantidad,
                            total: cantidad * precio_salida
                            //codigo :
                        }
                        SetDetalleFV_inter([...detalleFV_inter, newproduct_interfaz])

                        const newProduct_BD = {
                            producto: producto, // id de producto
                            precio: precio_salida,
                            cantidad: cantidad,
                            subtotal: cantidad * precio_salida,
                            total: cantidad * precio_salida,
                            bodega: bodega,
                        }
                        SetDetalleFV_BD([...detalleFV_BD, newProduct_BD])
                    }

                }
                >Agregar</button>

                <div>
                    <h3>Detalles de factura</h3>
                    <ul>
                        {detalleFV_inter.map((item, index) => (
                            <li key={index}> cod: {item.codigo} pre:{item.precio_salida}  cant:{item.cantidad} total:{item.total}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={handle_calcular}>Calcular</button>
                <div>Monto: {montoTotal}</div>





                <h1> registro de facturas</h1>
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


                <label htmlFor="plazo" > Plazo meses: </label>
                <input
                    value={plazo}
                    onChange={(e) => setPlazo(e.target.value)}
                    type="number"
                    id="plazo"
                    name="plazo"
                    rows={1}
                    placeholder="Ingrese el plazo en meses"
                />


                <div>
                    <label htmlFor="empresa">Empresa:</label>
                    <Select
                        options={SelectorEmpresa()}
                        onChange={handleSelectChance_Empresa}
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



                <button onClick={handleSubmit_factura}> Guardar Factura</button>
                <button onClick={getUltimaFacturaVentaAction}> Agregar a factura</button>
                <p>id : {facturasVentas.id_factura}</p>

                <button onClick={handleSubmit_detallesfactura}> Guardar todo</button>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    facturasVentas: state.facturaVentasList.facturasVentas
})
const mapDispatchToProps = {
    getUltimaFacturaVentaAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterFacVenta)
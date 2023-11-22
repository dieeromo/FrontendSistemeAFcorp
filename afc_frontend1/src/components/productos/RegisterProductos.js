import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Select from 'react-select'
import { createProductoAction } from '../../actions/productoActions'

import { SelectorTipoProducto, SelectorSubTipoProducto, SelectorEstadoProducto } from './norender/selectoresProductos'

export default function RegisterProductos() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const path = ('/cliente/listado');

    const [modelo, SetModelo] = useState('');
    const [descripcion, SetDescripcion] = useState('');
    const [codigo, SetCodigo] = useState('');

    const [tipo, SetTipo] = useState('');
    const [subtipo, SetSubtipo] = useState('');
    const [estado, SetEstado] = useState('');

    const [precio_entrada, SetPrecio_entrada] = useState('');
    const [precio_salida, SetPrecio_salida] = useState('');
    const [precio_promo, SetPrecio_promo] = useState('');
    const [seguimiento, SetSeguimiento] = useState(false);
    const [observacion, SetObservacion] = useState('');

    const handleSelectChance_TipoProducto = (event) => {
        SetTipo(event.value)
    }
    const handleSelectChance_SubTipoProducto = (event) => {
        SetSubtipo(event.value)
    }
    const handleSelectChance_EstadoProducto = (event) => {
        SetEstado(event.value)
    }

    const manejarCambioCheckbox = () => {
        // Cambia el estado al valor opuesto
        SetSeguimiento(!seguimiento);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProductoAction(modelo, descripcion, codigo, tipo, subtipo, estado, precio_entrada, precio_salida, precio_promo, seguimiento, observacion))
        console.log(seguimiento)
        navigate(path);
    }
    return (
        <>
            <h1>Registro de productos</h1>
            <form onSubmit={handleSubmit} method="POST" action="#">
                <div>
                    <label htmlFor="modelo" > Modelo: </label>
                </div>
                <textarea
                    value={modelo}
                    onChange={(e) => SetModelo(e.target.value)}
                    type="text"
                    id="modelo"
                    name="modelo"
                    rows={2}
                    className=""
                    placeholder="Type Here!"
                />

                <div>
                    <label htmlFor="descripcion" > Descripcion: </label>
                </div>
                <textarea
                    value={descripcion}
                    onChange={(e) => SetDescripcion(e.target.value)}
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    rows={2}

                    className=""
                    placeholder="Type Here!"
                />


                <div>
                    <label htmlFor="codigo" > Codigo producto: </label>
                </div>
                <textarea
                    value={codigo}
                    onChange={(e) => SetCodigo(e.target.value)}
                    type="text"
                    id="codigo"
                    name="codigo"
                    rows={2}

                    className=""
                    placeholder="Type Here!"
                />


                <div>
                    <label htmlFor="tipo_producto">Tipo producto</label>
                    <Select
                        options={SelectorTipoProducto()}
                        onChange={handleSelectChance_TipoProducto}
                    />
                </div>

                <div>
                    <label htmlFor="subtipo_producto">Subtipo producto</label>
                    <Select
                        options={SelectorSubTipoProducto()}
                        onChange={handleSelectChance_SubTipoProducto}
                    />
                </div>

                <div>
                    <label htmlFor="estado_producto">Estado producto</label>
                    <Select
                        options={SelectorEstadoProducto()}
                        onChange={handleSelectChance_EstadoProducto}
                    />
                </div>


                <label htmlFor="precio_entrada" > Precio entrada: </label>
                <input
                    value={precio_entrada}
                    onChange={(e) => SetPrecio_entrada(e.target.value)}
                    type="number"
                    id="precio_entrada"
                    name="precio_entrada"
                    rows={2}
                    className=""
                    placeholder="Ingrese el precio"
                />

                <label htmlFor="precio_salida" > Precio salida: </label>
                <input
                    value={precio_salida}
                    onChange={(e) => SetPrecio_salida(e.target.value)}
                    type="number"
                    id="precio_salida"
                    name="precio_salida"
                    rows={2}
                    className=""
                    placeholder="Ingrese el precio"
                />

                <label htmlFor="precio_promo" > Precio promocional: </label>
                <input
                    value={precio_promo}
                    onChange={(e) => SetPrecio_promo(e.target.value)}
                    type="number"
                    id="precio_promo"
                    name="precio_promo"
                    rows={2}
                    className=""
                    placeholder="Ingrese el precio"
                />

                <div>
                    <label htmlFor="seguimiento">Seguimiento:</label>
                    <input
                        value={seguimiento}
                        onChange={manejarCambioCheckbox}
                        type="checkbox"
                        id="seguimiento"
                        name="seguimiento"
                    />
                </div>

                <div>
                    <label htmlFor="observacion" > Observacion: </label>
                    <textarea
                        value={observacion}
                        onChange={(e) => SetObservacion(e.target.value)}
                        type="text"
                        id="observacion"
                        name="observacion"
                        rows={2}

                        className=""
                        placeholder="Escriba una observacion"
                    />
                </div>

                <button type='submit'> Guardar </button>

            </form>
        </>
    )
}
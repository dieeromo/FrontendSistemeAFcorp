import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { createClienteAction } from '../../actions/clienteActions'

import Messages from '../comunes/Messages'
import Loader from '../comunes/Loader';


export default function RegisterCliente() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const path = ('/cliente/listado');

    const clienteCreate = useSelector(state => state.clienteCreate);

    const { loading, error } = clienteCreate;

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono1, setTelefono1] = useState('');
    const [telefono2, setTelefono2] = useState('');
    const [observacion, setObservacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createClienteAction(nombre, direccion, telefono1, telefono2, observacion));
        console.log(nombre)

        navigate(path);
    }

    return (
        <>
            <h1>Registro Clientes</h1>
            {loading ? <Loader /> : error
                ? <Messages>{error}</Messages>
                : (
                    <div>
                        <h3>Registro clientes</h3>
                        <form onSubmit={handleSubmit} method="POST" action="#" >
                            <div>
                                <label htmlFor="about" > Nombre </label>
                            </div>
                            <textarea
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type="text"
                                id="nombre"
                                name="nombre"
                                rows={3}
                                className=""
                                placeholder="Type Here!"
                            />

                            <div>
                                <label htmlFor="about" > Dirección </label>
                            </div>
                            <textarea
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                type="text"
                                id="direccion"
                                name="direccion"
                                rows={3}
                                className=""
                                placeholder="Type Here!"
                            />

                            <div>
                                <label htmlFor="about" > Telefono1 </label>
                            </div>
                            <textarea
                                value={telefono1}
                                onChange={(e) => setTelefono1(e.target.value)}
                                type="text"
                                id="telefono1"
                                name="telefono1"
                                rows={3}
                                className=""
                                placeholder="Type Here!"
                            />

                            <div>
                                <label htmlFor="about" > Telefono2 </label>
                            </div>
                            <textarea
                                value={telefono2}
                                onChange={(e) => setTelefono2(e.target.value)}
                                type="text"
                                id="telefono2"
                                name="telefono2"
                                rows={3}
                                className=""
                                placeholder="Type Here!"
                            />

<div>
                                <label htmlFor="about" > Observacion </label>
                            </div>
                            <textarea
                                value={observacion}
                                onChange={(e) => setObservacion(e.target.value)}
                                type="text"
                                id="observacion"
                                name="observacion"
                                rows={3}
                                className=""
                                placeholder="Type Here!"
                            />


                            <button type='submit'> Guardar </button>


                        </form>
                    </div>
                )
            }
        </>
    )
}
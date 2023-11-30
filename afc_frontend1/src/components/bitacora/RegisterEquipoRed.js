
import React, { useState } from 'react';
import NavbarAF from '../comunes/NavbarAF'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { useNavigate } from 'react-router';

import { SelectorNodo } from '../incidentes/norender/selectoresIncidentes'
import { createEquipoRedAction } from '../../actions/bitacoraActions'

export default function RegisterEquipoRed() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const path = ('/bitacora/list_equipo');

    
    const [codigo, setCodigo] = useState('');
    const [alias, setAlias] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [nodo_inicial, setNodo_inicial] = useState('');
    const [nodo_actual, setNodo_actual] = useState('');
    const [activo, SetActivo] = useState(false);

    const handleSelectChance_nodo_inicial = (event) => {
        setNodo_inicial(event.value)
    }

    const handleSelectChance_nodo_actual = (event) => {
        setNodo_actual(event.value)
    }

    const manejarCambioCheckbox = () => {
        // Cambia el estado al valor opuesto
        SetActivo(!activo);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createEquipoRedAction(codigo, alias,descripcion, fecha, nodo_inicial, nodo_actual, activo))
        navigate(path);

    }
    return (
        <>
            <NavbarAF />


            <div className='bitacora-registro-equipos-red'>
                <h1>Registro de equipos</h1>
                <form onSubmit={handleSubmit} method="POST" action="#">

                    <div>
                        <label htmlFor="codigo">Codigo equipo:</label>
                        <textarea
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            id="codigo"
                            name="codigo"
                            rows="1"
                            cols="50"
                            placeholder='Ingrese un codigo único'
                            required
                        >
                        </textarea>
                    </div>


                    <div>
                        <label htmlFor="alias">Alias:</label>
                        <textarea
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            id="alias"
                            name="alias"
                            rows="2"
                            cols="50"
                            placeholder='Ingrese un alias'
                            required
                        >

                        </textarea>
                    </div>

                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            id="descripcion"
                            name="descripcion"
                            rows="2"
                            cols="50"
                            placeholder='Ingrese una descripcion'
                            required
                        >

                        </textarea>
                    </div>

                    <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type="date"
                        id="fecha"
                        name="fecha" />
                </div>




                    <div>
                        <label htmlFor="nodo_inicial">Nodo inicial:</label>
                        <Select
                            options={SelectorNodo()}
                            onChange={handleSelectChance_nodo_inicial}
                            placeholder='Seleccione el nodo donde se lo instalo inicialmente'
                        />
                    </div>

                    <div>
                        <label htmlFor="nodo_actual">Nodo actual:</label>
                        <Select
                            options={SelectorNodo()}
                            onChange={handleSelectChance_nodo_actual}
                            placeholder='Seleccione el nodo actual'
                        />
                    </div>

                    <div>
                    <label htmlFor="activo">Activo:</label>
                    <input
                        value={activo}
                        onChange={manejarCambioCheckbox}
                        type="checkbox"
                        id="activo"
                        name="activo"
                    />
                </div>
                <button type='submit'> Guardar </button>
                </form>


            </div>

        </>
    )
}
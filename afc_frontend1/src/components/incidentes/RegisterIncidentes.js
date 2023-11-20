
import React, { useState } from 'react';


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Select from 'react-select'

import { SelectorNivel, SelectorRed, SelectorNodo, SelectorTipo } from './norender/selectoresIncidentes'
import {createIncidenteAction} from '../../actions/incidentesActions'

export default function RegisterIncidentes() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const path = ('/incidentes/list');

    const [inicio, setInicio] = useState('');
    const [fin, setFin] = useState('');
    const [nivel, setNivel] = useState('');
    const [red, setRed] = useState('');
    const [nodo, setNodo] = useState('');
    const [tipo, setTipo] = useState('');
    const [afectados, setAfectados] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSelectChance_nivel = (event) => {
        setNivel(event.value)
    }

    const handleSelectChance_red = (event) => {
        setRed(event.value)
    }

    const handleSelectChance_nodo = (event) => {
        setNodo(event.value)
    }

    const handleSelectChance_tipo = (event) => {
        setTipo(event.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createIncidenteAction(inicio, fin,nivel,red,nodo,tipo, afectados, descripcion))
        navigate(path);
    }
    return (
        <>
            <h1>Registro incidentes</h1>
            <form onSubmit={handleSubmit} method="POST" action="#">

                <div>
                    <label htmlFor="inicio">Fecha y hora de inicio:</label>
                    <input
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                        type="datetime-local"
                        id="inicio"
                        name="inicio" />
                </div>
                <div>
                    <label htmlFor="fin">Fecha y hora de fin:</label>
                    <input
                        value={fin}
                        onChange={(e) => setFin(e.target.value)}
                        type="datetime-local"
                        id="fin"
                        name="fin" />
                </div>
                <div>
                    <label htmlFor="nivel">Nivel:</label>
                    <Select
                        options={SelectorNivel()}
                        onChange={handleSelectChance_nivel}
                    />
                </div>

                <div>
                    <label htmlFor="Red">Red:</label>
                    <Select
                        options={SelectorRed()}
                        onChange={handleSelectChance_red}
                    />
                </div>

                <div>
                    <label htmlFor="Nodo">Nodo:</label>
                    <Select
                        options={SelectorNodo()}
                        onChange={handleSelectChance_nodo}
                    />
                </div>


                <div>
                    <label htmlFor="Tipo">Tipo de falla:</label>
                    <Select
                        options={SelectorTipo()}
                        onChange={handleSelectChance_tipo}
                    />
                </div>

                <div>
                    <label htmlFor="afectados">Número de clientes afactados:</label>
                    <input
                        value={afectados}
                        onChange={(e) => setAfectados(e.target.value)}
                        type="number"
                        id="afactados"
                        name="afactados"
                        min="1"
                        required />
                </div>

                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        cols="50"
                        required></textarea>
                </div>

                <button type='submit'> Guardar </button>
            </form>
        </>
    )
}
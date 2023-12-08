import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'
import {SelectorTrazadosFO, SelectorTipoTrabajo, SelectorTipoFibra } from './norender/selectoresBitacora'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { createTrabajoFibraAction } from '../../actions/bitacoraActions'



export default function RegTrabajoFO() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const path = ('/bitacora/list_trabajo_fo');

    const [trazado, set_trazado] = useState('')
    const [fecha, set_fecha] = useState('')
    const [tipoTrabajo, settipoTrabajo] = useState('')
    const [tipoFO, settipoFO] = useState('')
    const [descripcion, set_descripcion] = useState('')

    const handleSelectChance_trazado = (event) => {
        set_trazado(event.value)
    }

    const handleSelectChance_tipoTrabajo = (event) => {
        settipoTrabajo(event.value)
    }

    const handleSelectChance_tipoFibra = (event) => {
        settipoFO(event.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTrabajoFibraAction(trazado,fecha,tipoTrabajo,tipoFO,descripcion))
        navigate(path);

    }

    return (
        <>
            <NavbarAF />
            <div className='bitacora-registro-trabajo-fo'>
                <h3 >Registro de TRABAJO de FO</h3>
                <form  onSubmit={handleSubmit}  method="POST" action="#">
 
                <div>
                        <label htmlFor="trazado">Trazado FO:</label>
                        <Select
                            options={SelectorTrazadosFO()}
                            onChange={handleSelectChance_trazado}
                        />
                    </div> 

                    <div>
                        <label htmlFor="fecha">Fecha:</label>
                        <input
                            value={fecha}
                            onChange={(e) => set_fecha(e.target.value)}
                            type="date"
                            id="fecha"
                            name="fecha" />
                    </div>

                    <div>
                        <label htmlFor="tipo_trabajo">Tipo de trabajo:</label>
                        <Select
                            options={SelectorTipoTrabajo()}
                            onChange={handleSelectChance_tipoTrabajo}
                        />
                    </div>

                    <div>
                        <label htmlFor="tipo_fibra">Tipo de fibra:</label>
                        <Select
                            options={SelectorTipoFibra()}
                            onChange={handleSelectChance_tipoFibra}
                        />
                    </div>

                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            value={descripcion}
                            onChange={(e) => set_descripcion(e.target.value)}
                            id="descripcion"
                            name="descripcion"
                            rows="4"
                            cols="50"
                            required></textarea>
                    </div>

                    <button type='submit'> Guardar </button>

                </form>
            </div>

        </>
    )
}
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'
import { SelectorTipoFibra } from './norender/selectoresBitacora'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { createTrazadoFibraAction } from '../../actions/bitacoraActions'


export default function RegTrazadoFO() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const path = ('/bitacora/list_trazado_fo');

    const [identificador, set_identificador] = useState('')
    const [nombre, set_nombre] = useState('')
    const [descripcion, set_descripcion] = useState('')
    const [tipoFO, settipoFO] = useState('')
    const [fecha, set_fecha] = useState('')
    const handleSelectChance_tipoFibra = (event) => {
        settipoFO(event.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTrazadoFibraAction(identificador, nombre, descripcion, tipoFO, fecha))
        navigate(path);

    }

    return (
        <>
            <NavbarAF />
            <div className='bitacora-registro-trazado-fo'>
                <h3>Registro de trazado de FO</h3>
                <form onSubmit={handleSubmit} method="POST" action="#">



                    <div>
                        <label htmlFor="identificador">Identificador:</label>
                        <textarea
                            value={identificador}
                            onChange={(e) => set_identificador(e.target.value)}
                            id="identificador"
                            name="identificador"
                            rows="4"
                            cols="50"
                            required></textarea>
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <textarea
                            value={nombre}
                            onChange={(e) => set_nombre(e.target.value)}
                            id="nombre"
                            name="nombre"
                            rows="4"
                            cols="50"
                            required></textarea>
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

                    <div>
                        <label htmlFor="fecha">Fecha:</label>
                        <input
                            value={fecha}
                            onChange={(e) => set_fecha(e.target.value)}
                            type="date"
                            id="fecha"
                            name="fecha" />
                    </div>
                    <button type='submit'> Guardar </button>
                </form>
            </div>

        </>
    )
}
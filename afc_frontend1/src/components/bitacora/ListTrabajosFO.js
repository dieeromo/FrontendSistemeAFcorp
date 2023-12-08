
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'
import MUIDataTable from "mui-datatables"
import {SelectorTrabajosFO} from './norender/selectoresBitacora'
export default function ListTrabajosFO(){
    const trabajos = SelectorTrabajosFO()
    const columns = [
        {
            name:"fecha",
            label: "Fecha",
        },
        {
            name:"trazado",
            label: "Trazado",
        },
        {
            name:"tipo_trabajo",
            label: "Tipo trabajo",
        },
        {
            name:"tipo_fibra_cambio",
            label: "Tipo fibra",
        },
        {
            name:"descripcion",
            label: "Descripción",
        },
        {
            name:"digitador",
            label: "Digitador",
        },

    ]
    return(
        <>
        <NavbarAF/>
        <div className='bitacora-lista-trabajo-fo'>
            <h1>Lista de trabajos FO</h1>
            <MUIDataTable
            title = {"trabajos en FO"}
            data = {trabajos}
            columns = {columns}
            />
        </div>
        </>
    )
}
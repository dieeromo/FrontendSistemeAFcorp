import '../../App.css'
import NavbarAF from '../comunes/NavbarAF'
import {SelectorTrazadosFO} from './norender/selectoresBitacora'
import MUIDataTable from "mui-datatables"

export default function ListTrazadoFO(){
    const trazados = SelectorTrazadosFO()
    //console.log(trazados)
    const columns = [
        {
            name:"nombre",
            label:"Nombre",
            options: { filter: false, sort: true }
        },
        {
            name:"identificador",
            label:"Identificador",
            options: { filter: false, sort: true }
        },
        {
            name:"tipo_fibra",
            label:"Fibra tipo",
            options: { filter: false, sort: true }
        },
        {
            name:"fecha",
            label:"Fecha instalacion",
            options: { filter: false, sort: true }
        },
        {
            name:"descripcion",
            label:"Observación",
            options: { filter: false, sort: true }
        },
        {
            name:"digitador",
            label:"Dijitador",
            options: { filter: false, sort: true }
        },
    ]
    
    return(
        <>
        <NavbarAF/>
        <div className='bitacora-listado-trazado-fo'>
        <h1>Lista de trazado de FO</h1>
        <MUIDataTable
        title={"Trazados de FO"}
        data = {trazados}
        columns = {columns}
        />
        </div>
        
        </>
    )
}
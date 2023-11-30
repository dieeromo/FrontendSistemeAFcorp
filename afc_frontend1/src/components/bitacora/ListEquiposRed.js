
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'
import {SelectorEquipored} from './norender/selectoresBitacora'
import MUIDataTable from "mui-datatables"

export default function  ListEquipoRed(){
    const equipos = SelectorEquipored()
    const columns = [
        {
            name: "codigo",
            label:"Codigo",
        },
        {
            name: "alias",
            label:"Alias",
        },
        {
            name:'fecha_instalacion',
            label:'Instalacion'
        },
        {
            name:'nodo_inicial',
            label:"Nodo instalacion"
        },
        {
            name:'nodo_actual',
            label:"Nodo actual"
        },
        {
            name:'activo',
            label:'Estatus'
        },
        {
            name:'descripcion',
            label:'Descripcion'
        },
        {
            name:'user',
            label:'digitador'
        }
    ]
    

    return(
        <>
        <NavbarAF/>
        <div className='bitacora-listado-equipos-red'>
        
        <h1>Lista de equipos</h1>
        <MUIDataTable
            title={"Liosta de equipos"}
            data = {equipos}
            columns = {columns}
            />
            
  

        </div>
        </>

    )
}
import { SelectorIncidente } from './norender/selectoresIncidentes'
import { useDispatch} from 'react-redux'

import MUIDataTable from "mui-datatables"



export default function ListIncidentes() {


    

    const incidentes = SelectorIncidente()
    console.log(incidentes)

    const columns = [
        {
            name: "fecha_inicio",
            label: "Fecha inicio",
        },
        {
            name: "hora_inicio",
            label: "Hora inicio",
        },
        {
            name: "fecha_fin",
            label: "Fecha fin",
        },
        {
            name: "hora_fin",
            label: "Hora fin",
        },
        {
            name: "red",
            label: "Red",
        },
        {
            name: "nodo",
            label: "Nodo",
        },
        {
            name: "tipo",
            label: "Tipo",
        },
        {
            name: "nivel",
            label: "Nivel",
        },
        {
            name: "afectados",
            label: "Afectados",
        },
        {
            name: "descripcion",
            label: "Descripcion",
        },


    ]
    return (
        <>


            <MUIDataTable
                title={"Incidentes"}
                data={incidentes}
                columns={columns}
            />


        </>
    )
}




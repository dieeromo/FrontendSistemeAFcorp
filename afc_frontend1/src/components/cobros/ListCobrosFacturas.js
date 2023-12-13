import {SelectorCobro} from './norender/selectoresCobros'
import MUIDataTable from "mui-datatables"
import NavbarAF from '../comunes/NavbarAF'
import '../../App.css'

export default function ListCobros(){
    const cobrosList = SelectorCobro()
    console.log(cobrosList)
    const columns = [
        {
            name: 'factura',
            label: "Factura"
        },
        {
            name: 'fecha',
            label: "Fecha"
        },
        {
            name: 'monto_pago',
            label: "Monto"
        },
        {
            name: 'monto_capital',
            label: "Capital"
        },
        {
            name: 'monto_interes',
            label: "Interes"
        },
        {
            name: 'caja',
            label: "Caja"
        },
        {
            name: 'empresa',
            label: "Empresa"
        },
        {
            name: 'observacion',
            label: "Observacion"
        },
    
    ]
    return(
        <>
        <NavbarAF/>
        <div className='list-cobro-container'>
            <h1>Lista de cobros</h1>
            <MUIDataTable
            title = {"Lista cobros"}
            data = {cobrosList}
            columns = {columns}
            />
        </div>
        </>
    )
}
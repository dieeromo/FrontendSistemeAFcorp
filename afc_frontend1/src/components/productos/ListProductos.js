import NavbarAF from '../comunes/NavbarAF'
import {SelectorProducto} from './norender/selectoresProductos'
import MUIDataTable from "mui-datatables"

export default function ListProductos(){
    const productos = SelectorProducto()
    const columns = [
        {
            name:'modelo',
            label:'Modelo'
        },
        {
            name:'descripcion',
            label:'Descipcion'
        },
        {
            name:'codigo',
            label:'Codigo'
        },
        {
            name:'tipo',
            label:'Tipo'
        },
        {
            name:'subtipo',
            label:'SubTipo'
        },
        {
            name:'estado',
            label:'Estado'
        },
        {
            name:'precio_entrada',
            label:'USD in'
        },
        {
            name:'precio_salida',
            label:'Precio venta'
        },
        {
            name:'precio_promo',
            label:'Precio promo'
        },
        {
            name:'seguimiento',
            label:'Seg. Inv'
        },
        {
            name:'observacion',
            label:'Observacion'
        },
    ]
    return(
        <>
        <NavbarAF/>
        <div className='list-produtos-container'>
            <h1>Lista de productos</h1>
            <MUIDataTable
            title = {"Productos"}
            data = {productos}
            columns = {columns}
            />
        </div>
        </>
    )
}
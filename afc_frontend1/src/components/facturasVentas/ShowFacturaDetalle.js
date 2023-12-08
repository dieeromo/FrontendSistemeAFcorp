import NavbarAF from '../comunes/NavbarAF'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Selector_All_UltimaFactura } from './norender/selectorFacturasV'
import {detalleUltimaFacturaVentaAction} from '../../actions/facturaVentaActions'
import MUIDataTable from "mui-datatables"

const ShowFacturaDetalle = ({detalleVentas}) => {
    const dispatch = useDispatch()
    const ultima = Selector_All_UltimaFactura()

    const handleClick = (event) => {
        dispatch(detalleUltimaFacturaVentaAction(ultima.id))
    }

    //console.log(detalleVentas)

    const columns = [
        {
            name : "producto",
            label : "Producto"
        },
        { 
            name : "cantidad",
            label : "Cantidad"
        },
        {
            name: "precio",
            label: "precio"
        },
        {
            name: "subtotal",
            label: "Subtotal"
        },
        {
            name: "bodega",
            label: "Bodega"
        },

    ]



    //console.log(detalles)
    return (
        <>
            <NavbarAF />
            <div className='show-factura-container'>
                <h1>detalles de factura</h1>
                <div>Factura #:{ultima.numero}</div>
                <div>Fecha:{ultima.fecha}</div>
                <div>Cliente: {ultima.cliente}</div>
                <div>Empresa: {ultima.empresa}</div>
                <div>Modo compra: {ultima.modo_cv}            </div>
                <div>Plazo:{ultima.plazo_meses}</div>
                <div>Monto:{ultima.monto}</div>
                <div>Saldo: {ultima.saldo}</div>
                <div>Digitador: {ultima.user}</div>
                <button onClick={handleClick}>Mostrar</button>
                <div>
                    <MUIDataTable
                    title = {"Detalle"}
                    data = {detalleVentas}
                    columns = {columns}
                    />
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) =>({
    detalleVentas: state.detalleFacturaVentaList.detalleVentas
})

const mapDispatchToProps = {
    detalleUltimaFacturaVentaAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFacturaDetalle)
import React, { useState } from 'react';
import { useDispatch} from 'react-redux'

import {SelectorProducto} from '../productos/norender/selectoresProductos'

import { SelectorEmpresa, SelectorModoCV} from '../comunes/norender/Selectores'

import { SelectorCliente }  from '../cliente/norender/selectoresClientes'

import Select from 'react-select'

import {createFacturaDetalleVentaAction} from '../../actions/facturaVentaActions'

const PreRegisterDetalles = () => {
  const dispatch = useDispatch();

  const products = SelectorProducto()

  // Estado para almacenar el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);


  // Función para formatear las opciones para react-select
  const formatOptions = () => {
    return products.map((product) => ({
      value: product.value,
      codigo: product.codigo,
      precio_salida : product.precio_salida,
      descripcion : product.precio_salida,
      label: `${product.codigo} - ${product.descripcion}-${product.precio_salida}`,

    }));
  };

  // Estilo personalizado para el Select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '2px solid #4a90e2' : '1px solid #ccc',
      boxShadow: state.isFocused ? '0 0 5px rgba(74, 144, 226, 0.5)' : 'none',
    }),
  };
  const [id_producto, set_id_producto] = useState('')
  const [cod_producto, set_cod_producto] = useState('')
  const [cantidad, set_cantidad] = useState('')
  const [descripcion, set_descripcion] = useState('')
  const [precio_salida, set_precio_salida] = useState('')

  const handleSelectChance_Producto = (event) =>{
    set_id_producto(event.value)
    set_cod_producto(event.codigo)
    set_descripcion(event.descripcion)
    set_precio_salida(event.precio_salida)
  }


  const [clicks, setClicks] = useState([]);
  const [detalleFV_BD, SetDetalleFV_BD] = useState([])


  const handleClick = (event) => {
    const newClick = {
      id : id_producto,
      codigo: `${cod_producto}`,
      descripcion: descripcion,
      precio_salida: precio_salida,
      cantidad: cantidad,
      //timestamp: new Date().toLocaleString(),
    };

    const newDetalleFV_BD = {
      id_factura : '2',
      id_producto: id_producto,
      precio_salida : precio_salida,
      cantidad : cantidad,
      subtotal : '25',
      total : '30',
      id_bodega: '1',
      id_empresa:'1'
    }

    setClicks([...clicks, newClick]);
    SetDetalleFV_BD([...detalleFV_BD, newDetalleFV_BD])
  };

  const [numero, setNumero] = useState('');
  const [fecha, setFecha] = useState('');
  const [cliente, setCliente] = useState('');
  const [modocv, setModocv] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [observacion, setObservacion] = useState('');

  const handleSelectChance_cliente = (event) => {
    setCliente(event.value)
}

const handleSelectChance_ModoCV = (event) => {
    setModocv(event.value)
}

const handleSelectChance_Empresa = (event) => {
    setEmpresa(event.value)
}

const handleSubmit = (e) => {
  //dispatch(createFacturaDetalleVentaAction('2',id_producto,precio_salida,cantidad,'45','50','1','1'))
  detalleFV_BD.forEach(elemento => {
    //console.log(elemento.id_factura, elemento.id_producto)
    dispatch(createFacturaDetalleVentaAction(
      elemento.id_factura,
      elemento.id_producto,
      elemento.precio_salida,
      elemento.cantidad,
      elemento.subtotal,
      elemento.total,
      elemento.id_bodega,
      elemento.id_empresa

      //'2',id_producto,precio_salida,cantidad,'45','50','1','1'
      ))
  })


}

  
  return (
    <>

    <>
    <Select  
        options={formatOptions()}
        styles={customStyles}
        placeholder="Selecciona un producto"
        isSearchable
        onChange={handleSelectChance_Producto}
        //onChange={handleClick}
    />



    <label htmlFor="cantidad" > cantidad: </label>
                <input
                    value={cantidad}
                    onChange={(e) => set_cantidad(e.target.value)}
                    type="number"
                    id="cantidad"
                    name="cantidad"
                    rows={2}
                    className=""
                    placeholder="Ingrese cantidad"
      />

    <button onClick={handleClick}>Agregar</button>
    </>


      <div>
        <h2>Historial de clics:</h2>
        <ul>
          {clicks.map((click, index) => (
            <li key={index}>cod: {click.codigo} || precio: {click.precio_salida} || cantidad:{click.cantidad} || total:{click.precio_salida*click.cantidad} </li>
          ))}
        </ul>
      </div>



      <div>
      <div>
                    <label htmlFor="numero" > Factura #: </label>
                </div>
                <textarea
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    type="text"
                    id="numero"
                    name="numero"
                    rows={1}
                    className=""
                    placeholder="Type Here!"
                />
                
                <div>
                    <label htmlFor="date">Fecha de registro:</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type="date"
                        id="fecha"
                        name="fecha" />
                </div>


                <div>
                    <label htmlFor="cliente">Cliente</label>
                    <Select
                        options={SelectorCliente()}
                        onChange={handleSelectChance_cliente}
                    />
                </div>

                <div>
                    <label htmlFor="modoCV">Tipo de compra:</label>
                    <Select
                        options={SelectorModoCV()}
                        onChange={handleSelectChance_ModoCV}
                    />
                </div>


                <div>
                    <label htmlFor="empresa">Empresa:</label>
                    <Select
                        options={SelectorEmpresa()}
                        onChange={handleSelectChance_Empresa}
                    />
                </div>

      </div>

      <button onClick={handleSubmit}>Guardar </button>
    </>



  );
};

export default PreRegisterDetalles;







// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import {SelectorProducto} from '../productos/norender/selectoresProductos'

// import { SelectorEmpresa, SelectorModoCV} from '../comunes/norender/Selectores'

// import { SelectorCliente }  from '../cliente/norender/selectoresClientes'

// import Select from 'react-select'

// const PreRegisterDetalles = () => {


//   const products = SelectorProducto()

//   // Estado para almacenar el producto seleccionado
//   const [selectedProduct, setSelectedProduct] = useState(null);


//   // Función para formatear las opciones para react-select
//   const formatOptions = () => {
//     return products.map((product) => ({
//       value: product.value,
//       codigo: product.codigo,
//       precio_salida : product.precio_salida,
//       descripcion : product.precio_salida,
//       label: `${product.codigo} - ${product.descripcion}-${product.precio_salida}`,

//     }));
//   };

//   // Estilo personalizado para el Select
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       border: state.isFocused ? '2px solid #4a90e2' : '1px solid #ccc',
//       boxShadow: state.isFocused ? '0 0 5px rgba(74, 144, 226, 0.5)' : 'none',
//     }),
//   };
//   const [id_producto, set_id_producto] = useState('')
//   const [cod_producto, set_cod_producto] = useState('')
//   const [cantidad, set_cantidad] = useState('')
//   const [descripcion, set_descripcion] = useState('')
//   const [precio_salida, set_precio_salida] = useState('')

//   const handleSelectChance_Producto = (event) =>{
//     set_id_producto(event.value)
//     set_cod_producto(event.codigo)
//     set_descripcion(event.descripcion)
//     set_precio_salida(event.precio_salida)
//   }


//   const [clicks, setClicks] = useState([]);


//   const handleClick = (event) => {
//     const newClick = {
//       id : id_producto,
//       codigo: `${cod_producto}`,
//       descripcion: descripcion,
//       precio_salida: precio_salida,
//       cantidad: cantidad,
//       //timestamp: new Date().toLocaleString(),
//     };

//     setClicks([...clicks, newClick]);
//   };



//   const [numero, setNumero] = useState('');
//   const [fecha, setFecha] = useState('');
//   const [cliente, setCliente] = useState('');
//   const [modocv, setModocv] = useState('');
//   const [empresa, setEmpresa] = useState('');
//   const [observacion, setObservacion] = useState('');

//   const handleSelectChance_cliente = (event) => {
//     setCliente(event.value)
// }

// const handleSelectChance_ModoCV = (event) => {
//     setModocv(event.value)
// }

// const handleSelectChance_Empresa = (event) => {
//     setEmpresa(event.value)
// }

  
//   return (
//     <>


//     <>
//     <Select  
//         options={formatOptions()}
//         styles={customStyles}
//         placeholder="Selecciona un producto"
//         isSearchable
//         onChange={handleSelectChance_Producto}
//         //onChange={handleClick}
//     />



//     <label htmlFor="cantidad" > cantidad: </label>
//                 <input
//                     value={cantidad}
//                     onChange={(e) => set_cantidad(e.target.value)}
//                     type="number"
//                     id="cantidad"
//                     name="cantidad"
//                     rows={2}
//                     className=""
//                     placeholder="Ingrese cantidad"
//       />

//     <button onClick={handleClick}>Agregar</button>
//     </>


//       <div>
//         <h2>Historial de clics:</h2>
//         <ul>
//           {clicks.map((click, index) => (
//             <li key={index}>cod: {click.codigo} || precio: {click.precio_salida} || cantidad:{click.cantidad} || total:{click.precio_salida*click.cantidad} </li>
//           ))}
//         </ul>
//       </div>



//       <div>
//       <div>
//                     <label htmlFor="numero" > Factura #: </label>
//                 </div>
//                 <textarea
//                     value={numero}
//                     onChange={(e) => setNumero(e.target.value)}
//                     type="text"
//                     id="numero"
//                     name="numero"
//                     rows={1}
//                     className=""
//                     placeholder="Type Here!"
//                 />
                
//                 <div>
//                     <label htmlFor="date">Fecha de registro:</label>
//                     <input
//                         value={fecha}
//                         onChange={(e) => setFecha(e.target.value)}
//                         type="date"
//                         id="fecha"
//                         name="fecha" />
//                 </div>


//                 <div>
//                     <label htmlFor="cliente">Cliente</label>
//                     <Select
//                         options={SelectorCliente()}
//                         onChange={handleSelectChance_cliente}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="modoCV">Tipo de compra:</label>
//                     <Select
//                         options={SelectorModoCV()}
//                         onChange={handleSelectChance_ModoCV}
//                     />
//                 </div>


//                 <div>
//                     <label htmlFor="empresa">Empresa:</label>
//                     <Select
//                         options={SelectorEmpresa()}
//                         onChange={handleSelectChance_Empresa}
//                     />
//                 </div>

//       </div>
//     </>



//   );
// };

// export default PreRegisterDetalles;

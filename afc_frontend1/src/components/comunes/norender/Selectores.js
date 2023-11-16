import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listEmpresaCorpAction, listCajaEmpresaAction, listModoCV_Action, listBodega_Action } from '../../../actions/generalAFCActions'

export  function SelectorEmpresa() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEmpresaCorpAction())
    }, [dispatch])

    const empresa_corpList = useSelector(state => state.empresa_corpList)
    const { errorEmpresa, loadingEmpresa, empresa_corp } = empresa_corpList

    const empresa_list = empresa_corp.map((item) => ({
        label: item.empresa,
        value: item.id,
    }))


    return ( empresa_list   )
}


export  function SelectorCaja() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCajaEmpresaAction())
    }, [dispatch])

    const caja_empresaList = useSelector(state => state.caja_empresaList)
    const { errorCaja, loadingCaja, caja_empresa } = caja_empresaList
  
    const caja_list = caja_empresa.map((item) => ({
        label: item.caja,
        value: item.id,
    }))


    return ( caja_list   )
}

export function SelectorModoCV(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listModoCV_Action())
    }, [dispatch])
    const modo_cv_List = useSelector(state => state.modo_cv_List)
    const {errorModo, loadingModo, modo_cv} = modo_cv_List
    
    const modo_compra_venta = modo_cv.map((item) =>({
        label: item.modo_cv,
        value: item.id

    }))

    return(modo_compra_venta)
}


export function SelectorBodega(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listBodega_Action())
    }, [dispatch])
    const bodegaList = useSelector(state => state.bodegaList)
    const {errorBodega, loadingBodega, bodega} = bodegaList
    
    const bodega_listado = bodega.map((item) =>({
        label: item.bodega,
        value: item.id

    }))

    return(bodega_listado)
}



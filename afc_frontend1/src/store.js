import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    userLoginReducer,
    userRegisterReducer,
    userSoloReducer,
    userListReducer,
    userEditReducer,


} from './reducers/userReducers';

import {
    clienteCreateReducer,
    clienteListReducer,
} from './reducers/clienteReducers'

import {
    empresa_corpListReducer,
    caja_empresaListReducer,
    modo_cv_ListReducer,
    bodegaListReducer,
} from './reducers/generalAFCReducers'

const reducer = combineReducers({

    // User stuff
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    userSolo: userSoloReducer,
    userList: userListReducer,
    userEdit: userEditReducer,

    //cliente
    clienteCreate : clienteCreateReducer,
    clienteList: clienteListReducer,

    //general AFC
    empresa_corpList :empresa_corpListReducer,
    caja_empresaList: caja_empresaListReducer,
    modo_cv_List:modo_cv_ListReducer,
    bodegaList :bodegaListReducer,



})


const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
        userLogin: { userInfo: userInfoStorage }
}

const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
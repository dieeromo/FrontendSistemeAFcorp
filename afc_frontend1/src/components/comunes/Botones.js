import {logout} from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


export function LogoutButton(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }

    return(
        <>
        <button
        onClick={logoutHandler}
        >
            Salir
        </button>
        </>
    )
}


export function LoginButton(){
    const navigate = useNavigate();
    const path = '/login';

    const botonLoginHandler = () =>{
        navigate(path)
    }

    return(
        <>
        <button onClick={botonLoginHandler}>Loguearse</button>
        </>
    )
    
}
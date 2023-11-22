import {LogoutButton, LoginButton, RegistroIncidenteButton, ListaIncidenteButton} from './Botones'
import {useSelector } from 'react-redux';



export default function Header(){
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    let tempo = false
    if(userInfo){
        if(userInfo.access){
            tempo = true
        }
    }else{
        tempo = false
    }


    return(
        <>
        {tempo ? 
        <div> <span>Bienvenido: {userInfo.user_name} </span> <RegistroIncidenteButton/> <ListaIncidenteButton/> <LogoutButton/>  </div>
        : <LoginButton/>}
        
        
        </>
    )
}

// {userInfo ? 
//     <div> <span>Bienvenido: {userInfo.user_name} </span> <RegistroIncidenteButton/> <ListaIncidenteButton/> <LogoutButton/>  </div>
//     : <LoginButton/>}
    
import {LogoutButton, LoginButton} from './Botones'
import {useSelector } from 'react-redux';



export default function Header(){
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;


    return(
        <>
        {userInfo ? 
        <div> <span>Bienvenido: {userInfo.user_name} </span><LogoutButton/>  </div>
        : <LoginButton/>}
        
        
        </>
    )
}
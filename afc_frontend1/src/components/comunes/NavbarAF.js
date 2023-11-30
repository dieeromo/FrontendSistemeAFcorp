
import * as React from 'react';
import { logout } from '../../actions/userActions'
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';

import {BotonClientesDesplegable, BotonIncidentesDesplegable, BotonProductoDesplegable, BotonFacturaDesplegable} from './BotonesDesplegables'
import {BotonBitacoraDesplegable} from './BotonesDesplegables'


export default function NavbarAF() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    let tempo = false
    if (userInfo) {
        if (userInfo.access) {
            tempo = true
        }
    } else {
        tempo = false
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  



    return (
        <>
            <AppBar>
                <Toolbar position='static'>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <BusinessIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        AFCorp
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <BotonFacturaDesplegable/>
                        <Button color='inherit'>Contabilidad</Button>
                        <BotonClientesDesplegable/>
                        <BotonProductoDesplegable/>
                        <BotonIncidentesDesplegable/>
                        <BotonBitacoraDesplegable/>
                        
                        
                        {tempo ? <>
                            <Button color='inherit' onClick={logoutHandler}>Logout</Button>
                            <Button color='inherit' endIcon={< AccountCircleIcon />}>{userInfo.user_name}</Button>

                        </>
                            :
                            <>
                                <Button color='inherit' href='/login'>Login</Button>
                                <Button color='inherit' href='/register'>Register</Button>
                            </>
                        }
                    </Stack>

                </Toolbar>
            </AppBar>




        </>
    )
}


// {userInfo ? 
//     <div> <span>Bienvenido: {userInfo.user_name} </span> <RegistroIncidenteButton/> <ListaIncidenteButton/> <LogoutButton/>  </div>
//     : <LoginButton/>}




// import { LogoutButton, LoginButton, RegistroIncidenteButton, ListaIncidenteButton } from './Botones'
// import { logout } from '../../actions/userActions'
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import BusinessIcon from '@mui/icons-material/Business';



// export default function NavbarAF() {
//     const dispatch = useDispatch()
//     const userLogin = useSelector(state => state.userLogin);
//     const { error, loading, userInfo } = userLogin;

//     let tempo = false
//     if (userInfo) {
//         if (userInfo.access) {
//             tempo = true
//         }
//     } else {
//         tempo = false
//     }

//     const logoutHandler = () => {
//         dispatch(logout())
//     }
// ///////////////
//     const [anchorEl, setAnchorEl] = useState(null)
//     const open = Boolean(anchorEl)
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget)
//     }
//     const handleClose = () => {
//         setAnchorEl(null)
//     }
// /////////////////////////
//     const [anchorElClientes, setAnchorElClientes] = useState(null)
//     const openClientes = Boolean(anchorElClientes)
//     const handleClickClientes = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorElClientes(event.currentTarget)
//     }
//     const handleCloseClientes = () => {
//         setAnchorElClientes(null)
//     }


//     return (
//         <>
//             <AppBar>
//                 <Toolbar position='static'>
//                     <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
//                         <BusinessIcon />
//                     </IconButton>
//                     <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//                         AFCorp
//                     </Typography>
//                     <Stack direction='row' spacing={2}>

//                         <Button
//                             color='inherit'
//                             id='resources-button'
//                             onClick={handleClick}
//                             aria-controls={open ? 'resources-menu' : undefined}
//                             aria-haspopup='true'
//                             aria-expanded={open ? 'true' : undefined}
//                             endIcon={<KeyboardArrowDownIcon />}
//                         >
//                             Incidentes
//                         </Button>

//                         <Button
//                             color='inherit'
//                             id='resources-button-clientes'
//                             onClick={handleClickClientes}
//                             aria-controls={openClientes ? 'resources-menu-clientes' : undefined}
//                             aria-haspopup='true'
//                             aria-expanded={openClientes ? 'true' : undefined}
//                             endIcon={<KeyboardArrowDownIcon />}
//                         >
//                             Clientes
//                         </Button>

//                         <Button color='inherit'>Contabilidad</Button>
                        
//                         {tempo ? <>
//                             <Button color='inherit' onClick={logoutHandler}>Logout</Button>
//                             <Button color='inherit' endIcon={< AccountCircleIcon />}>{userInfo.user_name}</Button>

//                         </>
//                             :
//                             <>
//                                 <Button color='inherit' href='/login'>Login</Button>
//                                 <Button color='inherit' href='/register'>Register</Button>
//                             </>
//                         }
//                     </Stack>

//                     <Menu
//                         id='resources-menu'
//                         anchorEl={anchorEl}
//                         open={open}
//                         MenuListProps={{
//                             'aria-labelledby': 'resources-button',
//                         }}
//                         onClose={handleClose}
//                         >
//                         <MenuItem onClick={handleClose} > <Button href='/incidentes/registro'> Registro </Button> </MenuItem>
//                         <MenuItem onClick={handleClose}> <Button href='/incidentes/list' > Historico</Button> </MenuItem>
//                     </Menu>


//                     <Menu
//                         id='resources-menu-clientes'
//                         anchorElClientes={anchorElClientes}
//                         openClientes={openClientes}
//                         MenuListProps={{
//                             'aria-labelledby': 'resources-button-clientes',
//                         }}
//                         onClose={handleCloseClientes}
//                         >
//                         <MenuItem onClick={handleCloseClientes} > <Button href='/incidentes/registro'> Registro </Button> </MenuItem>
//                         <MenuItem onClick={handleCloseClientes}> <Button href='/incidentes/list' > Lista</Button> </MenuItem>
//                     </Menu>




//                 </Toolbar>
//             </AppBar>




//         </>
//     )
// }
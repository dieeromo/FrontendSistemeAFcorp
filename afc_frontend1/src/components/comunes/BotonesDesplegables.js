import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export function BotonClientesDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Clientes
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/cliente/register'>Registro</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/cliente/listado' >Listado</Button></MenuItem>

      </Menu>
    </div>
  );
}


export function BotonIncidentesDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Incidentes
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/incidentes/registro'>Registro</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/incidentes/list'>Historico</Button></MenuItem>

      </Menu>
    </div>
  );
}

export function BotonProductoDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Productos
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/productos/register'>Registro</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/productos/list'>Listado</Button></MenuItem>

      </Menu>
    </div>
  );
}

export function BotonFacturaDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Facturas
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/factura/venta/registro'>Registro</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/factura/venta/list'>Listado</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/factura/venta/show'>Detalles</Button></MenuItem>


        
      </Menu>
    </div>
  );
}


export function BotonBitacoraDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Bitacora
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/bitacora/register_equipo'>Registro Equipos</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/bitacora/list_equipo' >Listado Equipo</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/bitacora/register_trazado_fo' >Registro trazado FO</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/bitacora/list_trazado_fo' >Lista de trazados de FO</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/bitacora/register_trabajo_fo' >Registro trabajo FO</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/bitacora/list_trabajo_fo' >Lista de trabajos FO</Button></MenuItem>
        

      </Menu>
    </div>
  );
}




export function BotonCobrosDesplegable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
      >
        Cobros
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Button href='/cobros/register'>Registro</Button></MenuItem>
        <MenuItem onClick={handleClose} ><Button href='/cobros/list'>Listado</Button></MenuItem>

        

      </Menu>
    </div>
  );
}

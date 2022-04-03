import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import '../styles/NavBar.css';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navb' >
          <IconButton>
          <Link to='/'>
            <img className='logo' src="img/saturno.png" alt='saturnoceramica' />
          </Link>
          </IconButton>
          
          <Typography className='titulo' variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Saturno Ceramica
          </Typography>
          <Button color='inherit' className='boton'><Link to='/'>Inicio </Link></Button>
          <Button color='inherit' className='boton'><Link to='/Categories'>Productos</Link></Button>
          <Button color='inherit' className='boton'><Link to='/'>Nosotros</Link></Button>
          <Button color='inherit' className='boton'><Link to='/'>Contacto</Link></Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
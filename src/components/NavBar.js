import * as React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navb' >
          <IconButton>
            
          <img className='logo' src='saturno.png' alt='saturnoceramica' />
            
          </IconButton>
          
          <Typography className='titulo' variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Saturno Ceramica
          </Typography>
          <Button color='inherit' className='boton'>Inicio</Button>
          <Button color='inherit' className='boton'>Productos</Button>
          <Button color='inherit' className='boton'>Nosotros</Button>
          <Button color='inherit' className='boton'>Contacto</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
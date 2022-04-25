import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import '../styles/Modal.css'


const Transition = React.forwardRef(function Transition(props, ref) {
return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal({form, setForm, submit}) {
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleChange = (e) => {
    setForm({
        ...form,
        [ e.target.name] : e.target.value
    })
}

return (
    <div>
        <Button className='pay' onClick={handleClickOpen}>
            Pagar
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <form onSubmit={submit}>
                <div>
                    <label for='name'>Nombre: </label>
                    <input required type='text' name='name' placeholder='Nombre' onChange={handleChange} 
                    value={form.name}></input>
                </div>
                <div>
                    <label for='phone'>Celular: </label>
                    <input required type='text' placeholder='1125247593' name='phone' onChange={handleChange} 
                    value={form.phone}></input>
                </div>
                <div>
                    <label for='email'>Email: </label>
                    <input required type='email' placeholder='tumail@mail.com' name='email' onChange={handleChange} 
                    value={form.email}></input>
                </div>
                <Button className='modal__cancel' onClick={handleClose}>Cancelar</Button>
                <Button type='submit' className='modal__pay' onClick={handleClose}>Enviar</Button>
            </form>

        </Dialog>
    </div>
);
}

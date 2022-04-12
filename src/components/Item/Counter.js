import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Counter.css'


export default function Counter({ product, onAdd }) {
    const [qty, setQty] = useState(1)
    
    const addProduct = () => {
        if (qty < product.stock && product.stock > 0)
        setQty(qty + 1)
    }

    const subProduct = () => {
        if (qty > 1)
        setQty(qty -1)    
    }
    const add = () => {
        console.log('qty', qty)
        onAdd(qty)
    }

    useEffect(() =>{
        let btn = document.getElementById(`addCart${product.id}`)
        btn.addEventListener('click', onAdd)
        return () => {
            btn.removeEventListener('click', onAdd)
        }
    }, [onAdd])

    return( 
        <div className="counter">
            <Stack direction="row">
                <div className="stack">
                    <Button onClick={subProduct} className='counterbtnme' variant="contained" >-</Button>
                    <p className="contador"> {qty}</p>
                    <Button onClick={addProduct} className='counterbtnm' variant="contained" >+</Button>
                    <Button onClick={() => add} id={`addCart${product.id}`} className='addCart' variant="contained" size="medium"> Agregar al carrito </Button>
                </div> 
            </Stack>
    </div>
    )
}
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Counter.css'
import { useEffect } from "react/cjs/react.production.min";

export default function Counter(products, action) {
    const [qty, setQty] = useState(1)

    const addProduct = () => {
        if (qty < products.stock && products.stock > 0)
        setQty(qty + 1)
    }
    
    const subProduct = () => {
        if (qty > 1)
        setQty(qty -1)
    }

    return( 
        <div className="counter">
            <Stack direction="row">
                <div className="stack">
                    <Button onClick={subProduct} className='counterbtnme' variant="contained" >-</Button>
                    <p className="contador"> {qty}</p>
                    <Button onClick={addProduct} className='counterbtnm' variant="contained" >+</Button>
                    <Button onClick={()=>action} id='addCart' className='addCart' variant="contained" size="medium"> Agregar al carrito </Button>
                </div> 
            </Stack> 
             
      </div>
    )
}
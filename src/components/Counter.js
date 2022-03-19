import react, {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Counter.css'




export default function Counter(products) {
    const [qty, setQty] = useState(1)
   

    const addProduct = () => {
        if (qty < products.stock)
        setQty(qty + 1)
    }

    const subProduct = () => {
        if (qty > 1)
        setQty(qty - 1)
    }

    const message = () => {
        alert(`Se agregaron ${qty} productos`)
        setQty(1)
    }

    return( 
        <div className="counter">
            <Stack spacing={1} direction="row">
                <div className="stack">
                    <Button onClick={subProduct} className='counterbtn' variant="contained" size="small">-</Button>
                    <input type="text" value={qty} />
                    <Button onClick={addProduct} className='counterbtn' variant="contained" size="small">+</Button>
                    <Button onClick={message} className='addCart' variant="contained" size="medium"> Agregar al carrito </Button>
                </div> 
        </Stack>
      </div>
    )
}
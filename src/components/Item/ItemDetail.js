import { useState, useContext } from 'react'
import Counter from './Counter'
import FinishBtn from './FinishBtn'
import CartContext from "../../context/CartContext";
import { Button } from '@mui/material';
import '../styles/ItemDetail.css'


export default function ItemDetail ({product}) {
const [ visible, setVisible ] = useState(false)
const { cartProducts, addToCart } = useContext(CartContext)
const { title, id, category, stock, img, price, details } = product


function onAdd(quant) {
    console.log(quant)
    setVisible(!visible)
    addToCart({...product, quantity: quant})
}

const toggle = () => {
    setVisible(false)
}

return (
        <div className='product'>
            <div className='product__main'> 
                <h1>{title}</h1>
                <h4>{category}</h4>
                <img className="productImg" src={img} alt={title}/>
            </div>
            <div className='product__info'>
                <div>
                    <p><span>Precio: </span>${price}</p>
                    <p><span>Stock: </span>{stock}</p>
                    <span className='desc'>Descripcion: </span>
                        <div className='detailBox'>
                            <p> {details} </p>
                        </div>
                        <div className='buttons'>
                        {!visible && <Counter className='counterBox' product={product} onAdd={onAdd} stock={stock}/>}
                        
                        {visible && ( <div> 
                            <FinishBtn /> 
                        <Button onClick={() => toggle()} >Continuar comprando</Button>
                        </div>
                        
                                )}
                        </div>
                </div>
            </div>   
        </div>
)
}
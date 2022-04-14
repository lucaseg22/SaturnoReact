import Button from '@mui/material/Button';
import Counter from './Counter'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import FinishBtn from './FinishBtn';

export default function Card({data}) {
    const [ visible, setVisible ] = useState(false)
    const {id, title, price, stock, img, category, qty} = data
    const { addToCart } = useContext(CartContext)

    function onAdd(quant) {
        setVisible(!visible)
        addToCart({...data, quantity: quant})
    }
    const toggle = () => {
        setVisible(false)
    }
    return(
        <div key= {id} className="card">
            <h1 className="titulo">
                {title}
            </h1>
            <img className="cardImg" src={img} alt={title}/>
            <div className='bottomInfo'>
                <p>Precio: ${price} </p>
                <p>Stock: {stock} </p>
                <Button className="details" ><Link to={`/${category}/${id}`}> Ver detalles</Link></Button>
                                        {!visible && <Counter className='counterBox' product={data} onAdd={onAdd} />}
                        {visible && (   <div>
                                            <FinishBtn /> 
                                            <Button className='continuar_compra' onClick={() => toggle()} >Continuar comprando</Button>
                                        </div>
                                )}
            </div>
        </div>
    )
}
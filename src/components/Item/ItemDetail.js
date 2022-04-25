import { useState, useContext, useEffect } from 'react'
import Counter from './Counter'
import FinishBtn from './FinishBtn'
import CartContext from "../../context/CartContext";
import { Button } from '@mui/material';
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase'
import '../styles/ItemDetail.css'
import { Navigate } from 'react-router-dom';


export default function ItemDetail ({product}) {
const [ visible, setVisible ] = useState(false)
const { cartProducts, addToCart } = useContext(CartContext)
const { title, id, category, stock, img, price, details } = product

const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let product = docSnap.data()
        product.id = docSnap.id
    } else {
        console.log("No such document!");
        Navigate('/error')
    }
}

function onAdd(quant) {
    setVisible(!visible)
    addToCart({...product, quantity: quant})
}

const toggle = () => {
    setVisible(false)
}

useEffect (() =>{
    getProduct()
},[])
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
                        <Button className='continue' onClick={() => toggle()} >Continuar comprando</Button>
                        </div>
                        
                                )}
                        </div>
                </div>
            </div>   
        </div>
)
}
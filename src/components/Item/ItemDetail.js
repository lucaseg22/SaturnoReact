import { useState, useEffect } from 'react'
import Counter from '../Item/Counter'
import FinishBtn from './FinishBtn'
import '../styles/Product.css'

export default function ItemDetail ({product}) {
const [ visible, setVisible ] = useState(false)
    
const onAdd = (e) => {
    e.stopPropagation()
    setVisible(!visible)
    console.log(visible)
}

useEffect(() =>{
    let btn = document.getElementById("addCart")
    btn.addEventListener('click', onAdd)
}, [])
return (
        <div className='product'>
            <div className='product__main'> 
                <h1>{product.title}</h1>
                <h4>{product.category}</h4>
                <img className="productImg" src={product.img} alt={product.title}/>
            </div>
            <div className='product__info'>
                <div>
                    <p><span>Precio: </span>${product.price}</p>
                    <p><span>Stock: </span>{product.stock}</p>
                    <span className='desc'>Descripcion: </span>
                        <div className='detailBox'>
                               <p> {product.details} </p>
                        </div>
                        <div className='buttons'>
                        {!visible && <Counter className='counterBox' action={onAdd} stock={product.stock}/>}
                        
                        {visible && ( 
                         <FinishBtn /> 
                                )}
                        </div>
                </div>
            </div>   
        </div>
)
     }
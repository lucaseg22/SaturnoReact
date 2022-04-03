import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { productsDb } from '../helpers/productsDb'
import '../components/styles/Product.css'
import Counter from '../components/Item/Counter'

const Product = () =>{
    const { id } = useParams()
    const { category } = useParams()
    const [ product, setProduct ] = useState({})

    useEffect( () => {
        searchProductById(productsDb, id)
    }, [id])

    const searchProductById = (array, id) => {
        return array.map((product) =>{
            if (product.id === id && product.category === category) {
                return setProduct(product)
            }
        })
    }
    
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
                                {product.details}
                                <Counter className='counterBox' stock={product.stock}/>
                            </div>
                        
                    </div>
                </div>   
            </div>
    )
}

export default Product
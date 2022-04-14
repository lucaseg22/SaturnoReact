import { useContext } from 'react'
import CartContext from '../context/CartContext'
import '../components/styles/Cart.css'
import { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartProducts, total, totalPrice, deleteProduct } = useContext(CartContext)

    totalPrice()

    useEffect(() => {
        totalPrice()
    },[cartProducts])

    return (
    
        <div>
            <div className='header_tags'>
                <h3 className='prod'>Producto</h3>
                <h3 className='desc'>Descripcion</h3>
                <h3 className='qty'>Cantidad</h3>
                <h3 className='price'>Precio</h3>
                <h3 className='delete'>Eliminar</h3>
            </div>
            {cartProducts == '' && <Link className='agregar_mas' to='/'>Agregar productos</Link>}
            {cartProducts.map((cartProduct) => {
                return (<div className='products_section'  key={cartProduct.id}>
                            <div className='section product_section'>
                                <img src={cartProduct.img} />
                            </div>
                            <div className='section desc_section'>
                                <p>{cartProduct.details}</p>
                            </div>
                            <div className='section qty_section'>
                                <p>{cartProduct.quantity}</p>
                            </div>
                            <div className='section price_section'>
                            <p>$ {cartProduct.price}</p>
                            </div>
                            <div className='section total_section'>
                                <p><Button onClick={() => deleteProduct(cartProduct)} size="small"><DeleteIcon /></Button></p>
                            </div>
                        </div>)
                    })}
                    <div className='totalPrice'>
                        Total: $ <b>{totalPrice()}</b>
                    </div>
            
                </div>
    )
}
export default Cart
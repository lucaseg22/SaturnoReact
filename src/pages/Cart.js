import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'
import '../components/styles/Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import Modal from '../components/Utilities/Modal'
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore'

const Cart = () => {
    const { cartProducts, setCartProducts, totalPrice, deleteProduct, total } = useContext(CartContext)
    const [ form, setForm ] = useState({
        name:'',
        phone:'',
        email:''
    })
    const [ order, setOrder ] = useState(
        {
            buyer : form,
            items: cartProducts.map((cartProduct) => {
                return {
                    id: cartProduct.id, 
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            total: total
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({
            ...order,
            buyer: form
        })
        sendOrder()
        console.log(order)
    }

    const sendOrder = async () =>{
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, order)
        console.log('Order FB: ', orderDoc)
    }

    const clean = () => {
        setCartProducts([])
    }

    console.log('order', order)
    console.log('form',form)

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
                {cartProducts != ''  && (
                                        <div>
                                            <div className='totalPrice'>
                                                Total: $ <b>{total}</b>
                                            </div>
                                            <p><Modal submit={handleSubmit} form={form} setForm={setForm} className='pay' /></p>
                                            <p><Button className='clean' onClick={clean} size="small">Limpiar carrito</Button></p>
                                        </div>
                                        )}
                </div>  
    )
}
export default Cart
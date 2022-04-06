import { createContext, useState } from 'react'
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([])
    
        const addCart = () => {
            console.log('Agregado al carrito ', cart)
        }
        const data = {
            cart, setCart, addCart
        }
    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext

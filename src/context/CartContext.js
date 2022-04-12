import { createContext, useState } from 'react'
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cartProducts, setCartProducts ] = useState([])
    
        const addToCart = (product) => {
            let exists = cartProducts.find(cartProduct => cartProduct.id === product.id)
            !exists && setCartProducts(cartProducts => [...cartProducts, product])
            totalPrice()
        }
        
        let total = 0


        const deleteProduct = (product) => {
            setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
        }

        let totalPrice = () => {
            let total = 0
            
            cartProducts.map((cartProduct) => {
                total = cartProduct.price + total
            })
            return total
        }

        const data = {
            cartProducts, total, setCartProducts, addToCart, totalPrice, deleteProduct
        }
        

        

    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
import { createContext, useState } from 'react'
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cartProducts, setCartProducts ] = useState([])
    const [ total, setTotal ] = useState(0)
    const [ totalCount, setTotalCount ] = useState(0)
                const addToCart = (product) => {
                    const exists = cartProducts.find(cartProduct => cartProduct.id === product.id)

                    if (exists) { 
                        const productInCart = cartProducts.find(cartProduct => cartProduct.id === product.id);
                        productInCart.quantity = product.quantity + productInCart.quantity
                        const newCart = [...cartProducts]
                        setCartProducts(newCart)
                    } else {
                        setCartProducts(cartProducts => [...cartProducts, product])
                    }
                    totalPrice()
                    count()
                }

        const deleteProduct = (product) => {
            setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
        }

        let totalPrice = () => {
            let total = 0
            cartProducts.map((cartProduct) => {
                total = (cartProduct.price*cartProduct.quantity) + total
            })
            return (setTotal(total))
        }

        
        const count = () => {
            let totalCount = 0
            cartProducts.map((cartProduct) => {
            totalCount = totalCount + cartProduct.quantity
        })
        return (setTotalCount(totalCount))
    }

        const data = {
            cartProducts, total, setCartProducts, addToCart, totalPrice, deleteProduct, count, totalCount
        }
        


    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
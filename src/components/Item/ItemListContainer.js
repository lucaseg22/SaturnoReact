import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import { productsDb } from "../../helpers/productsDb"
import React, {useState, useEffect} from 'react'

export default function ItemListContainer(greeting) {
    const [products, setProducts] = useState([])
   
    const getProducts = () => {
       return new Promise((resolve, reject) => {
       setTimeout(() => {
          return (resolve(productsDb))
       },2000);
    })
    }
 
    useEffect(() => {
     getProducts().then((products) => {
          setProducts(products)
          })
    }  , []);

    return (
        <div className="itemContainer">
           <ItemList products={products}/>
        </div>
    )
}
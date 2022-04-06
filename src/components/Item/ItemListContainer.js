import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import React, {useState, useEffect} from 'react'
import getDetails from '../../helpers/getDetails'

export default function ItemListContainer(greeting) {
    const [products, setProducts] = useState([])
   

 
    useEffect(() => {
     getDetails().then((products) => {
          setProducts(products)
          })
    }  , []);

    return (
        <div className="itemContainer">
           <ItemList products={products}/>
        </div>
    )
}
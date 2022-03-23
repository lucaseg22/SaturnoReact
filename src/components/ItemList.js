import React, {useState, useEffect} from "react"
import Card from './Card'
import { productsdb } from "../Item"

export default function ItemList() {

   const [products, setProducts] = useState([])

   const getProducts = () => {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
         return resolve(productsdb)
      },2000);
   })
   }

   useEffect( () => {
    getProducts().then((products) => {
         setProducts(products)
         console.log("SOLO MONTAJE")})
   }  , [])

   return (
      <div className="container">
      {products.map((product) =>{
         const {id} = product
         return (<Card data={product} key={id} />)
      })} 
      </div>
    )
   }



import React from "react"
import Card from './Card'



export default function ItemList({products}) {

   return (
      <div className="container">
      {products.map((product) =>{
         const {id} = product
         return (<Card data={product} key={id} />)
      })}
      </div>
    )
   }



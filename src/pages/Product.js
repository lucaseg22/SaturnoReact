import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import getDetails from '../helpers/getDetails'
import Card from '../components/Item/Card'
import '../components/styles/ItemDetail.css'


const Product = () =>{
    const { category } = useParams()
    const [ products, setProducts ] = useState([])


    useEffect(() => {
        getDetails().then((products) => {
            setProducts(products)
           })
     } , []);



     return (
       
           <div className="container">
           {products.map((product) =>{
             if(product.category === category){
              return (<div  key={product.id} className='detalle'>
                       <Card data={product}></Card>
                       </div>
                       )}
           })} 
           </div>
         )

}
export default Product
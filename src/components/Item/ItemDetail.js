import '../styles/ItemDetail.css'
import { useParams } from "react-router-dom"
import Card from './Card'

export default function ItemDetail ({products}) {
  const { category } = useParams()
  console.log(category)
    return (
        <div className="container">
        {products.map((product) =>{
          if(product.category === category){
           return (<div  key={product.id} className='detalle'>
                     {console.log(product)}
                    <Card data={product}></Card>
                    </div>
                    )}
        })} 
        </div>
      )
     }
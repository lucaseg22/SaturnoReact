import {useState, useEffect} from "react";
import { productsDb } from "../../helpers/productsDb"
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer () {

const [ products, setProducts ] = useState([])

const  getDetails = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return (resolve(productsDb))
        },2000);
    })  
}

    useEffect(() => {
       getDetails().then((products) => {
           setProducts(products)
          })
    } , []);
 

        
return(
    <div>
        <ItemDetail products={products} />
    </div>
)
}


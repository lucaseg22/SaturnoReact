import {useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import getDetails from'../../helpers/getDetails'
import { useParams } from "react-router-dom"



export default function ItemDetailContainer () {
const [ product, setProduct ] = useState({})
const { id } = useParams()
const { category } = useParams()


const searchProductById = (array, id) => {
    return array.map((prod) =>{
        if (prod.id === id && prod.category === category) {
            return setProduct(prod)
        }
    })
}

useEffect(() => {
    getDetails().then((product) => {
        searchProductById(product, id)
        })
} , [id]);

return(
    <div>
        
        <ItemDetail product={product} />
    </div>
)

}


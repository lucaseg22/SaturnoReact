import {useState, useEffect} from "react";
import { productsDb } from "../helpers/productsDb";
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer () {
const [details, setDetails]= useState([])

const  getDetails = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return resolve(productsDb)
        },2000);
    })
}
useEffect( () => {
    getDetails().then((details) =>{
        setDetails(details)
    })
}, []);

return(
    <div>
        <ItemDetail details= {details}>

        </ItemDetail>
    </div>
)
}


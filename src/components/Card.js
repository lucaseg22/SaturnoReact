import react  from "react";
import Counter from './Counter'
import './Card.css'

export default function Card(products) {
    const {title, price, stock} = products
    return(
        <div className="card">
            <h1 className="titulo">
                {title}
            </h1>
            <img src="#" />
            <p>Precio: {price} </p>
            <p>Stock: {stock} </p>
            <Counter stock="5" />

        </div>
    )
}

import Button from '@mui/material/Button';
import Counter from './Counter'
import '../styles/Card.css'
import { Link } from 'react-router-dom'

export default function Card({data}) {
    const {id, title, price, stock, img, category} = data
    return(
        <div key= {id} className="card">
            <h1 className="titulo">
                {title}
            </h1>
            <img className="cardImg" src={img} alt={title}/>
            <div className='bottomInfo'>
                <p>Precio: ${price} </p>
                <p>Stock: {stock} </p>
                <Button className="details" ><Link to={`/${category}/${id}`}> Ver detalles</Link></Button>
                <Counter className="counter" stock={stock} />
            </div>

        </div>
    )
}
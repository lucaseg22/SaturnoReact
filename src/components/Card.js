
import Button from '@mui/material/Button';
import Counter from './Counter'
import './styles/Card.css'

export default function Card({data}) {
    const {id, title, price, stock, img} = data
    return(
        <div key= {id} className="card">
            <h1 className="titulo">
                {title}
            </h1>
            <img className="cardImg" src={require('../img/' + img +'.jpeg')} alt={title}/>
            <div className='bottomInfo'>
                <p>Precio: {price} </p>
                <p>Stock: {stock} </p>
                <Button className="details" > Ver detalles </Button>
                <Counter stock={stock} />
            </div>

        </div>
    )
}
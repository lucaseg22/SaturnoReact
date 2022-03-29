import './styles/ItemDetail.css'


export default function ItemDetail ({details}) {
console.log(details)
    return (
        <div className="container">
        {details.map((detail) =>{
           return (<div className='detalle'>
                    <p key={detail.id}> {detail.title} </p>
                    <img src={require('../img/' + detail.img +'.jpeg')} alt={ItemDetail.title}/>
                    <p>Descripcion: {detail.details}</p>
                    <p>Precio: ${detail.price}</p>
                    </div>)
        })} 
        </div>
      )
     }
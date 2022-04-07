import '../components/styles/Categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
return(
    <div className="catContainer">
        <div>
            <h1 className='ctgryTitle'>Tazas</h1>
            <Link to='/Tazas'><img src='img/Palta1.jpeg' alt="Tazas"/></    Link>
        </div>
        <div>
            <h1 className='ctgryTitle'>Bowls</h1>
            <Link to='/Bowls'><img src="img/Bowl.jpeg" alt="Bowls"/></Link>
        </div>
        <div>
            <h1 className='ctgryTitle'>Exprimidores</h1>
            <Link to='/Exprimidores'><img src="img/Exprimidorlemon.jpeg" alt="Exprimidores"/></Link>
        </div>
    </div>
)
}

export default Categories
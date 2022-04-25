import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import '../styles/Us.css'

const Us = () => {
    return (<div>
        <p className="welcome">En Saturno Ceramica hacemos piezas de ceramica a pedido <br/> y vendemos piezas de nuestra autoria. <br /> ¿Que esperas para ver nuestras piezas disponibles?</p>
        <Button className="button__us"><Link to='/productos'> Productos </Link></Button>
    </div>
    )
}
export default Us 
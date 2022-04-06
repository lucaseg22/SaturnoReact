import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import '../styles/FinishBtn.css'

const FinishBtn = () => {

    return(
        <Button class='finish'><Link to='/Cart'> Terminar compra </Link></Button>
    )
}

export default FinishBtn
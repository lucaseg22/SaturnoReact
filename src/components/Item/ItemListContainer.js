import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import React, {useState, useEffect} from 'react'
import getDetails from '../../helpers/getDetails'
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemListContainer() {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
    getDetails().then((products) => {
        setProducts(products)
        setLoading(false)
        })
    }  , []);

    return (
        <div>
        {loading ? (<div className='loaderContainer'><CircularProgress className='loader' color="secondary" /></div>) : (<div className="itemContainer">
        <ItemList products={products}/>
        </div>)}

        </div>
    )
}
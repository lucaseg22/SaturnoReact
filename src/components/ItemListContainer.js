import './styles/ItemListContainer.css'
import ItemList from './ItemList'

export default function ItemListContainer(greeting) {
    return (
        <div className="itemContainer">
           <ItemList />
        </div>
    )
}
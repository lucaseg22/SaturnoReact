import './ItemListContainer.css'
import Card from './Card'
export default function ItemListContainer(greeting) {
    return (
        <div class="itemContainer">
            <Card title="Palta" price="800" stock="5" />
        </div>
    )
}
import './ItemListContainer.css'

export default function ItemListContainer(greeting) {
    return (
        <div class="itemContainer">
            <h1>{greeting.value}</h1>
        </div>
    )
}
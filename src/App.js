import NavBar from './components/Nav/NavBar'
import Product from './pages/Products'
import Categories from './pages/Categories'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import ItemListContainer from './components/Item/ItemListContainer'
import Cart from './pages/Cart'
function App() {

  return (
   

    <div className="App">
      
    
      <CartProvider>
        <BrowserRouter>
          <NavBar color='secondary'/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/:category" element={<Product />} />
              <Route path="/:category/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

      
        
    </div>
  );
}

export default App;


import NavBar from './components/Nav/NavBar'
import Details from './pages/Details'
import Home from './pages/Home'
import Product from './pages/Product'
import Categories from './pages/Categories'
import './App.css';
import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import { CartProvider } from './context/CartContext'


function App() {

  return (
   

    <div className="App">
      
      <CartProvider>
        <BrowserRouter>
          <NavBar color='secondary'/>

            <Routes>
              <Route path="/details" element={<Details />} />
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/:category" element={<Product />} />
              <Route path="/:category/:id" element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

      
        
    </div>
  );
}

export default App;


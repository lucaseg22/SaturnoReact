import NavBar from './components/Nav/NavBar'
import Details from './pages/Details'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import Categories from './pages/Categories'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar color='secondary'/>

      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<Product />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      </BrowserRouter>


      
        
    </div>
  );
}

export default App;


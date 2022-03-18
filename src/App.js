import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      
        <NavBar color='secondary'/>
        
        <ItemListContainer value='Welcome!'>

        </ItemListContainer>
    </div>
  );
}

export default App;


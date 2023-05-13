import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import Promesas from './components/Promesas/Promesas';
import Fetch from './components/Fetch/Fetch';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Productos" />
      {
        //<ItemCount />
        //<Promesas/>
        //<Fetch/>
      }
      
      
    </>
  );
}

export default App;

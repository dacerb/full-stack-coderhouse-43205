import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import AsyncAwait from './components/Fetch/AsyncAwait';
//import Simpsons from './components/Fetch/Simpsons';
//import Nesflic from './components/Fetch/Nesflic';



function App() {
  return (
    <>
       
      <NavBar />
      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer/>
      
   
      {
        /*
        <AsyncAwait/>
        <Simpsons/>
        <Nesflic/>
        */
      }

     
      
    </>
  );
}

export default App;

import './App.css'
import Fetch from './components/Fetch/Fetch'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { Promises } from './components/Promises/Promises'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    
    {/*
      Comentario multi linea
        
    */}
      <BrowserRouter>
        <NavBar />  
        <Routes>
          
          <Route path='/' element={ <ItemListContainer greeting={"Our Products!!"}/> } />
          <Route path='/category/:categoryId' element={ <ItemListContainer/> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
        
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

import './App.css'
import Fetch from './components/Fetch/Fetch'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { Promises } from './components/Promises/Promises'

function App() {
  return (
    <>
    
    {/*
      Comentario multi linea
    */}

     <NavBar />
     <ItemListContainer greeting={"Hellow World!!"}/>
     <Promises />
     <Fetch />
    </>
  )
}

export default App

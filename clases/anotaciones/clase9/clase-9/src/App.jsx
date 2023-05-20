import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import Sillagamer from './Components/Sillagamer/Sillagamer';
import Computadoras from './Components/Computadoras/Computadoras';
import Celulares from './Components/Celulares/Celulares';

// React router, para enrutar las pag sin tener que recargar.
// BrowserRouter, envuelve los componentes de la app y habilita la navegacion entre ellos
// Routes, sirve para definir acada una de la rutas
// Route, define una ruta en especifico utiliza etiqueta balanceadas <Route />
// debemos completar el path y el element recibe el componente a renderizar para esa direccion

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Silla' element={ <Sillagamer/> } />
          <Route path='/Computadoras' element={ <Computadoras/> } />
          <Route path='/Celulares' element={ <Celulares/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;

/*

      <h1>Enlaces</h1>
      <h2>Enlaces Absolutos</h2>
      <p>Me conecta con pag externa</p>
      <a href="http://infobae.com" target='_blank'>Infobae</a>

      <h2>Relativos</h2>
      <p>conecta con pag del mismo sitio</p>
      <a href="/">home</a>

*/
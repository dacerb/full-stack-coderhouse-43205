import './App.css';
import Contador from './componentes/Contador/Contador';
import Categorias from './componentes/Categorias/Categorias';
import UseRef from './componentes/UseRef/UseRef';
import UseRefDom from './componentes/UseRefDom/UseRefDom';
function App() {
  return (
    <>
      <h1>Clase 5</h1>
      <Contador inicial={1} stock={10}/>
      {
        //<Contador inicial={4} stock={8}/>
      }
      <Categorias/>
      <UseRef/>
      <UseRefDom/>
    </>
  );
}

export default App;

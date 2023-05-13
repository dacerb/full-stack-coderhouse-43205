import './App.css';
import TodoList from './componentes/TodoList/TodoList';

/* STORAGE */
//Nos permite guardar datos de manera local en el navegador. 
//El navegador nos ofrece dos formas de guardar datos: 
//LocalStorage. 
//SessionStorage. 

//LocalStorage: almacena datos de forma indefinida, hasta que el usuario los borra de forma manual. 

//SessionStorage: almacena datos hasta que el usuario cierra el navegador. 

//Vamos a trabajar con setItem(), getItem(). 



function App() {

  localStorage.setItem("comision", "43205");
  localStorage.setItem("numerito", 1234);
  localStorage.setItem("booleano", true);

  let recuperoNumerito = localStorage.getItem("numerito");
  console.log(recuperoNumerito, typeof recuperoNumerito);

  //JSON = "string" con formato especial. 

  const samuel = {
    nombre: "Samuel", 
    edad: 18
  }

  //1) Pasamos el objeto a JSON
  const samuelJSON = JSON.stringify(samuel);
  console.log(samuelJSON);
  //2) Lo guardo en el localStorage. 
  localStorage.setItem("samuel", samuelJSON);
  
  //SI LO QUIERO RECUPERAR, HAGO EL CAMINO CONTRARIO: 

  //1) Recupero el JSON del localStorage: 
  const personaJSON = localStorage.getItem("samuel");
  //2) Paso el JSON a objeto nuevamente. 
  const objetoNuevoSamuel = JSON.parse(personaJSON);
  console.log(objetoNuevoSamuel);

  return (
    <>
      <TodoList/>
    </>
  );
}

export default App;

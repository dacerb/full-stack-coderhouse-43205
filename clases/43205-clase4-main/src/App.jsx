import './App.css';

//Componente: conjunto de elementos que cumplen una función específica. 

/*
Ventajas de trabajar con componentes: 

  - Reutilizamos código. 
  - Favorece la separación de responsabilidades. 
  - El código es más facil de entender. 
  - Mejora el rendimiento de la aplicación.

*/

/*
  CARACTERISTICAS PRINCIPALES: 
  -Renderizar un único elemento. 
  -Pueden recibir props (propiedades)
  -Pueden tener un estado.

  ¿Qué es el estado? Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la APP. 

  //Hooks = son funciones que me da React que me permiten manipular el estado de los componentes. 

*/

import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Mundo" />
      <ItemCount />
      <Vista />
      {
        //<ContenedorProductos />
      }
    </>
  );
}

export default App;

# crear un proyecto de react
npx create-react-app clase-2


# ejecutar la app en el server
npm start
``` importante tener en cuenta antes de ejecutar tener en cuenta la ubicacion: Hay que estar posicionado en la carpeta que contiene el package json.
```
 

 ---
 # estructura que tiene la app

* public    | contiene todos los archivos estaticos que contienen nuestra aplicacion.
    * entro ellos el index.html
    
    * etiqueta noscript "es para navegadores que no admitan JS" 
    
    * `<div id="root"> </div>`  SPA aplicacion de unica pagina o Single-page application todo el contenido es dinamico y se va a rendizar en el mismo documento index.
    para este caso se va a renderizar en el id root. todos los framework vue, angular o react se trabajan como SPA y se renderizan en un solo div...

        la desventaja de renderizar todo en un DIV puede afectar en el SEO.

* src  | es el directorio donde va a estar todo nuestro codigo.

    * generalmente para el curso no utilizamos `reportWebVitals.js, setupTest.js, app.test.js`, logo.svg  entonces los borramos.
    para 

 para resolver los erres generados por la eliminacion de archivos debemos quitar los llamados a los mismos del index.js

 pasamos de tener el app.js 

 ```
 import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

 ```
A dejarlo preparado para renderizar nuestra app y sus componentes.

```
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo estoy en react</h1>
  );
}

export default App;
```

Anterior mente los componentes se diseñaban en base a clases. hoy no es aconsejable y no se usa.

# Componentes.
se almacenan en sub carpetas segun funcion nombrados en pascal case, los mismos deben ser contenido en la carpeta componets dentro de **src**.

Dentro de las sub carpetas definimos los archivos que serian los componentes bajo el mismo nombre del directorio.

apollandonos de las librerias es7 
```
Name: ES7+ React/Redux/React-Native snippets

Id: dsznajder.es7-react-js-snippets

Description: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.

Version: 4.4.3

Publisher: dsznajder

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
```


utilizamos el comando ``rafce`` para generar la estructura del nuevo componente.

```
import React from 'react'

const ProductInfo = () => {
  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo
```

En las nuevas versiones de react no es necesario tener el importe React from 'react'

```
const ProductInfo = () => {
  return (
    <div>
    
    </div>
  )
}

export default ProductInfo```


# Estilos 
La mejor forma es tener un archivo CSS para cada componente.
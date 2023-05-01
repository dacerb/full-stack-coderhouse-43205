import './App.css';

//Caracteristicas de los componentes: 
//1) Renderizar un solo elemento. (Podemos usar un div o fragment)
//2) Pueden recibir propiedades. 
//3) Pueden tener un estado ( lo vemos la clase que viene)

//Como aplicar estilos: 
//1) en línea
//2) Con módulo de CSS. Recuerden que acá es "className". 


function App() {
  let nombre = "Samuel"; 
  return (
    <>
      <h1 style={{color:"red"}}>Hola Samuelines, soy {nombre} y tengo {30 + 6} años </h1>
      <h2 className='tituloPrincipal'>Esto es un h2</h2>
      <h3></h3>
      
    </>
  );
}

export default App;

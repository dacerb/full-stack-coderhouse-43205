import './App.css';
import Articulos from './componentes/Articulos/Articulos';
import Hooks from './componentes/Hooks/Hooks';

//importamos la función y el componente Mensaje
import Mensaje from './componentes/Patrones/Mensaje';
import { mensajeConTitulo, conAumento } from './componentes/Patrones/hoc';
import Producto from './componentes/Patrones/Producto';
import Login from './componentes/Patrones/Login';

function App() {
  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto)

  return (
    <>
      {
        //<Hooks />
      }
      <NuevoComponente/>
      <NuevoProducto nombre="tomates" precio={100}/>
      <hr />
      <Login/>
    </>
  );
}

export default App;

/*

<h1>Blog de Gatitos</h1>
      <h2>Noticias</h2>
      <Articulos img="https://placekitten.com/200/300" titulo="Alimentos nuevos" />
      
      <Articulos img="https://placekitten.com/200/286" titulo="Mudanza en los gatos" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad voluptatem cupiditate beatae repellendus sit ullam ab veniam, sequi atque ipsa similique quam eum quos culpa, explicabo nisi repudiandae voluptas!</p>
          <strong>Tiempo de lectura 2 minutos </strong>
      </Articulos>

      <Articulos img="https://placekitten.com/200/286" titulo="Mudanza en los gatos" >
          <div>
            <ul>
              <li>dormir</li>
              <li>estudiar</li>
              <li>comer</li>
            </ul>
          </div>
      </Articulos>
*/

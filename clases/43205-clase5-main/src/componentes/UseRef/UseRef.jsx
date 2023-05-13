import {useRef} from 'react'

//useRef es un hook que me permtie crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente.  

//"Referencia mutable" significa que puedo cambiar el valor de un objeto sin que se vuelva a renderizar. 

//Ej. cantidad de productos en un carrillo de compras. 

const UseRef = () => {
    const contadorCarrito = useRef(0);

    //Este hook me retorna un objeto con la propiedad "current" la cual podemos mutar. 

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }
  return (
    <div>
        <h3>Productos Marolio en el Carrito: {contadorCarrito.current} </h3>
        <button onClick={ agregarAlCarrito }> Agregar al Carrito </button>
    </div>
  )
}

export default UseRef
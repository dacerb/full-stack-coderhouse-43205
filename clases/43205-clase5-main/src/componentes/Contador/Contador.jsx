import { useState, useEffect } from 'react'

const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( ()=> {
        console.log("Se ejecutó el useEffect!!");
        /* if(contador === 5) {
            document.getElementById("boton").style.color = "red";
        } */
        //Esto no es lo más recomendado en React. Porque estoy accediendo directamente al DOM. Y no se considera una buena práctica. 
        //Mejor es usar el estado para cambiar el color del boton: 

        if(contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }

        //Modificamos el título de la pestaña del navegador: 
        document.title = `Contador: ${contador}`;


    }, [contador])

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items `);
    }

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }



    return (
        <div>
            <button onClick={ disminuirContador }> - </button>
            <strong> {contador} </strong>
            <button onClick={ aumentarContador }> + </button>
            <br /><br />

            <button onClick={agregarAlCarrito} style={{color:color}}> Agregar al carrito </button>
        </div>
    )
}

export default Contador
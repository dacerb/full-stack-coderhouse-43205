import './Eventos.css'
import { useState } from 'react';
/** EVENTOS **/
//Nos permiten escuchar cuando el usuario esta interactuando con nuestra aplicación. 

//Eventos más utilizados: 

//Click

const Eventos = () => {
    const [input, setInput] = useState(""); 
    
    //handler = manejador. 
    const manejadorClick = () => {
        console.log("Click"); 
    }

    const manejadorInput = (event) => {
        //Voy a trabajar con el objeto "event"
        setInput(event.target.value);
        //La propiedad target es la referencia al objeto del DOM que disparo el evento. 

        console.log(input);
    }

  return (
    <div>
        <button onClick={ manejadorClick }> Haceme Click </button>

        <div className="caja"
            onMouseMove={ () => console.log("Nuevo evento")}
            onMouseEnter={ () => console.log("Entraste")}
            onMouseLeave={ () => console.log("Saliste")}
        >
        </div>

        <form>
            <h2> Formulario </h2>
            <label htmlFor="campo"> Ingrese Texto </label>
            <input type="text" id='campo' 
                onChange={ manejadorInput }
                onKeyDown={()=>console.log("Presionaste una tecla")}
                onKeyUp={()=> console.log("Soltaste una tecla")}
            />
        </form>
        {
            //htmlFor = es igual al For que usamos en HTML. 
            //change = se dispara cuando el usuario cambia el valor del input. 
            //KeyDown = cuando presionamos una tecla. 
            //KeyUp = cuando soltamos una tecla. 
        }

    </div>
  )
}

export default Eventos
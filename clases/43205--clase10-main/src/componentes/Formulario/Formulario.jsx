import { useState } from "react"
/** EVENTOS CON EL FORMULARIO **/

//1) onSubmit. 

const Formulario = () => {
    //Creamos los estados: 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    //Función para manejar todo el formulario: 
    const handlerFormulario = (event) => {
        //Prevenimos la recarga de la página: 
        event.preventDefault();

        const nuevoCliente = {nombre, apellido};
        console.log(nuevoCliente);

        event.target.value = "";

        setNombre("");
        setApellido("");

    }

  return (
    <form onSubmit={handlerFormulario}>
        <h2>Formulario de Contacto</h2>
        
        <label htmlFor="nombre"> Nombre </label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre} />

        <label htmlFor="apellido"> Apellido </label>
        <input type="text" id="apellido" onChange={(e)=>setApellido(e.target.value)} value={apellido} />

        <button type="submit"> Enviar Datos </button>

    </form>
  )
}

export default Formulario
/*
//De la siguiente forma puedo hacer un renderizado condicional: 

import { useState } from "react"

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    const habilitarUsuario = () => {
        setVerificado(true);
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    return (
        <>
            {verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión</button>) : (<button onClick={habilitarUsuario}>Iniciar Sesión</button>)}
        </>
    )
}

export default BotonCondicional

*/

//Si lo quiero hacer con un Login podría hacer esto: 

import { useState } from "react"

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    //Creo los estados para administrar un usuario y contraseña. 
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {
        e.preventDefault();

        //Implemento la lógica de validación que se me ocurra: 
        if (usuario === "Tinki" && pass === "Winki") {
            setVerificado(true);
        } else {
            setUsuario("Ladrón");
            setPass("Vete Malvado!");
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }


    const guardarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const guardarPass = (e) => {
        setPass(e.target.value);
    }

    return (
        <>
            {
                verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión </button>) : (
                    <form onSubmit={habilitarUsuario}>
                        <label htmlFor="">Usuario</label>
                        <input type="text" value={usuario} onChange={guardarUsuario} />

                        <label htmlFor=""> Contraseña </label>
                        <input type="text" value={pass} onChange={guardarPass} />

                        <button>Iniciar Sesión </button>
                    </form>
                )
            }
        </>
    )
}

export default BotonCondicional
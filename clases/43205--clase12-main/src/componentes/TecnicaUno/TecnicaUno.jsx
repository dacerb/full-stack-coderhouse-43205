//1) Return Temprano. 

//Esta técnica la usamos en JS y evitamos colocar el ELSE.

//Función booleana que me dice si es fin de semana: 

function esFinDe(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    } else {
        return false;
    }
}

//Peeeeeeeeeero si aplico la técnica del "return temprano". 

function esFinDeSemana(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    }
    return false;
}

const TecnicaUno = ({ nombre }) => {
    if (nombre === "Samuel") {
        return <h1>Hola Administrador!</h1>
    }
    return <h1> Hola {nombre} </h1>
}

export default TecnicaUno
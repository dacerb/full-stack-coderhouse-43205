//Programación Sincrónica y Asincrónica. 

//La programacion sincronica ejecuta una tarea a la vez, en un orden secuencial. 

//La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial. 

//Para practicar podemos usar setTimeout. Recuerden que esta función recibe dos parametros: una funcion y un tiempo en milisegundos. 

//Me permite simular el retraso de una petición a un servidor. 

//Promesas: Un objeto que representa un evento a futuro. 
//En general representa el resultado eventual deuna petición asíncrona. 

//La promesas tienen 3 estados: pendiente, cumplida o rechazada. 



const Promesas = () => {
    //Programación sincronica: 
    console.log("Tarea 1");
    console.log("Tarea 2");

    //Programacion asincronica: 
    setTimeout( ()=> {
        console.log("Tarea A");
    }, 2000)

    setTimeout( ()=> {
        console.log("Tarea B");
    }, 1000)

    //Promesas: 

    const tusFalsasPromesas = (estado) => {
        return new Promise( (resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me regalaron lo que queria");
            } else {
                reject("Promesa rechazada, me llegó carbón");
            }
        })
    }

    console.log(tusFalsasPromesas(true));

    //THEN Y CATCH: 
    //Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumpla o se rechaza. 
    //THEN se ejecuta cuando la promesa se cumple. 
    //CATCH se ejecuta cuando la promesa se rechaza. 
    //FINALLY  se ejecuta siempre. 

    tusFalsasPromesas(false)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=> {
            console.error(error);
        })

    //Ahora practicamos con un array de datos:

    const array = ["Tinki Winki", "Lala", "Po", "Dipsy"];

    const solicitarTeletubbies = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if(estado) {
                resuelto(array);
            } else {
                rechazado("No hay teletubbies hoy");
            }
        })
    }

    solicitarTeletubbies(false)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.error(error))
        .finally( () => console.log("Proceso finalizado"))

  return (
    <div>Promesas</div>
  )
}

export default Promesas
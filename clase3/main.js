

// Sugar syntax REPASO
/*
Son operadores avanzados con la idea de simplificar el codigo.
*/

// 1. plantillas literales
let nombre = "pepe";
let trabajo = "zapateria";

console.log("el empleado " + nombre + "trabaja en una " + trabajo);

// nos permite mostrar el mensaje con una syntaxis mas limpia
console.log(`${nombre} trabaja en una ${trabajo}`);


// 2. operador ternario
// simplificacion de la estructura if else, se evalua condicion ? codigo si es VERDADERO : codigo si es FALSO 
let llueve = true;

console.log(llueve ? "torta fritas y netflix" : "hacemos un asado")

// 3. operador spread: operador de propagacion. (...) 
// Es utilizado con elementos iterables. ( Objetos, Arrays ) permite que cada uno de los elementos se pasen a una funcion de forma individual y no como un conjuto de forma que es el array.


const nombres = ["juan", "pedro", "maria", "jose"];


console.log(nombres)
// (4) ['juan', 'pedro', 'maria', 'jose']

// utilizando el operador spread se ven los elementos de forma individual en la consola
console.log(...nombres)
// equivale hacer esto por ejemplo
console.log(nombres[0], nombres[1], nombres[2], nombres[3])

// tambien nos sirve para realziar copia de objetos

const alumno = {
    nombre: "coki",
    apellid: "argenito",
    edad: 42
};

// no deberia hacer asi para copiar un objeto
const alumnoDos = alumno; // de esta forma estoy trabajando con el mismo dato porque tengo la ref del puntero...

// para copiar un objeto la mejor forma es:
const alumnoTres = {...alumno}
console.log(alumnoTres);

// DE esta forma al modificar alumnoTres no estoy modificando el objeto original..

const a = [1,2,3]
const b = [4,5,6]

// adema de copiar tambien podria para sumar elementos a un array.
const c = [...a, ...b];
console.log(c)

// Desestreucturacion de objetos:
// permite desempaquetar valores de objetos o arrays en distintas variables.

const bart = {
    nombre: "bart",
    apellido: "simpsion",
    edad: 10,
    escuela: "sprinfield elementary school"
};

let {nombre: nombre_alumno, apellido, edad, escuela} = bart

console.log(nombre_alumno, escuela)

// para los arrays debe coincidir el orden pero en el cado de los objetos de ser por los nombres.

const listardi = [1,2,3,4,5]

let [uno, dos, tres, cuatro, cinco] = listardi
let [, , tres_v2, , ] = listardi

console.log(cinco)
console.log(tres_v2) // Este forma me permite solo obtener una


const objeto = {
    objeto2: {
        nombre: "x"
    }
}

// operador null en kotlin elvis
const emplado = null;
console.log("nombre del empleado " + emplado?.nombre)  // me sirve para evitar tener un error al momento de recuperar un objeto y el mismo no tenga el atributo



// operador and y or
// and
console.log("operador && and: ");
let dia = "lunes";
let curso = "react";

if (dia === "lunes" && curso === "react") {
    console.log("hoy aprendemos sugar syntax")
};


let aprobado = true;
aprobado && console.log("Seguis estudiando en backend");

// or 
apellido || console.log("Tendras que recursar react")
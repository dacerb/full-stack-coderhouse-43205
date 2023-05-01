/** SUGAR SYNTX **/
//¿Qué es? La utilización de operadores avanzados con la idea de simplificar el código. 

//1) Plantillas literales: las usamos a traves de las backsticks y permite simplificar la concatenación de datos. 

let nombre = "Pepe Argento";
let trabajo = "Zapatería"; 

console.log("El empleado " + nombre + " trabaja en una " + trabajo );
//alt + 96

console.log(`${nombre} trabaja en una ${trabajo}`);

//2) Operador Ternario: es una simplificación de la estructura if/else. 

//Sintaxis: condicion ? codigoSiEsVerdad : codigoSiEsFalso; 

let llueve = false;

console.log(llueve ? "tortas fritas y netflix" : "hacemos un asado");

//Ejemplo con una evaluación booleanda. 

let clima = "lluvia"; 

console.log(clima === "lluvia" ? "lleva paraguas" : "sali a caminar"); 

//3) Operador Spread: operador de propagación. (...)
//Se utiliza con elementos iterables (objetos, arrays) enviando cada uno de sus elementos como parámetros a una función. 

const nombres = ["Juan", "Pedro", 100, "Jose"]; 

console.log(nombres);

//Con el operador spread: 

console.log(...nombres);

//Es lo mismo a hacer esto: 

console.log(nombres[0], nombres[1], nombres[2], nombres[3]);

//Copiar objetos: 

const alumno = {
    nombre: "Coki", 
    apellido: "Argento", 
    edad: 42 
}; 

//Esto no lo hacemos: 
//const alumnoDos = alumno; 
//Si hago esto estoy copiando la referencia en memoria. 

//Si quiero copiar un objeto puedo usar el operador spread: 

const alumnoTres = {...alumno}; 

//también puedo copiar arrays: 

const a = [1, 2, 3];
const b = [4, 5, 6]; 

const nuevoArray = [...a, ...b];
console.log(nuevoArray);

// 4) Desestructuración de Objetos: 
// Es una expresión de JS que me permite desempaquetar valores de arrays u objetos en distintas variables. 

//Ejemplo: 

const bart = {
    nombre: "Bart", 
    apellido: "Simpson", 
    edad: 10, 
    escuela: "Sprinfield Elementary School"
}; 

let {nombre:nombrecilio, apellido, edad} = bart;

console.log(nombrecilio);
console.log(apellido);
console.log(edad);

//5) Desestructuración de arrays: 

let frutas = ["Manzana", "Pera", "Naranja", "Vino"]; 

let [,, fruta, frutita] = frutas; 

console.log(fruta);

//6) Acceso Condicional a Propiedades de un objeto. 
//Lo utilizo para controlar errores y evitar que se rompa la aplicación. 

const empleado = null; 

console.log(empleado?.nombre);

//alert("continuamos");

//7) Operador && and. 
//Operador lógico que inicialmente lo usamos para evaluaciones booleanas. 

console.log("Operador && and: "); 
let dia = "lunes";
let curso = "React";

if(dia === "lunes" && curso === "React") {
    console.log("Hoy aprendemos Sugar Syntax"); 
}

//También lo vamos a utilizar como un condicional IF: 

let aprobado = false;

aprobado && console.log("Seguis estudiando en BackEnd!"); 


//8) Operador OR || 

//Si la expresión booleana es falsa, se ejecuta el código después del operador: 

aprobado || console.log("Tendras que recursar React");

//Atentos porque esto lo usamos mucho en React "Renderizado condicional". 















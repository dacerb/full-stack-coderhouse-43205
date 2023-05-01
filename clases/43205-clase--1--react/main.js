/** CLASE 1 REACT **/

//¿Qué es React? 
//Librería de JS

//¿Cuando nace? 
//Mayo del 2013 en las oficinas de Facebook. 

//¿Cuales son las ventajas de utilizar React? 

//1) Crear aplicaciones mucho más rápidas. Gracias a la técnica del Virtual DOM que me permite actualizar algunas partes de mi aplicación sin recargar toda la página. (lo vemos la clase que viene)

//2) Basado en componentes: son conjuntos de elementos que cumplen una función específica. (Por ejemplo el botón. )

//3) Tiene un enfoque DECLARATIVO. 

//Enfoque declarativo: es un estilo de programación en donde nos enfocamos en lo que se quiere lograr y no tanto en el como. 

//Enfoque imperativo: es un estilo de programación en donde se detallan paso a paso las acciones a realizar. 


/** EJEMPLO EN CÓDIGO: **/

//Ejemplo A: queremos crear un array de números pares entre el 0 y el 10. 

//¿Cómo lo puedo resolver con un enfoque imperativo?

const array = []; 

for(let i = 0; i <= 10; i++)  {
    if(i % 2 == 0) {
        array.push(i);
    }
}

console.log(array);

//De modo declarativo: 

const numeros = [0,1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(numero => numero % 2 == 0);
console.log(pares);

//EXPRESIÓN EN JS: 
//Es una combinación de valores, variables y operadores que pueden ser evaluados para producir un resultado. 

let numero = 5;

let sumas = numero + 5; 

//FUNCIONES EN JS: 
//Es un bloque de instrucciones con una tarea específica que puede ser reutilizado muchas veces. 

//Pueden ser DECLARADAS o EXPRESADAS. 

//1) Declarada: 

function sumamos(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumamos(50, 10));
//Porque el motor de JS las lee antes de ejecutar el código, esto se conoce como hoisting. 

//2) Expresadas: 
//Son aquellas funciones que se asignan a una variable. 

//Función anónima: 

const sumaDos = function(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumaDos(60,10));

//Función flechiña: 
//Es una versión resumida de la función anónima. 

const sumaTres = (a, b) =>  a + b;

//DESESTRUCTURACIÓN DE OBJETOS: 

const cliente = {
    nombre: "Pepe",
    apellido: "Argento",
    edad: 68, 
    trabajo: "vendedor de zapatos"
}

const {nombre, apellido, edad, trabajo:empresa} = cliente;

console.log(nombre);
console.log(empresa);

function saludar({nombre, edad}) {
    console.log("Hola soy " + nombre + " y tengo " + edad);
}

saludar(cliente);


//TRABAJO POR MÓDULOS: 
//Es una forma de dividir nuestro trabajo o código en partes más pequeñas. 

//Lo logramos utilizando las palabras "export" e "import"








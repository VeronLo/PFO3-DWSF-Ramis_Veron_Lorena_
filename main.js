function calcularAreaRectangulo(length, width) {
    return length * width;
}

console.log(calcularAreaRectangulo(5, 3)); // Salida: 15

console.log(calcularAreaRectangulo(10, 2)); // Salida: 20

console.log(calcularAreaRectangulo(7, 4));  // Salida: 28
separadorDeSolucion();
/*Primero pensé en cómo representar la información y cómo realizar el cálculo.
 Dado que el lenguaje de programación utilizado es JavaScript, decidí definir una función que tome dos parámetros (longitud y ancho) y devuelva el producto de estos parámetros.
Escribí el código utilizando la función que creé y llamé a esta función dentro de una declaración console.log para mostrar el resultado en la consola.
Por último, ejecuté el código en un entorno de desarrollo y obtuve los resultados esperados.*/



function contarPalabras(cadena) {
    let palabras = cadena.split(' ');
    return palabras.length;
}

console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("Me gustaría vivir en las montañas")); // Resultado: 6
console.log(contarPalabras("¡hey! ¿hay alguien alli?")); // Resultado: 4
separadorDeSolucion();
/*Para contar las palabras en una cadena, primero divido la cadena en un array de palabras utilizando el método split(' '). 
Luego, devuelvo el número de elementos en este array utilizando el método length.
Luego, escribí el código utilizando la función que creé y y llamé a esta función dentro de una declaración console.log para mostrar el resultado en la consola.*/



function invertirCadena(cadena) {
    
    return cadena.split('').reverse().join('');
}


console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("tarolas")); // Resultado: "salorat"
console.log(invertirCadena("Loquillo")); // Resultado: "olliuqol"
separadorDeSolucion();
/*Para invertir una cadena, primero divido la cadena en un array de caracteres utilizando el método split(' '). 
Luego, se invierte el orden de los elementos en este array utilizando el método reverse(). 
Finalmente, se vuelve a convertir el array de caracteres en una cadena utilizando el método join(' ').
Luego, escribí el código utilizando la función que creé y y llamé a esta función dentro de una declaración console.log para mostrar el resultado en la consola.*/



function esPalindromo(cadena) {
    let cadenaLimpia = cadena.toLowerCase().replace(/\s+/g, '');
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}

console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("rallar")); // true
console.log(esPalindromo("moderno")); // false
separadorDeSolucion();
/*Para verificar si una cadena es un palíndromo, primero limpio la cadena de espacios en blanco y convertí la cadena a minúsculas utilizando los métodos toLowerCase() y replace(/\s+/g, ''). 
Luego, invierto la cadena utilizando el método split('').reverse().join(''). 
Finalmente, comparo la cadena limpia con la cadena inverttida*/

function edadCanina() {
    let edadPerro = prompt("Introduce la edad de tu perro:");
    let edadHumana = edadPerro * 7;
    console.log("Tu perro tiene " + edadHumana + " años humanos");
}
edadCanina(); // Tu perro tiene .. años humanos
separadorDeSolucion();


function edadCanina() {
    let edadPerro = prompt("Introduce la edad de tu perro:");
    let edadHumana = edadPerro * 7;
    console.log("Tu perro tiene " + edadHumana + " años humanos");
}
edadCanina(); // Tu perro tiene .. años humanos
separadorDeSolucion();


function edadCanina() {
    let edadPerro = prompt("Introduce la edad de tu perro:");
    let edadHumana = edadPerro * 7;
    console.log("Tu perro tiene " + edadHumana + " años humanos");
}

edadCanina(); // Tu perro tiene .. años humanos

/*Para convertir la edad de un perro a años humanos, primero pedí la edad del perro al usuario utilizando el método prompt(), que abre una ventana emergente  . 
Luego, multiplicé la edad del perro por 7 para obtener la edad en años humanos. 
Finalmente, imprimí el resultado en la consola utilizando el método console.log() luego llamo a la funcion para que se ejecute  */

function separadorDeSolucion() {
    console.log('');
    console.log(" ////////////////////////////////////////////////////////////");
    console.log('');
}



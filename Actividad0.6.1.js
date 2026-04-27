// Pedimos un numero al usuario y verificamos que verdaderamente se a introducido un numero:
const readLine = require("readline-sync");

const input = readLine.question("Introduce un numero: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.log("No has introducido un numero.");

// Comprobamos si el numero que a introducido es par o impar:
} else {
let paridad; 
if (num % 2 == 0) {
    paridad = "par";
} else {
    paridad = "impar";
}

// Comprobamos si el numero que se a introducido es positivo o negativo:
let signo; 
if (num > 0) {
        signo = "positivo"; 

    } else if (num < 0) {
        signo = "negativo";
    } 
// Mostramos por pantalla el resutado:
    console.log("El nuemero es", paridad, "y", signo);
}
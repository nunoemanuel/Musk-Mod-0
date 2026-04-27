// Pedimos tres numeros al usuario y verificamos que verdaderamente se a introducido numeros:
const readLine = require("readline-sync");

const input = readLine.question("Introduce un numero: ");

const num1 = parseInt(input);
if (isNaN(num1)) {
    console.log("No has introducido un numero");
}

const input2 = readLine.question("Introduce un numero: ");

const num2 = parseInt(input2);

if (isNaN(num2)) {
    console.log("No has introducido un numero");
}
const input3 = readLine.question("Introduce un numero: ");

const num3 = parseInt(input3);

if (isNaN(num3)) {
    console.log("No has introducido un numero");
}
// Miramos si alguno de esos numeros es par y si es asi mostramos por pantalla que uno de los tres numeros es par:
if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log("Al menos uno de los números es par.");

// Si ninguno es par, mostramos por pantalla que ninguno de los numeros introducidos es par:
} else {
    console.log("Ninguno de los números es par.");
}
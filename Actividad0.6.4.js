const readLine = require("readline-sync");

const numero = readLine.question("Introduce un numero: ");

const error = parseInt(numero);

if (isNaN(error)) {
    console.log("No has introducido un numero.");
    
}else { 
    let resultado;

    for (let i = 1; i <= 10; i++) {
         resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    } 

    console.log(resultado)
}   
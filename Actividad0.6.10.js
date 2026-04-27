const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

const randomNumber = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

console.log('He pensado un número del 1 al 10. ¡Intenta adivinarlo!');

function pedirAdivinanza() {
  rl.question('Adivina: ', (input) => {
    const numero = Number(input);
    intentos++;

    if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
      console.log('Por favor, introduce un número entero entre 1 y 10.');
      pedirAdivinanza();
    } else if (numero === randomNumber) {
      console.log(`¡Correcto! Has necesitado ${intentos} intentos`);
      rl.close();
    } else {
      console.log('¡Fallo!');
      pedirAdivinanza();
    }
  });
}

pedirAdivinanza();

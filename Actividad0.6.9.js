const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

const numerosEnLetras = [
  "Cero", "Uno", "Dos", "Tres", "Cuatro",
  "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"
];

function pedirNumero() {
  rl.question('Introduce un número del 0 al 10: ', (input) => {
    const numero = Number(input);

    if (!Number.isInteger(numero) || numero < 0 || numero > 10) {
      pedirNumero();
    } else {
      console.log(numerosEnLetras[numero]);
      rl.close();
    }
  });
}

pedirNumero();
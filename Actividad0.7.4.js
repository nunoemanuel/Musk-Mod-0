const readline = require('readline');

const Array = (numeros) => {
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const media = suma / numeros.length;

  console.log(`La suma es `+ suma);
  console.log(`La media aritmética es `+ media);
};


const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});


rl.question('Introduce una lista de números separados por coma: ', (input) => {
  const numeros = input
    .split(',')
    .map(elemento => parseFloat(elemento.trim()))

  if (numeros.length === 0) {
    console.log('Por favor, introduce al menos un número válido.');
  } else {
    Array(numeros);
  }

  rl.close();
});

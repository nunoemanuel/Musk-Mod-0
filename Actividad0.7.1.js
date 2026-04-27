const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

rl.question('Introduce el radio: ', (input) => {
  const radio = parseFloat(input);
  const PI = 3.14;

  if (isNaN(radio) || radio < 0) {
    console.log('Por favor, introduce un número positivo, para que sea valido.');
  } else {
    const longitud = 2 * PI * radio;
    console.log('La circunferencia es ' + longitud);
  }

  rl.close();
});

const readline = require('readline');


const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});


rl.question('Introduce el radio: ', (input) => {
  const radio = parseFloat(input);
  const PI = 3.14;

  if (isNaN(radio) || radio < 0) {
    console.log('Por favor, introduce un positivo para que sea valido.');
    
  } else {
    const area = PI * (radio ** 2);
    console.log(`El área del círculo es ${area}`);
  }

  rl.close();
});
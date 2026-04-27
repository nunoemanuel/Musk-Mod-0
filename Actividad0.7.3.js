const readline = require('readline');

const PI = 3.14;

const mostrarResultadosDelCirculo = (radio) => {
  const circunferencia = 2 * PI * radio;
  const area = PI * (radio ** 2);

  console.log(`La circunferencia es: `+ circunferencia);
  console.log(`El área del círculo es:` + area);
};

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce el radio del círculo: ', (input) => {
  const radio = parseFloat(input);

  if (isNaN(radio) || radio < 0) {
    console.log('Por favor, introduce un número positivo para que sea valido');
  } else {
    mostrarResultadosDelCirculo(radio);
  }

  rl.close();
});

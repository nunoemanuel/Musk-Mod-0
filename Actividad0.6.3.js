const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

function factorial(n) {
  if (n === 0) return 1;
    let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

rl.question('Introduce un número: ', (input) => {
    const numero = Number(input);

  if (!Number.isInteger(numero) || numero < 0) {
    console.log('Por favor, introduce un número entero no negativo.');
    rl.close();

  } else {
    const fact = factorial(numero);
    console.log(`El factorial de ${numero} es ${fact}`);
    rl.close();
  }
});

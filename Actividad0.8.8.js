// Ejercicio 8: 
// Implementa una función que reciba un número y devuelva si dicho número es primo o no.
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce un número: ', (entrada) => {
  const numero = parseInt(entrada, 10);

  if (esPrimo(numero)) {
    console.log(`${numero} es primo.`);
  } else {
    console.log(`${numero} no es primo.`);
  }

  rl.close();
});

function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {  
    if (n % i === 0) return false;
  }
  return true;              
}


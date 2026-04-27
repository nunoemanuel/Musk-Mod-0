const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

function esPalindromo(texto) {

  const limpio = texto.replace(/\s+/g, '').toLowerCase();

  const reverso = limpio.split('').reverse().join('');
  return limpio === reverso;
}

rl.question('Introduce un texto: ', (input) => {
  if (esPalindromo(input)) {
    console.log('Es palíndromo');
  } else {
    console.log('No es palíndromo');
  }
  rl.close();
});

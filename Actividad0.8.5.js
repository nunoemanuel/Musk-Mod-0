const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce una palabra: ', (palabra) => {
  const invertida = invertirPalabra(palabra);
  console.log(`La palabra invertida es "${invertida}".`);
  rl.close();
});

function invertirPalabra(palabra) {
  const stack = []; 

  for (const letra of palabra) {
    stack.push(letra);
  }

  let invertida = '';
  while (stack.length > 0) {
    invertida += stack.pop();
  }

  return invertida;
}


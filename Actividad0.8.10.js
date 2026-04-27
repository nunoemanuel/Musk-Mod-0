// Ejercicio 10:
// Implementa una función que verifique si una secuencia de paréntesis, corchetes,y llaves es válida. Es  decir,  se  abren  tantos  como  se  cierran  y  cada  secuencia  está  siemprecontenida.
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce una secuencia: ', (secuencia) => {
  if (secuenciaValida(secuencia)) {
    console.log('Secuencia correcta.');
  } else {
    console.log('Secuencia incorrecta.');
  }
  rl.close();
});

function secuenciaValida(textointroducido) {
  const stack = [];
  const pares = { ')': '(', '}': '{', ']': '[' };

  for (const char of textointroducido) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== pares[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

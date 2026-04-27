// Ejercicio 9: 
// Implementa  una  función  que,  dado  un  texto  con  paréntesis,  indique  si  dichos  paréntesis  estánbalanceados (se cierran todos los que se abren).
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce un texto: ', (texto) => {
  if (paréntesisBalanceados(texto)) {
    console.log('Están balanceados.');
  } else {
    console.log('No están balanceados.');
  }
  rl.close();
});

function paréntesisBalanceados(texto) {
  let contador = 0;

  for (const char of texto) {
    if (char === '(') {
      contador++;
    } else if (char === ')') {
      contador--;
      if (contador < 0) return false;
    }
  }

  return contador === 0;
}

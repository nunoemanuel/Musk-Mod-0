const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce una frase: ', (frase) => {
  const fraseMinuscula = frase.toLowerCase();

  const vocales = ['a', 'e', 'i', 'o', 'u'];

  let contador = 0;

  for (const char of fraseMinuscula) {
    if (vocales.includes(char)) {
      contador++;
    }
  }

  console.log(`El número de vocales es ${contador}`);
  rl.close();
});

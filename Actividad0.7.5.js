const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una lista de elementos separados por comas: ', (input) => {
  const elementos = input.split(',');

  const repetidos = [];
  const yavistos = [];

  for (let i = 0; i < elementos.length; i++) {
    if (yavistos.includes(elementos[i])) {
      if (!repetidos.includes(elementos[i])) {
        repetidos.push(elementos[i]);
      }
    } else {
      yavistos.push(elementos[i]);
    }
  }

  if (repetidos.length === 0) {
    console.log('Todos los elementos son únicos');
  } else {
    console.log('Elementos repetidos:', repetidos.join(', ')+ '.');
  }

  rl.close();
});

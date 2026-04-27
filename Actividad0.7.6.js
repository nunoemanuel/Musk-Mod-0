const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question('Introduce el tamaño de la matriz cuadrada: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log('Por favor, introduce un número entero positivo.');
    rl.close();
    return;
  }

  const matriz = generarMatriz(n);
  console.log(matriz);
  rl.close();
});

function generarMatriz(n) {
  const matriz = [];
  let contador = 1;

  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(contador++);
    }
    matriz.push(fila);
  }

  return matriz;
}

const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

function crearMatriz(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(i * j);
    }
    matriz.push(fila);
  }
  return matriz;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    const fila = matriz[i];
    const fila2 = fila.join(', ');
    if (i === matriz.length - 1) {
      console.log(` [ ${fila2} ]`);
    } else {
      console.log(` [ ${fila2} ]`);
    }
  }
}

rl.question('Introduce el tamaño de la matriz cuadrada: ', (input) => {
  const n = parseInt(input);
  if (isNaN(n) || n <= 0) {
    console.log('Por favor, introduce un número entero positivo.');
  } else {
    const resultado = crearMatriz(n);
    imprimirMatriz(resultado);
  }
  rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

rl.question('Introduce un texto: ', (input) => {
  const matriz = textoAMatriz(input);
  console.log(matriz);
  rl.close();
});

function textoAMatriz(texto) {
  const palabras = texto.trim().split(/\s+/); 
  const ancho = 5;
  const matriz = [];

  for (let i = 0; i < palabras.length; i += ancho) {
    
    const fila = palabras.slice(i, i + ancho);
    matriz.push(fila);
  }

  return matriz;
}

const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

function palabrasRepetidas(texto) {
  const palabras = texto
    .toLowerCase()
    .replace(/[.,;:!?¿¡]/g, '')
    .split(/\s+/);
    
  const conteo = {};
  const repetidas = new Set();

  for (let palabra of palabras) {
    if (conteo[palabra]) {
      repetidas.add(palabra);
    } else {
      conteo[palabra] = 1;
    }
  }

  return Array.from(repetidas);
}

rl.question('Introduce un texto: ', (input) => {
  const resultado = palabrasRepetidas(input);
  if (resultado.length > 0) {
    console.log(`Se repiten las siguientes palabras: ${resultado.join(', ')}`);
  } else {
    console.log('No hay palabras repetidas.');
  }
  rl.close();
});

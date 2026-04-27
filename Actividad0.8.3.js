const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un texto: ', (texto) => {
  const mapaFrecuencias = calcularFrecuencias(texto);
  console.log('Mapa de frecuencias:');
  console.log(mapaFrecuencias);
  rl.close();
});

function calcularFrecuencias(cadena) {
  const mapa = new Map();

  for (const char of cadena.toLowerCase()) {
    mapa.set(char, (mapa.get(char) || 0) + 1);
  }

  return mapa;
}

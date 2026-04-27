const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
  
});

rl.question('Introduce una palabra: ', (palabra1) => {
 
  rl.question('Introduce otra palabra: ', (palabra2) => {

    const resultado = sonAnagramas(palabra1, palabra2);

    if (resultado) {
      console.log('Las palabras son anagramas :)');
    } else {
      console.log('Las palabras no son anagramas :(');
    }

    rl.close();
  });
});

function sonAnagramas(palabra1, palabra2) {
  palabra1 = palabra1.toLowerCase().replace(/\s+/g, '');
  palabra2 = palabra2.toLowerCase().replace(/\s+/g, '');

  if (palabra1.length !== palabra2.length) return false;

  const mapa = new Map();

  for (const char of palabra1) {
    mapa.set(char, (mapa.get(char) || 0) + 1);
  }

  for (const char of palabra2) {
    if (!mapa.has(char)) {
      return false;
    }
    mapa.set(char, mapa.get(char) - 1);
  }

  for (const valor of mapa.values()) {
    if (valor !== 0) return false;
  }

  return true;
}

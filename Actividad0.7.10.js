function trasponerMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const matrizTraspuesta = [];

  for (let j = 0; j < columnas; j++) {
    const filaTraspuesta = [];
    for (let i = 0; i < filas; i++) {
      filaTraspuesta.push(matriz[i][j]);
    }
    matrizTraspuesta.push(filaTraspuesta);
  }
  return matrizTraspuesta;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    const fila2 = matriz[i].join(', ');
    if (i === matriz.length - 1) {
      console.log(` [ ${fila2} ]`);
    } else {
      console.log(` [ ${fila2} ]`);
    }
  }
}

const matrizEjemplo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

console.log('Matriz de entrada:');
imprimirMatriz(matrizEjemplo);

const resultado = trasponerMatriz(matrizEjemplo);

console.log('Matriz traspuesta:');
imprimirMatriz(resultado);

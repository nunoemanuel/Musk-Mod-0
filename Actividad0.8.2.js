
function diferenciaArrays(arr1, arr2) {
  return arr1.filter(num => !arr2.includes(num));
}

function generarArrayAleatorio(longitud, maxValor) {
  const arr = [];
  for (let i = 0; i < longitud; i++) {
    arr.push(Math.floor(Math.random() * maxValor) + 1);
  }
  return arr;
}

const array1 = generarArrayAleatorio(5, 10);  
const array2 = generarArrayAleatorio(3, 10); 

console.log('Array 1:', array1);
console.log('Array 2:', array2);

const diferencia = diferenciaArrays(array1, array2);
console.log('Los numeros que no se repiten son', diferencia);

// Ejercicio 7: 
// Implementa el algoritmo de ordenación quicksort y comprueba cuánto tarda en ejecutarse sobre un array de números aleatorios de tamaño 100.000

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivote = arr[Math.floor(arr.length / 2)];

  const menores = arr.filter(num => num < pivote);
  const iguales = arr.filter(num => num === pivote);
  const mayores = arr.filter(num => num > pivote);

  return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
}

const SIZE = 100000;
const numeros = Array.from({ length: SIZE }, () => Math.floor(Math.random() * 1000000));

console.log(`Ordenando ${SIZE} elementos con QuickSort...`);

const inicio = Date.now();
quickSort(numeros);
const fin = Date.now();

const duracion = (fin - inicio) / 1000;
console.log(`El algoritmo quicksort ha tardado ${duracion.toFixed(3)} segundos en ordenar ${SIZE} elementos.`);

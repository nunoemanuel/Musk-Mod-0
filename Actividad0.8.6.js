function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

const SIZE = 100000;
const numeros = Array.from({ length: SIZE }, () => Math.floor(Math.random() * 1000000));

console.log(`Ordenando ${SIZE} elementos con Bubble Sort...`);

const inicio = Date.now();
bubbleSort(numeros);
const fin = Date.now();

const duracion = (fin - inicio) / 1000;
console.log(`El algoritmo bubble sort ha tardado ${duracion.toFixed(2)} segundos en ordenar ${SIZE} elementos.`);

'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let equals = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] === pivot) {
      equals.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(equals).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let i = Math.floor(array.length / 2);
  let left = array.slice(0, i); //* i half of array, back to middle
  let right = array.slice(i) //* middle to the end

  left = mergeSort(left);
  right = mergeSort(right);

  let result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  return [...result, ...left, ...right];
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

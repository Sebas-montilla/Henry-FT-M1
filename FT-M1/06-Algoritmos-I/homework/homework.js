'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]; //* in this case all the tests have their first number as 1
  let i = 2; //* in factoring we always take the number 2 as the first option to divideui
  while (num !== 1) {
    //* it must be different than 1 in order to run, otherwise when it reach 1 it'll stop
    if (num % i === 0) {
      array.push(i);
      num = num / i;
    } else {
      i++;
    }
  }
  return array;
}
//!Example (how it work)
/*
num = 180
i = 2
array = [1]

num = 180 => num % i === 0 TRUE => 180 / 2 => num = 90 & array = [1,2] => num % i === 0 TRUE => 90 / 2 => =
num = 45 & array = [1,2,3] => num % i === 0 FALSE => i++ => num % i === 0 TRUE => 45 / 3 => num = 15 & array = [1,2,2,3]
and so on...
*/
//!

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap) {
    //*If swap is true that means there's elements to sort, if not the array is correctly sort
    swap = false;
    for (let i = 0; i < array.length; i++) {
      let bubble = array[i];
      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = bubble;
        swap = true;
      }
    }
  }
  return array;

  //! How it work
  /*
  bubble = 5
  [1, 5, 4, 2, 8]
      i 
        i+1
  */
  //!
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      array[j] = aux;
      j--; //* rigth to left
    }
    // if (array[j] > array [j+1]) {
    //   array[j+1] = array[j]
    //   array[j] = aux
    // }
    array[j + 1] = aux;
  }
  return array;

  //! How it work
  /*
  aux = 2
  [1, 2, 4, 5, 8]
            i 
   j
  */
  //!
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let j = 0; j < array.length; j++) {
    let min = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i 
      }
    }
    if (j !== min) {
      let aux = array[j]
      array[j] = array[min]
      array[min] = aux
    }
  }
  return array;
  //! How it work
  /*
  aux = 5
  [1, 5, 4, 2, 8]
     min 
      j  
         i
  */
  //!
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

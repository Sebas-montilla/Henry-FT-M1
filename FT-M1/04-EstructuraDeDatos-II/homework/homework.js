'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

//!Default settings //
function LinkedList() {
  this.head = null; //* Head always start as null
  this._length = 0; //* If Head is null, length is 0
}

function Node(value) {
  this.value = value; //* The value of the Node
  this.next = null; //* When i create a new node by default points to null
}
//!Default settings //

LinkedList.prototype.add = function (value) {
  let node = new Node(value); //* A variable to store a new Node
  let current = this.head; //* Current starts by head

  if (!current) {
    // if (current.next === null)
    this.head = node; //* Head it's not empty or null anymore, now points to new Node
    this._length++;
  } else {
    while (current.next) {
      // while (current.next !== null)
      current = current.next;
    }
    current.next = node; //* When current ends null then it's equal to newNode
    this._length++;
  }
};

LinkedList.prototype.remove = function () {
  let current = this.head;
  if (this._length === 0) return null; // if (!current) return null

  if (this._length === 1) {
    // if (!current.next)
    let lastValue = this.head.value;
    this.head = null;
    this._length--;
    return lastValue;
  }

  while (current.next.next) {
    // while (current.next.next !== null)
    current = current.next;
  }
  //* When we reach this stage is because current is antepenultimate position
  let lastValue = current.next.value;
  current.next = null;
  this._length--;
  return lastValue;
};

LinkedList.prototype.search = function (arg) {
  //* arg refers to the received value to search
  let current = this.head;
  if (!this.head) return null; //* If there's not results return null, the list is empty
  while (current) {
    if (current.value === arg)
      return current.value; //* if the current value is equal to the arg then return than current value
    else if (typeof arg === "function") {
      //* this is made to accept functions to search as well
      if (arg(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }
  return current;
};

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos hash,set, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
  let sumCodes = 0;
  for (let i = 0; i < key.length; i++) {
    sumCodes += key.charCodeAt(i);
  }
  return sumCodes % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  // let house>KEY = 'Orlando'>VALUE
  let index = this.hash(key);
  if (typeof key !== "string") throw new TypeError("Must be a String");
  if (!this.buckets[index]) {
    this.buckets[index] = {};
  }
  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  return this.buckets[index][key];
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  //!! it’s short way to cast a variable to be a Boolean (true or false) value 
  return !!this.buckets[index][key];
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};

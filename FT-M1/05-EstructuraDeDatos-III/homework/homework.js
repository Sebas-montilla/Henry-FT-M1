'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }

  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === "pre-order") cb(this.value);
  if (this.left) this.left.depthFirstForEach(cb, order);
  if (!order || order === "in-order") cb(this.value);
  if (this.right) this.right.depthFirstForEach(cb, order);
  if (order === "post-order") cb(this.value);

  // if (order === "pre-order") {
  //   //* root - izq - der
  //   cb(this.value);
  //   if (this.left !== null) this.left.depthFirstForEach(cb, order);
  //   if (this.right !== null) this.right.depthFirstForEach(cb, order);
  // } else if (order === "post-order") {
  //   //* izq - der - root
  //   if (this.left !== null) this.left.depthFirstForEach(cb, order);
  //   if (this.right !== null) this.right.depthFirstForEach(cb, order);
  //   cb(this.value);
  // } else {
  //   //* in order
  //   //* izq - root - der
  //   if (this.left !== null) this.left.depthFirstForEach(cb, order);
  //   cb(this.value);
  //   if (this.right !== null) this.right.depthFirstForEach(cb, order);
  // }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left !== null) {
    array.push(this.left);
  }
  if (this.right !== null) {
    array.push(this.right);
  }
  cb(this.value);

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.right === null && this.left === null) return 1; //*There's just one node, the root node, principal
  if (this.left !== null && this.right === null) return 1 + this.left.size();
  if (this.left === null && this.right !== null) return 1 + this.right.size();
  if (this.left !== null && this.right !== null)
    return 1 + this.right.size() + this.left.size();
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};

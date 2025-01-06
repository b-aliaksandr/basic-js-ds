const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root = null;
  head = null;

  root() {
    return this.#root;
  }

  #direction = {
    right: 'right',
    left: 'left',
  }

  #selectDirection(data) {
    return this.head.data > data ?
      this.#direction.left :
      this.#direction.right;
  }

  #insertInHeadByDirection(data) {
    const direction = this.#selectDirection(data);

    if (this.head[direction] === null) {
      this.head[direction] = new Node(data);
      this.head = this.#root;
    } else {
      this.head = this.head[direction];
      this.add(data);
    }
  }

  add(data) {
    if (this.root() === null) {
      this.#root = new Node(data);
    } else {
      this.#insertInHeadByDirection(data);
    }
    this.head = this.#root;
  }

  has(data) {
    if (this.head === null) return false;
    if (this.head.data === data) {
      this.head = this.#root;
      return true;
    }
    
    const direction = this.#selectDirection(data);

    this.head = this.head[direction];
    return this.has(data);
  }

  find(data) {
    if (this.head === null) return null;
    if (this.head.data === data) {
      const foundNode = this.head;
      this.head = this.#root;
      return foundNode;
    }

    const direction = this.#selectDirection(data);

    this.head = this.head[direction];
    return this.find(data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.head === null) return null;
    if (this.head.left === null) {
      const minValue = this.head.data;
      this.head = this.#root;
      return minValue;
    } else {
      this.head = this.head.left;
      return this.min();
    }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
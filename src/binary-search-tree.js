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
    const search = (node) => {
      if (node === null) return false;
      if (node.data === data) return true;

      const direction = node.data > data
        ? this.#direction.left
        : this.#direction.right;

      return search(node[direction]);
    };

    return search(this.#root);
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

  #removeNode(node, data) {
    if (node === null) return null;

    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      this.head = node.right;
      const minValue = this.min();
      node.data = minValue;
      node.right = this.#removeNode(node.right, minValue);
      return node;
    }

    const direction = node.data > data
      ? this.#direction.left
      : this.#direction.right;

    node[direction] = this.#removeNode(node[direction], data);
    return node;
  }

  remove(data) {
    this.#root = this.#removeNode(this.#root, data);
    this.head = this.#root;
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
    if (this.head === null) return null;
    if (this.head.right === null) {
      const maxValue = this.head.data;
      this.head = this.#root;
      return maxValue;
    } else {
      this.head = this.head.right;
      return this.max();
    }
  }
}

module.exports = {
  BinarySearchTree
};
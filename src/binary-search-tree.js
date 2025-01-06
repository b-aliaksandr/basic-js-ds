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

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
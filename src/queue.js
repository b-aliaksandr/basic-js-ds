const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const [last, item] = [this.tail, new ListNode(value)];
    if (last) {
      last.next = item;
    } else {
      this.head = item;
    }
    this.tail = item;
  }

  dequeue() {
    const item = this.head;
    if (!item) return null;

    if (this.tail === item) {
      this.initialize();
    } else {
      this.head = item.next;
    }
    return item.value;
  }
}

module.exports = {
  Queue
};

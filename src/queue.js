const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

  constructor(){
    this._queue = [];
  }

  getUnderlyingList() {
    let current = null;
    let next = null;
    let result = null;

    for(let i = this._queue.length -1; i >= 0 ; i--){
      next = result;
      current = this._queue[i];

      result = {value: current, next: next};
    }

    return result;
  }

  enqueue(value) {
    this._queue.push(value);
  }

  dequeue() {
      const res = this._queue[0];
      this._queue = this._queue.slice(1, this._queue.length);

      return res;
  }
}

module.exports = {
  Queue
};

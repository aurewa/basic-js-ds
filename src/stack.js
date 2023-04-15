const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(){
    this._stack = [];
  }

  push(value) {
    this._stack.push(value);
  }

  pop() {
    const elem = this._stack.length -1 < 0 ? 0 :  this._stack.length -1;

    let result =  this._stack[elem];
    this._stack = this._stack.slice(0, elem);

    return result;
  }

  peek() {
    const elem = this._stack.length -1 < 0 ? 0 :  this._stack.length -1;
    return this._stack[elem];
  }
}

module.exports = {
  Stack
};

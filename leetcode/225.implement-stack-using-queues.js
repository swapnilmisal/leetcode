/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length) return this.stack2.pop();
  else while (this.stack1.length) this.stack2.push(this.stack1.pop());
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length) return this.stack2[this.stack2.length - 1];
  return this.stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack1.length || this.stack2.length) return false;
  return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = new MyQueue();
  this.stack = new MyQueue();
};

MyStack.prototype.work = function () {
  const temp = new MyQueue();
  const tempStack = new MyQueue();
  while (!this.queue.empty()) {
    while (!this.queue.empty()) {
      let lastElm = this.queue.pop();
      if (this.queue.empty()) tempStack.push(lastElm);
      else temp.push(lastElm);
    }

    while (!temp.empty()) {
      let lastElm = temp.pop();
      if (temp.empty()) tempStack.push(lastElm);
      else this.queue.push(lastElm);
    }
  }
  while (!this.stack.empty()) tempStack.push(this.stack.pop());
  while (!tempStack.empty()) this.stack.push(tempStack.pop());
};
/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.queue.empty()) return this.stack.pop();
  this.work();
  return this.stack.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  console.log(this.queue);
  console.log(this.stack);
  if (this.queue.empty()) return this.stack.peek();
  this.work();
  return this.stack.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.queue.empty() && this.stack.empty()) return true;
  return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

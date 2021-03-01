/**
 * Initialize your data structure here.
 * push peek isEmpty照常，pop的时候借助一个辅助栈进行2次逆序
 */
var MyQueue = function() {
    this.stack = []
    this.tmpStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length) {
        this.tmpStack.push(this.stack.pop())
    }

    let first = this.tmpStack.pop()

    while(this.tmpStack.length) {
        this.stack.push(this.tmpStack.pop())
    }
    return first
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};


/**
 * Initialize your data structure here.
 * 优化pop每次都要倒栈的问题，在导入辅助栈后，保留元素在里面，下次pop效率更好
 */
var MyQueue = function() {
    this.stackWrite  = []
    this.stackRead  = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackWrite.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek();
    return this.stackRead.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if (!(this.stackRead.length === 0)) {
        return this.stackRead[this.stackRead.length - 1];
    }

    while (!(this.stackWrite.length === 0)) {
        this.stackRead.push(this.stackWrite.pop());
    }
    
    return this.stackRead[this.stackRead.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackRead.length === 0 && this.stackWrite.length === 0;
};

// let obj = new MyQueue();
//  obj.push(1);
//  obj.push(2)
//  console.log(obj.stackWrite);
//  let param_2 = obj.peek();
//  console.log(param_2);
//  let param_3 = obj.pop();
//  console.log(param_3);
//  let param_4 = obj.empty();
//  console.log(param_4);
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
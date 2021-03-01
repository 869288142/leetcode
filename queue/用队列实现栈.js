/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1  = []
    this.queue2  = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    
    this.queue2.unshift(x);
   
    // 交换a和b,使得a队列没有在push()的时候始终为空队列

    // 将b队列中元素全部转给a队列
    while(!(this.queue1.length === 0)){
        this.queue2.push(this.queue1.shift());
    }

    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
 
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue1.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0
};


 var obj = new MyStack()
 obj.push(1)
 obj.push(2)
 console.log(obj.queue1, obj.queue2);

 var param_3 = obj.top()
 console.log(param_3);
  var param_2 = obj.pop()
  console.log(param_2);
//  var param_4 = obj.empty()


/**
 * Initialize your data structure here.
 * 将x之外的重新插入队列即可
 */
var MyStack = function() {
    this.queue1  = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
    for(let i = 1; i < this.queue1.length; i++) {
        this.queue1.push(this.queue1.shift());
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue1.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0
};


 var obj = new MyStack()
 obj.push(1)
 obj.push(2)
 console.log(obj.queue1, obj.queue2);

 var param_3 = obj.top()
 console.log(param_3);
  var param_2 = obj.pop()
  console.log(param_2);
//  var param_4 = obj.empty()

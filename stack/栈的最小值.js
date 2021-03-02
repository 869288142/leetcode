// /**
//  * initialize your data structure here.
//  */
// var MinStack = function() {
//     this.stack = []
//     this.minStack = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(x)
//     }

//     return this.stack.push(x)
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     let top = this.stack.pop()
//     if(top === this.minStack[this.minStack.length - 1]) {
//         this.minStack.pop()
//     }
//     return top
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//    return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1]
// };


/**
 * 单个栈实现，思路和双栈类似，只是把数据存在了min和stack里面
 */
class MinStack {
    constructor() {
        this.stack = []
        this.min = 0
    }
    push(x) {
        if(x <= this.min){   
            //将之前的最小值保存
            this.stack.push(this.min);
            //更新最小值
            this.min = x;
        }
        this.stack.push(x);
    };
    pop() {
        if(this.stack.pop() == this.min) {
            this.min = this.stack.pop();
        }
    };
    top() {
        return this.stack[this.stack.length - 1]
    };
    getMin() {
        return this.min
    };
} 
/**
 * 如何维护最小值 //
 * 如何还原原值 栈顶大于0则是Top + min 反之就是 min
 */
class MinStack {
    constructor() {
        this.stack = []
        this.min = 0
    }
    push(x) {
        if (this.stack.length === 0) {
		    this.min = x;
			this.stack.push(x - this.min);
		} else {
			this.stack.push(x - this.min);
			if (x < this.min){
				this.min = x; // 更新最小值
			}
				
		}
    };
    pop() {
		let pop = this.stack.pop();
		
		//弹出的是负值，要更新 min
		if (pop < 0) {
			this.min = this.min - pop;
		}

    };
    top() {
        let top = this.stack[this.stack.length - 1];
		//负数的话，出栈的值保存在 min 中
		if (top < 0) {
			return  (this.min);
        //出栈元素加上最小值即可
		} else {
			return (top + this.min);
		}
    };
    getMin() {
        return this.min
    };
} 


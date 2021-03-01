var CQueue = function() {
    this.stackWrite = []
    this.stackRead = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackWrite.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!(this.stackRead.length === 0)) {
        return this.stackRead.pop();
    }
    
    if(this.stackWrite.length === 0) {
        return - 1
    }

    while (!(this.stackWrite.length === 0)) {
        this.stackRead.push(this.stackWrite.pop());
    }
    
    return  this.stackRead.pop();
};
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops = ["5","2","C","D","+"]) {
    let stack = []
    let sum = 0
    for(let i = 0; i < ops.length; i ++) {
        let flag = ops[i]
        if(flag === 'C'){
            let top = stack.pop()
            sum-=(+top)
        }else if(flag === 'D') {
            let top = stack[stack.length - 1]
            sum += (top * 2)
            stack.push( top * 2)
        }else if(flag === '+') {
            let top = stack[stack.length - 1]
            let top2 = stack[stack.length - 2]
            sum += (top + top2)
            stack.push( top + top2)
        }else {
            sum += (+flag)
            stack.push(+flag)
        }
    }
    return sum
};

console.log(calPoints());
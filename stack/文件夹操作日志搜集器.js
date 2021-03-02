/**
 * @param {string[]} logs
 * @return {number}
 * 时间复杂度On
 * 空间复杂度On
 */
var minOperations = function(logs = ["d1/","d2/","../","d21/","./"]) {
    let stack = []

    for(let i = 0; i < logs.length; i++) {
        let cur  = logs[i]
        if(cur === '../') {
            stack.pop()
        }else if(cur === './') {
            continue
        }else {
            stack.push(cur)
        }
    }
    
    return stack.length
};

console.log(minOperations());
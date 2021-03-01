/**
 * @param {string} s
 * @return {string}
 * 用栈模拟
 * 时间复杂度On
 * 空间复杂度On
 */
var makeGood = function(s = "kkdsFuqUfSDKK") {
    let stack = []
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length !== 0 && ( Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt())  === 32)) {
            stack.pop()
        }else {
            stack.push(s[i])
        }
    }

    return stack.join("")
};

/**
 * @param {string} s
 * @return {string}
 * 用栈模拟
 * 时间复杂度On
 * 空间复杂度On
 */
var makeGood = function(s = "abBAcC") {
    let stack = ""
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length !== 0 && ( Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt())  === 32)) {
            stack = stack.slice(0, stack.length - 1)
        }else {
            stack+=s[i]
        }
    }

    return stack
};

console.log(makeGood());
/**
 *
 * @param {string} [s=']']
 * 分析栈的对称性，从右括号开始找到对称的括号，最终不为空即为匹配，反之匹配
 * 时间复杂度On
 * 空间复杂度On
 * @return {*} 
 */
var isValid = function(s = ']') {
    let stack  = []
    for(let i = 0; i < s.length; i ++) {
        let char = s[i]
        // 将左括号入栈
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        // 检查是否有对应的右括号匹配
        }else {
            let top = stack[stack.length - 1]

            if(char === ')' && top === '(') {
                stack.pop()
            }else if(char === ']' && top === '[') {
                stack.pop()
            }else if(char === '}' && top === '{') {
                stack.pop()
                // 没有可以抵消的右括号，即为匹配失败
            }else {
                return false
            }
        }
    }

    return stack.length === 0
};

/**
 *
 * @param {string} [s=']']
 * 分析栈的对称性，从右括号开始找到对称的括号，最终不为空即为匹配，反之匹配
 * 时间复杂度On
 * 空间复杂度On
 * @return {*} 
 */
var isValid = function(s = ']') {
    // 空字符串和奇数长度字符串，不可能达到匹配条件
    if(s.length % 2 !== 0 || s.length === 0) {
        return false
    }

    let stack  = []

    for(let i = 0; i < s.length; i ++) {
        let char = s[i]
        // 将左括号入栈
        if(char === '('){
            stack.push(')')
        }else if(char === '[') {
            stack.push(']')
        }else if(char === '{') {
            stack.push('}')
        }else {
            if(stack.length === 0 || char !== stack.pop()) {
                return false
            }
        }
    }

    return stack.length === 0
};

console.log(isValid());
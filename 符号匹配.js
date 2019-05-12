// 问题：
// 1.给定 ( { [,按照如下规则检测其是否合法
// 2.符号必须同时含有开闭，以及相邻顺序两种情况

// 思路
// 利用栈来匹配
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let sArr = [...s]
  let stack = []
  for (let i = 0; i < sArr.length; i++) {
    let c = sArr[i]
    c === '(' && stack.push(')')
    c === '[' && stack.push(']')
    c === '{' && stack.push('}')
    if (c === ')' || c === ']' || c === '}') {
      if (stack.length === 0 || stack.pop() !== c) {
        return false
      }
    }
  }
  return stack.length === 0
}

let s = '()'
console.log(isValid(s))

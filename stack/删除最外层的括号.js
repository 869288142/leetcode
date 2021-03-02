/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses(S) {
    if (S === "") return S
  
    let stack = []
    let res = ""
  
    for(let i = 0; i < S.length; i++) {
      let c = S[i]
      if (c === '(') {
        // 如果栈为非空，表示非最外层的括号
        if (stack.length > 0) {
          res += c
        }
        stack.push('(')
      }
      if (c === ')') {
        stack.pop()
        // 如果栈为非空，表示非最外层的括号
        if (stack.length > 0) {
          res += c
        }
      }
    }
  
    return res
};
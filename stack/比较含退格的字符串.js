/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * 用例:
 * 
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 * 尝试普通模拟无果，使用栈模拟更加自然
 * 时间复杂度On
 * 空间复杂度On
 */
var backspaceCompare = function(S = "a#c", T = "b") {
    return build(S) === build(T) 
};

function build(char) {
    let stack = []

    for(let i = 0; i < char.length ; i++) {
        if(char[i] === '#') {
            if(stack.length !== 0) {
                stack.pop()
            }
        }else {
            stack.push(char[i])
        }
    }
    return stack.join("")
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * 用例:
 * 
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 * 时间复杂度On
 * 空间复杂度O1
 */
var backspaceCompare = function(S = "a#c", T = "b") {
    
};


console.log(backspaceCompare());
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s = "aaa") {
    let count = 0
    let char = s[0]
    let start = 0
    let ret = []
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === char) {
            count++
            if(count >= 3 && i === s.length - 1) {
                ret.push([start, i]);
            }
        }else {
            if(count >= 3) {
                ret.push([start, i - 1]);
            }
            start = i
            char = s[i]
            count = 1 
        }
    }
    return ret
};

/**
 * 
 * @param {*} s 
 * char 可以判断相邻字符代替
 * 起始字符可以通过计数算出
 */

var largeGroupPositions = function(s = "aaa") {
    let count = 1
    let ret = []
    for(let i = 0 ; i < s.length; i++) {
        if(i === s.length - 1 || s[i] !== s[i + 1]) {
            if(count >= 3) {
                ret.push([i - count + 1, i]);
            }
            count = 1
        } else {
            count++
        }
    }
    return ret
};

console.log(largeGroupPositions());
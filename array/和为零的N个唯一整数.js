/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let s = n
    let ret = []

    if(!(n % 2 === 0)) {
        ret.push(0)
        s =  s - 1
    }

    for(let i = 1 ; i <= s / 2 ; i++) {
        ret.push(-i)
        ret.push(i)
    }

    return ret
};
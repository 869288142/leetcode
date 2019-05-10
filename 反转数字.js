// 给定一个带符号的数字，反转这个数字
// 123 -> 321
// 思路
// 取余整除后再称1
/**
 * @param {number} x
 * @return {number}
 */
const clamp = [2 ** 31 * -1, 2 ** 31 - 1]

var reverse = function(x) {
    const invert = Math.abs(x).toString().split('').reverse().join('')
    const polar = x < 0 ? -1 : 1;
    const t = Number(invert) * polar
    
    if (t < clamp[0] || t > clamp[1]) return 0
    
    return t
};
let x = -123
console.log(reverse(x))
console.log( 123 < Number.MIN_VALUE);

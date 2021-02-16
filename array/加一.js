/**
 * @param {number[]} digits
 * @return {number[]}
 * 模拟法
 */
var plusOne = function(digits = [9]) {
    // 先加一
    digits[digits.length - 1] = digits[digits.length - 1] + 1

    for(let i = digits.length - 1; i > 0; i--) {
        // 计算本位
        let flag = digits[i] >= 10
        // 本位赋值
        digits[i] = digits[i] % 10
        // // 进位计算
        digits[i - 1] = flag ? digits[i - 1] + 1 : digits[i - 1]
    }

    // 计算最高位
    if( digits[0] >= 10) {
        let a = digits[0] % 10
        // 本位赋值
        digits[0] = a
        // 进位计算
        digits.unshift(1)
    }


    return digits
};

/** 
 * 
*/

var plusOne = function(digits = [9]) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) return digits;
    }
    digits = new Array(digits.length + 1).fill(0);
    digits[0] = 1;
    return digits;
}


console.log(plusOne());
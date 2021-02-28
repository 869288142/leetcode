/**
 * @param {number[]} numbers
 * @return {number}
 * 时间复杂度Onlogn
 */
var minArray = function(numbers) {
    return numbers.sort((a, b) => a - b)[0]
};
/**
 * @param {number[]} numbers
 * @return {number}
 * 时间复杂度On
 */

var minArray = function(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < numbers[i - 1]) {
            return numbers[i]
        }
    }
    // 处理没有拐点的数组，疑似与题目不符
    return numbers[0]
};


/**
 * @param {number[]} numbers
 * @return {number}
 */

var minArray = function(numbers = [3, 1, 1]) {
    let left = 0
    let right = numbers.length - 1

    while(left <= right) {
        let mid =  Math.floor((left + right) / 2) 
        if(numbers[mid] > numbers[right]) {
            left = mid + 1
        }else {
            right = right - 1
        }
    }

    return numbers[left]
};


console.log(minArray());

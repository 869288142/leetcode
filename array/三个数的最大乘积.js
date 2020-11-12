/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let tmp = nums.sort((a, b) => a - b);
    return Math.max(tmp[0] * tmp[1] * tmp[tmp.length - 1], tmp[tmp.length - 1] * tmp[tmp.length - 2] * tmp[tmp.length - 3]);
}

// 优化
var maximumProduct = function(nums) {
let min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE;
let max1 = Number.MIN_VALUE, max2 = Number.MIN_VALUE, max3 = Number.MIN_VALUE;
    for (let n of nums) {
        if (n <= min1) {
            min2 = min1;
            min1 = n;
        } else if (n <= min2) {     // n lies between min1 and min2
            min2 = n;
        }
        if (n >= max1) {            // n is greater than max1, max2 and max3
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if (n >= max2) {     // n lies betweeen max1 and max2
            max3 = max2;
            max2 = n;
        } else if (n >= max3) {     // n lies betwen max2 and max3
            max3 = n;
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

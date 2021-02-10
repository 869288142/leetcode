/**
 * @param {number[]} nums
 * @return {number}
 * 排序验证
 * 时间复杂度nlogn
 */
var missingNumber = function(nums) {
    let ret = nums.sort((a, b) => a - b)
    for(let i = 0; i <= nums.length; i++) {
        if(ret[i]!== i) {
            return i
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * 求和验证
 * 时间复杂度n
 */
var missingNumber = function(nums = [3,0,1]) {
    let n = nums.length
    let exceptSum = (0 + n ) * ( n + 1) / 2
    for(let i = 0; i < nums.length; i++) {
        exceptSum-=nums[i]
    }
    return  exceptSum
};


/**
 * @param {number[]} nums
 * @return {number}
 * 异或
 * 时间复杂度n
 */
var missingNumber = function(nums = [3,0,1]) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
};

console.log(missingNumber());
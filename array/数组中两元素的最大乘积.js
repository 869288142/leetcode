/**
 * @param {number[]} nums
 * @return {number}
 * 找出最大和次大即可
 */
var maxProduct = function(nums = [3,4,5,2]) {
    let max = 0;
    let secondMax = 0;
    let maxIndex = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= max) {
            max = nums[i]
            maxIndex = i
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(i === maxIndex) {
            continue;
        }
        secondMax = Math.max(nums[i], secondMax)
    }

    return (max - 1) * (secondMax - 1)
};

/**
 * @param {number[]} nums
 * @return {number}
 * 找出最大和次大即可,优化为一次循环
 */
var maxProduct = function(nums = [3,4,5,2]) {
    let max1 = 0;
    let max2 = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max1) {    //若num大于之前的最大值,则现在最大值是num,次大值是max1
            max2 = max1;
            max1 = nums[i]; // 最大值
        }
        else if(nums[i] > max2) {
            max2 = nums[i];
        }
    }


    return (max1 - 1) * (max2 - 1)
};


console.log(maxProduct());
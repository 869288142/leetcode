/**
 * @param {number[]} nums
 * @return {number}
 * 模拟优化版
 * 时间复杂度On2
 * 空间复杂度O1
 */

var maxSubArray = function(nums = [-2,1,-3,4,-1,2,1,-5,4]) {
    let max = nums[0]
    for(let i = 0; i < nums.length; i++) {
        let sum = 0
        for(let j = i; j < nums.length; j++) {
            sum+=nums[j]
            max = Math.max(max, sum)
        }
    }
    return max
}

var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};


maxSubArray()
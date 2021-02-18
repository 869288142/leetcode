/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 时间复杂度On
 * 空间复杂度O1
 */
var findMaxAverage = function(nums = [-1], k =1) {
    let sum = 0;
    const n = nums.length;
    // 连续k的起始和
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    // 滑动计算子序列最大值即可
    for (let i = k; i < n; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    // 计算结果
    return maxSum / k;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 时间复杂度On
 * 空间复杂度O1
 * 合并2个过程，不太理想
 * edgeCase为合并的maxSum起始值
 */
var findMaxAverage = function(nums = [-1], k = 1) {
    let sum = 0;
    let maxSum = sum;

    for (let i = 0; i < nums.length; i++) {
        if(i < k) {
            sum += nums[i];
            if(i === k - 1) { 
                maxSum = sum
            }
            continue;
        }
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    maxSum = Math.max(maxSum,sum);

    return maxSum / k;
};

console.log(findMaxAverage());
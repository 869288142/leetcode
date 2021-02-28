/**
 * @param {number[]} nums
 * @param {number} k
 * 滑动弹窗
 * 时间复杂度On/k * k
 * 空间复杂度O1
 */
var maxSlidingWindow = function(nums = [1,-1], k = 3) {
    if(k === 0) {
        return []
    }
    let ret = []
    
    for(let i = 0; i <= nums.length - k; i++) {
        let max = nums[i]
        for(let j = i; j < i + k ; j ++) {
            max = Math.max(max, nums[j])
        }
        ret.push(max)
    }
    return ret
};

console.log(maxSlidingWindow());
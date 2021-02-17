/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度On
 * 空间复杂度O1
 */
var findMagicIndex = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(i === nums[i]) {
            return i 
        }
    }
    return -1
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 线性查找
 * 时间复杂度On
 * 空间复杂度O1
 */
var search = function(nums, target) {
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            count++
        }
    }
    return count
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 线性查找
 * 时间复杂度On
 * 空间复杂度O1
 */
var search = function(nums, target) {
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            count++
        }
    }
    return count
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 * 时间复杂度Ologn
 * 空间复杂度O1
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1;
    while(i <= j) {
        let m = Math.floor((i + j) / 2);
        if(nums[m] <= target) i = m + 1;
        else j = m - 1;
    }
    let right = i;
    // 若数组中无 target ，则提前返回
    if(j >= 0 && nums[j] != target) return 0;
    // 搜索左边界 right
    i = 0; j = nums.length - 1;
    while(i <= j) {
        let m = Math.floor((i + j) / 2);
        if(nums[m] < target) i = m + 1;
        else j = m - 1;
    }
    let left = j;
    return right - left - 1;
};
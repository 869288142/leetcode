/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 线性查找
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) {
            return i
        }
    }
    return nums.length
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 */
var searchInsert = function(nums = [1,3,5,6], target = 7) {
   let left = 0
   let right = nums.length - 1
   while(left <= right ) {
    let mid =  Math.floor((left + right) / 2) 
        if(nums[mid] === target) {
            return mid
        } if (nums[mid] > target) {
            right = mid - 1
        }else {
            left = mid + 1
        }
   }
   return left
};

console.log(searchInsert());
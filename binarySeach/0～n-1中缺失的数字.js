/**
 * @param {number[]} nums
 * @return {number}
 * 枚举
 * 时间复杂度On
 * 空间复杂度O1
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] !== i) {
            return i
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * 枚举
 * 二分查找
 */
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid =  left + ((right - left) >> 1) ;
        if(nums[mid] === mid){
            left = mid + 1; 
        }else {
            right = mid - 1;
        }  
    }
    return left;
};
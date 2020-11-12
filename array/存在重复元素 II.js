/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 枚举法，超时
var containsNearbyDuplicate = function(nums, k) {
    for (let i = nums.length - 1; i >=0 ; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j] && i - j === k) {
                return true
            }
        }
    }
    return false
};

var containsNearbyDuplicate = function(nums, k) {
    let set = new Set()
    for (let i = 0; i < nums.length ; i++) {
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if(set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false
};


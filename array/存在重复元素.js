/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums = [1,2,3,1]) {
    let counts = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(counts.has(nums[i])) {
            counts.set(nums[i], counts.get(nums[i]) + 1)
            if(counts.get(nums[i]) >= 2) {
                return true
            }
        }else {
            counts.set(nums[i], 1)
        }
    }
    return false
};

var containsDuplicate = function(nums = [1,2,3,1]) {
    let unique = new Set(nums)
    return unique.size !== nums.length
};

var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
};


console.log(containsDuplicate());
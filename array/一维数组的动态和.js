/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums = [1,2,3,4]) {
    let ret = []

    let curSum = 0

    for(let i = 0; i < nums.length; i++ ) {
        curSum+=nums[i]
        ret[i] = curSum
    }

    return ret
};

var runningSum = function (nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};


console.log(runningSum());
/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度(O(n2))
 * 空间复杂度(O(1))
 */
var pivotIndex = function(nums = [2, 1, -1]) {
    for(let i = 0; i < nums.length; i++) {
        let leftAll = 0;
        let rightAll = 0;

        for(let j = 0; j < i; j++ ) {
            leftAll += nums[j]
        }

        for(let j = i + 1; j < nums.length; j++ ) {
            rightAll += nums[j]
        }

        if(leftAll === rightAll || (i === 0 && rightAll === 0) || (i === nums.length - 1 && leftAll === 0)) {
            return i 
        }

    
    }
    return -1
};

var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};


console.log(pivotIndex());

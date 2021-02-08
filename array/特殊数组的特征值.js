/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums = [3,5]) {
    for(let curSpec = 0; curSpec <= nums.length; curSpec++) {

        let count = 0
        for(let i = 0; i < nums.length; i++) {
            if( nums[i] >= curSpec) {
                count ++ 
            }
        }

        if(curSpec === count) {
            return curSpec
        }
    }
    return -1
};

/**
 * 
 * @param {*} nums 
 */
var specialArray = function(nums = [3,5]) {
    let n = nums.length

    let cnt = new Array(n + 1).fill(0)

    for (let num of nums) {
        cnt[Math.min(num, n)]++;
    }

    for (let i = n; i >= 0; --i) {
        if (i < n)
            cnt[i] += cnt[i + 1];
        if (cnt[i] == i)
            return i;
    }
    return -1;
};


console.log(specialArray());
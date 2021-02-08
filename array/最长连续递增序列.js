/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O2
 * 空间复杂度O1
 */
var findLengthOfLCIS = function(nums =[1,3,5,4,7]) {
    let max = 0

    if(nums.length < 2)  {
        return nums[0] || 0
    }

    for(let i = 0; i < nums.length; i++) {
        let curMax = 0
        for(let j = i; j < nums.length - 1; j++) {
            if(nums[j] >= nums [ j +1 ] ) {
                curMax = j - i + 1
                if(curMax > max) {
                    max = curMax
                }
                break;
            }else if( nums[j] < nums [ j +1 ] && j === nums.length - 2) {
                curMax = nums.length - i
                if(curMax > max) {
                    max = curMax
                }
                break;
            }
        }
    }
    return max 
};

/**
 * 贪心算法
 * @param {*} nums 
 */

var findLengthOfLCIS = function(nums) {
    let ans = 0;
    const n = nums.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            start = i;
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};

console.log(findLengthOfLCIS());
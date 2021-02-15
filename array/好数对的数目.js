/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] == nums[j]) {
                ++ans;
            }
        }
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 排列公式
 */

var numIdenticalPairs = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
    }
    let ans = 0;
    for (let v of map.values()) {
        ans += v * (v - 1) / 2;
    }
    return ans;
};
/**
 * 
 * @param {*} nums 
 * 等差数列法
 */

var numIdenticalPairs = function(nums) {
    let ans = 0;
    let temp = new Array(100).fill(0);
    for (let num of nums) {
        ans += temp[num - 1]++;
    }
    return ans;
};
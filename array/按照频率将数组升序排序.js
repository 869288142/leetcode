/**
 * @param {number[]} nums
 * @return {number[]}
 * 模拟法
 * 时间复杂度O(n + nlogn)
 * 控件复杂度O(unique n)
 */
var frequencySort = function(nums = [1,1,2,2,2,3]) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
    }
    return nums.sort((a, b) => {
        return map.get(a) !== map.get(b) ? map.get(a) - map.get(b) : b - a
    })
};

console.log(frequencySort());
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 枚举判断
 * 时间复杂度On2
 * 空间复杂度O1
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 先记录差值和其下标，再查找一次数值是否存在于差值之中
 * edgeCASE: 相等元素构成target
 * 时间复杂度O2n
 * 空间复杂度On
 */
var twoSum = function(nums = [3,3], target = 6) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        map.set( target - nums[i], i)
    }
    for(let i = 0; i < nums.length; i++) {
        if(map.get(nums[i]) && map.get(nums[i]) !== i) {
            return [map.get(nums[i]) , i]
        }
    }
};
console.log(twoSum());

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 枚举判断
 * 时间复杂度On
 * 空间复杂度On
 */
var twoSum = function(nums = [3,3], target = 6) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [i , map.get(target - nums[i])]
        }
        map.set(nums[i], i)
    }
};
// console.log(twoSum());
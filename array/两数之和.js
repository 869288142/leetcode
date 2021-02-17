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
 * 枚举判断
 * 时间复杂度On
 * 空间复杂度On
 */
var twoSum = function(nums = [3,3], target = 6) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        map.set( target - nums[i], i)
    }
    for(let i = 0; i < nums.length; i++) {
        if(typeof map.get(nums[i]) !== 'undefined'  && typeof map.get(target - nums[i]) !== 'undefined' && map.get(nums[i]) !== map.get(target - nums[i])) {
            return [map.get(nums[i]) , map.get(target - nums[i])]
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
console.log(twoSum());
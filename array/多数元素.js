/**
 * @param {number[]} nums
 * @return {number}
 * 计算 2 * count > n即可
 */
var majorityElement = function(nums = [2,2,1,1,1,2,2]) {
    let map  = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
    }
    for(let k of map.keys()) {
        if( 2 * map.get(k) > nums.length) {
            return k
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * 计算 2 * count > n即可, 不需要最终结果，达到即可结束
 * 时间复杂度On
 * 空间复杂度O unique n
 */
var majorityElement = function(nums = [1]) {
    let map  = new Map()
    const n  = nums.length

    for(let i = 0; i < n; i++) {

        let num = nums[i]

        if(map.has(num)) {
            let curCount = map.get(num) + 1
            map.set(num, curCount)
        }else {
            map.set(num, 1)
        }
        // 达到目标后即可丢弃掉后续计算
        if(2 * (map.get(num)) > n) {
            return num
        }
    }
};

/**
 * 摩尔投票法
 */
var majorityElement = function(nums = [1]) {
    let cur = nums[0]
    let count = 1
    for(let i = 1; i < nums.length; i++) {
        if(cur === nums[i]) {
            count++
        }else {
            if(count > 0) {
                count --
            }else {
                count = 1
                cur = nums[i]
            }
        }
    }
    return cur
}


console.log(majorityElement());
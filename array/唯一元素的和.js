/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度O2n
 * 空间复杂度O unique n
 */
var sumOfUnique = function(nums = [1,2,3,2]) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
    }
    let ret = 0
    for(let key of map.keys()) {
        if(map.get(key) === 1){
            ret+=key
        }
    }
    return ret
}; 

console.log(sumOfUnique());
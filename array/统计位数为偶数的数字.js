/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ret  = 0
    for(let i = 0; i < nums.length; i++) {
        if(`${nums[i]}`.length % 2 === 0) {
            ret++
        }
    }
    return ret
};
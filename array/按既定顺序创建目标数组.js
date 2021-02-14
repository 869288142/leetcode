/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums = [0,1,2,3,4], index = [0,1,2,2,1]) {
    let ret = []
    for(let i = 0; i < nums.length; i++) {
        ret.splice(index[i], 0, nums[i])
    }
    return ret
};
/**
 * 
 * @param {*} nums 
 * @param {*} index 
 * 自行实现移动数组
 */

var createTargetArray = function(nums = [0,1,2,3,4], index = [0,1,2,2,1]) {
    let ret = []
    let tail = -1 
    for(let i = 0; i < nums.length; i++) {
        ++tail
        for(let j = tail ; j > index[i]; j--) {
            ret[j] = ret[j - 1]
        }
        ret[index[i]] = nums[i]
        console.log(ret);
    }
    return ret
};

console.log(createTargetArray());
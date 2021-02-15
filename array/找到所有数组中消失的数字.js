/**
 * @param {number[]} nums
 * @return {number[]}
 * 模拟
 * 时间复杂度O2n
 * 空间复杂度Ounique n
 */
var findDisappearedNumbers = function(nums = [4,3,2,7,8,2,3,1]) {
    let map = new Map();
    let n = nums.length
    let ret = []
    for(let i = 0; i < n; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
    }

    for( let i = 1; i <= n; i++) {
        if(!map.get(i)) {
            ret.push(i)
        }
    }
    return ret
};
/**
 * 
 * @param {*} nums
 * 可以进一步优化，只要出现的数字记录一次即可，不需要实际次数 
 */
var findDisappearedNumbers = function(nums = [4,3,2,7,8,2,3,1]) {
    let map = new Map();
    let n = nums.length
    let ret = []
    for(let i = 0; i < n; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
    }

    for( let i = 1; i <= n; i++) {
        if(!map.get(i)) {
            ret.push(i)
        }
    }
    return ret
};

/**
 * 
 * @param {*} nums
 * 将元素交换值对应的位置，不符合的则为缺失的 
 */

var findDisappearedNumbers = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == i + 1) {
            i++;
            continue;
        }
        const idealIdx = nums[i] - 1;
        if (nums[i] == nums[idealIdx]) {
            i++;
            continue;
        }
        [nums[idealIdx], nums[i]] = [nums[i], nums[idealIdx]];
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {        
            res.push(i+1);
        }   
    }
    return res;
};



console.log(findDisappearedNumbers());
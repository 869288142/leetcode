/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums = [1, 2, 2, 3, 1]) {

    // 找出最大
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 0
        } else {
            hash[nums[i]]++
        }
    }
    let maxC = 0
    let max = 0
    let maxArr = new Set()
    for(let [val ,count] of Object.entries(hash)) {
        if(count > maxC) {
            maxC = count
            max = val
        }
    }
    maxArr.add(max)
    for(let [val ,count] of Object.entries(hash)) {
        if(count === maxC) {
            maxArr.add(val)
        }
    }
    // 计算
    let min = 0
    maxArr.forEach((val) => {
        val = Number(val)
        if(min === 0) {
            min =  nums.lastIndexOf(val) - nums.indexOf(val)
        } 
        if(nums.lastIndexOf(val) - nums.indexOf(val) < min) {
            min = nums.lastIndexOf(val) - nums.indexOf(val)
        }
    })
    return min + 1
};

console.log(findShortestSubArray());
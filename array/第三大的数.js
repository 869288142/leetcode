/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums = [2,2,3,1]) {
    let top1 = undefined
    let top2 = undefined
    let top3 = undefined
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > top1 || typeof top1 === 'undefined') {
            top3 = top2
            top2 = top1
            top1 = nums[i]
        }if(nums[i] < top1 && (nums[i] > top2 || typeof top2 === 'undefined')) {
            top3 = top2
            top2 = nums[i]
        }if(nums[i] < top2 && (nums[i] > top3  || typeof top3 === 'undefined')) {
            top3 = nums[i]
        }
    }
    return typeof top3 !== 'undefined' ? top3 : top1
};
console.log(thirdMax());

console.log(false && true || 1);
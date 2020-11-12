/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums = [0,1,2,4,5,7]) {
    let s = 0
    let r = []
    for(let i = 0 ; i < nums.length  ; i++) {
        if(nums[i] + 1 !== (nums[i + 1])) {
            console.log(nums[s], nums[i]);
            r.push(nums[s] === nums[i] ? `${nums[s]}` : `${nums[s]}->${nums[i]}`)
            s = i + 1
        }
    }
    return r
};

console.log(summaryRanges());
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums = [1,2,3,4]) {
    let r = []
    for(let i = 0 ; i < (nums.length / 2) ; i++) {
        let [freq, val] = [nums[2*i], nums[2*i+1]]
        for(let i = 1 ; i <= freq ; i++) {
            r.push(val)
        }
    }
    return r 
};


console.log(decompressRLElist());

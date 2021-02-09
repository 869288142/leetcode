/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums =  [8,1,2,2,3]) {
    let result = []
    for(let i = 0 ; i < nums.length; i++) {
        let count = 0
        for(let j = 0; j < nums.length ; j++) {
            if(nums[i] > nums[j] && j !== i) {
                count ++
            }
        }
        result[i] = count
    }
    return result
};

var smallerNumbersThanCurrent = function(nums =  [8,1,2,2,3]) {
    let result = []
    for(let i = 0 ; i < nums.length; i++) {
        let count = 0
        for(let j = 0; j < nums.length ; j++) {
            if(nums[i] > nums[j] && j !== i) {
                count ++
            }
        }
        result[i] = count
    }
    return result
};


// 递推
var smallerNumbersThanCurrent = function(nums) {
    const cnt = new Array(101).fill(0);
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        cnt[nums[i]] += 1;
    }
    
    for (let i = 1; i <= 100; ++i) {
        cnt[i] += cnt[i - 1];
    }
    const ret = [];

    for (let i = 0; i < n; ++i) {
        ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
    }
    return ret;
};

var smallerNumbersThanCurrent = function(nums = [5,0,10,0,10,6]) {
    let sortNums = [...nums].sort((a, b) => a - b)
    let hash = {}
    let ret = []

    for(let i = nums.length - 1; i >= 0; i--) {
        hash[sortNums[i]] = i
    }

    for(let i = 0; i < nums.length ; i++) {
        ret[i] = hash[nums[i]]
    }

    return ret
};




console.log(smallerNumbersThanCurrent());
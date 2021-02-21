/**
 * @param {number[]} nums
 * @return {boolean}
 * 检查是否只有一个差异,陷进是就算只有一次递减，还需要验证修改后是否为递增
 */
var checkPossibility = function(nums = [5,7,1,8]) {
    let count = 0
    for(let i = 0; i <= nums.length - 2; i++) {
        if(!(nums[i] <= nums[i + 1])) {
            count++
            nums[i] = nums[i + 1]
            if(count > 1) {
                return false
            }
        }
    }
    for(let i = 0; i <= nums.length - 2; i++) {
        if(!(nums[i] <= nums[i + 1])) {
            return false
        }
    }
    return true
};

var checkPossibility = function(nums) {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n - 1; ++i) {
        const x = nums[i], y = nums[i + 1];
        if (x > y) {
            cnt++;
            if (cnt > 1) {
                return false;
            }
            if (i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x;
            }
        }
    }
    return true;
};


console.log(checkPossibility());
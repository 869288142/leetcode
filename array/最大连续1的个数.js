/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
};



var findMaxConsecutiveOnes = function(nums = [1,1,0,1]) {
      // 记录最大连续1的个数
      let res = 0;
      // 窗口的左边
      let l = 0;
      // 窗口的右边
      let r = 0;
      let n = nums.length;
      // 循环条件是 r < n
      while (r < n)
      {
          if (nums[r] == 1)
          {
              // 满足，则不断扩大r
              ++r;
          }
          else
          {
              // 不满足，则累加 r 和 l 更新为r
              res = Math.max(res, r-l);
              ++r;
              l = r;
          }
      }
      res = Math.max(res, r - l);

      return res;
};

var findMaxConsecutiveOnes = function(nums = [1,1,0,1,1,1]) {
    let s = 0
    let e = 0
    let max = 0
    for(let i = 0; i < nums.length;) {
        if(nums[i] === 1) {
            i++
            e = i
        }else {
            max = Math.max(e - s, max)  
            i++
            s = i
            e = i 
        }
    }
    return max
};

console.log(findMaxConsecutiveOnes());
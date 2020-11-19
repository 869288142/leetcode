/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力
var dominantIndex = function(nums = [0,0,3,2]) {
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max) 
    for(let i = 0; i < nums.length ; i++) {
        if(max < (2 * nums[i] ) &&  nums[i] !== max) {
            return - 1
        }
    }
    return maxIndex
};
// 判断第二大和第一大的大小
const dominantIndex = (nums) => {
    let one = 0;
    let oneIndex = 0;
    let two = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > one) {
        two = one;
        one = nums[i];
        oneIndex = i;
      } else if (nums[i] > two) {
        two = nums[i];
      }
    }
    return one >= two * 2 ? oneIndex : -1;
  };

console.log(dominantIndex());
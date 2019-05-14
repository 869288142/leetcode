// 给定一个非空数组，找到一个出现次数多于n/2的元素
//
/**
 * @param {number[]} nums
 * @return {number}
 */

//  思路 排序，然后找中位数
// var majorityElement = function(nums) {
//   return nums.sort((a, b) => a - b)[Number.parseInt(nums.length / 2)]
// };

// 思路 投票算法 
// 算法核心，消除不相同的票，然后在票数为0的时候设置为当前数
var majorityElement = function(nums) {
  let major = nums[0],
    count = 1
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      count++
      major = nums[i]
    } else if (major == nums[i]) {
      count++
    } else count--
  }
  return major
}
let arr = [3, 2, 3]
console.log(majorityElement(arr))

// 问题：求数组元素最大和的范围
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：
// 暴力枚举
// var maxSubArray = function(nums) {
//   let sum = -Infinity
//   for (let i = 0; i < nums.length; i++) {
//     let curSum = nums[i]
//     let maxSum = nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//       curSum += nums[j]
//       if (maxSum < curSum) {
//         maxSum = curSum
//       }
//     }
//     if (maxSum > sum) {
//       sum = maxSum
//     }
//   }
//   return sum
// }
// 动态规划
var maxSubArray = function(nums) {
  let currMax = nums[0],
    max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i])
    max = Math.max(max, currMax)
  }
  return max
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr))

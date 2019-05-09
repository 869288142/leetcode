// 两数之和
// 要求：给定一个数字，要求返回数组中两个数字之和等于该数字的下标
// 实现: 两数之和可以理解为数字的组合中两数之和等于目标值
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 从两个数出发
// 事件复杂度为O2
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }
// 从差值触发
// 时间复杂度O
var twoSum = function(nums, target) {
  var ans = []
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    console.log(map);
    if (map[target - nums[i]] !== undefined) {
      ans[0] = parseInt(map[target - nums[i]])
      ans[1] = i 
      return ans
    }
    map[nums[i]] = i
  }
}
var nums = [2, 7, 11, 15, 2],
  target = 4
let r = twoSum(nums, target)
console.log(r)

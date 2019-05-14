// 问题：给定一个整数数组，每个数字范围为1-n，找到数组中1-n的缺失元素
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路：建立一个hashmap来维护出现次数
// 时间O2
// var findDisappearedNumbers = function(nums) {
//   let arr = Array.from({length: nums.length}, (_, index) => index + 1)
//   for(let i = 0; i < nums.length; i++) {
//     let cur = nums[i]
//     let index = arr.indexOf(cur)
//     if(~index) {
//       arr.splice(index, 1)
//     }
//   }
//   return arr
// };
// 求差集
//
var findDisappearedNumbers = function(nums) {
  let ret = []
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1
    // 标记数字存在
    if (nums[val] > 0) {
      nums[val] = -nums[val]
    }
  }
  // 遍历不存在的数字
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ret.push(i + 1)
    }
  }
  return ret
}
let arr = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(arr))

// 问题： 将数组的0移动到数组末端
// 要求： 原数组操作，尽可能少的次数
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：从左往右扫描，移出0
// 在数组末端补充0
// 注意数组的长度
// var moveZeroes = function(nums) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.splice(i,1)
//       count++
//       i--
//     }
//   }
//   while(count > 0) {
//     nums.push(0)
//     count--
//   }
//   return nums
// }
var moveZeroes = function(nums) {
  let p = 0
  for(let i = 0; i < nums.length; i++) {
    nums[i] !== 0 && (nums[p++] = nums[i])
  }
  while(p < nums.length) {
    nums[p++] = 0
  }
  return nums
}
let arr = [0,0,1]
console.log(moveZeroes(arr))

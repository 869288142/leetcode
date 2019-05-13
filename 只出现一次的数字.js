// 给定一个非空数字，记录只出现一次的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let map = Object.create(null)
//   for (let i = 0; i < nums.length; i++) {
//     let cur = nums[i]
//     if (map[cur] === undefined) {
//       map[cur] = 1
//     } else {
//       map[cur]++
//     }
//   }
//   let e = Object.keys(map).filter(e => map[e] === 1).toString()
//   return parseInt(e)
// }
// var singleNumber = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let cur = nums[i]
//     if (nums.lastIndexOf(cur) === i && nums.indexOf(cur) === i) {
//       return cur
//     }
//   }
// }
// 利用疑惑偶数次等于自己的特性
var singleNumber = function(nums) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    result^=nums[i]
  }
  return result
}
let arr = [2, 2, 1, 4, 5]
console.log(singleNumber(arr))

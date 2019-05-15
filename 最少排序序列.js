// 问题： 给定一个数组，找到一个连续无序序列，使得其排序完毕后数组升序
/**
 * @param {number[]} A
 * @return {number}
 */
// 思路
// 排序之后和原数组找差集
// 时间复杂度 nlogn
// 空间复杂度 n
// var findUnsortedSubarray = function(nums) {
//   let arr = [...nums].sort((a, b) => a - b)
//   let left = 0
//   let right = nums.length
//   while (left < nums.length) {
//     console.log(arr[left], nums[left])
//     if (arr[left] === nums[left]) {
//       left++
//     } else {
//       break
//     }
//   }
//   while (right > 0) {
//     if (arr[right] === nums[right]) {
//       right--
//     } else {
//       break
//     }
//   }
//   if (left > right) {
//     return 0
//   } else {
//     return right - left + 1
//   }
// }

var findUnsortedSubarray = function(A) {
  let n = A.length,
    beg = -1,
    end = -2,
    min = A[n - 1],
    max = A[0]
  for (let i = 1; i < n; i++) {
    max = Math.max(max, A[i])
    min = Math.min(min, A[n - 1 - i])
    if (A[i] < max) end = i
    if (A[n - 1 - i] > min) beg = n - 1 - i
  }
  return end - beg + 1
}
let arr = [1, 3, 2, 4]
console.log(findUnsortedSubarray(arr))

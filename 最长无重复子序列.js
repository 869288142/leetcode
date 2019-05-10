// 问题：给定一个字符串，找出最长并且无重复元素的子串
/**
 * @param {string} s
 * @return {number}
 */
// 思路：
// 1.遍历所有子串
// 2.验证是否有重复字符串
// 暴力方法时间复杂度O3
// var lengthOfLongestSubstring = function(s) {
//   let max = 0
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0 ; j <= s.length - i ; j++) {
//       let r = s.substr(i, j)
//       let isRepeat = Array.from(new Set(r)).length !==r.length
//       if(!isRepeat && r.length > max) {
//         max = r.length
//       }
//     }
//   }
//   return max
// }
// 从左到右滑动，检测前面是否出现过
// function lengthOfLongestSubstring(s) {
//   const map = {}
//   var left = 0

//   return s.split('').reduce((max, v, i) => {
//     // 验证v是否在前面出现过
//     left = map[v] >= left ? map[v] + 1 : left
//     map[v] = i
//     return Math.max(max, i - left + 1)
//   }, 0)
// }



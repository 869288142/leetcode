// 问题：给定一个数组，下标代表和元素代表当天的股价
/**
 * @param {number[]} prices
 * @return {number}
 */
// 思路，枚举
// 时间复杂度 o2
// 空间复杂度 1
// var maxProfit = function(prices) {
//   let maxP = 0
//   for (let i = prices.length - 1; i > 0; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//       let cur = prices[i] - prices[j]
//       if (cur > maxP) {
//         maxP = cur
//       }
//     }
//   }
//   return maxP
// }

var maxProfit = function(prices) {
  let maxCur = 0,
    maxSoFar = 0
  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]))
    maxSoFar = Math.max(maxCur, maxSoFar)
  }
  return maxSoFar
}

let arr = [1, 2]
console.log(maxProfit(arr))

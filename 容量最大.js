// 给定一个数组为y轴高度，数组下标为x坐标，找出两条x轴之间面积最大
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力枚举 O2
// var maxArea = function(height) {
//   let maxArea = 0
//   for(let i = 0; i < height.length; i++) {
//     for(let j = i + 1; j < height.length; j++) {
//       let r = Math.min(height[i], height[j])
//       let curArea = r*(j-i)
//       if(curArea > maxArea) {
//         maxArea = curArea
//       }
//     }
//   }
//   return maxArea
// };
//
var maxArea = function(height) {
  let left = 0,
    right = height.length - 1
  let maxArea = 0
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    )
    if (height[left] < height[right]) left++
    else right--
  }
  return maxArea
}
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let r = maxArea(height)
console.log(r)

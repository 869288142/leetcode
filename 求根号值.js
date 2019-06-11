// 给定一个非负整数，求根号结果整数部分
/**
 * @param {number} x
 * @return {number}
 */

//  思路1
// 直接根号后取整
var mySqrt = function(x) {
  return Math.trunc(Math.sqrt(x))
}

// 思路2
function mySqrt(x) {
  let left = 1
  let right = x
  while (left <= right) {
    let mid = Math.trunc((right + left) / 2)
    if (mid == x / mid) {
      return mid
    } else if (mid < x / mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}

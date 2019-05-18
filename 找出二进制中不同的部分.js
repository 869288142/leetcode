// 给定两个整数，计算两者二进制中同位元素不同的个数

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 思路：
// 1.转换成二进制，不足补0
// 2.使用异或检验
// var hammingDistance = function(x, y) {
//   let x2 = x.toString(2)
//   let y2 = y.toString(2)
//   if(x2.length > y2.length) {
//     for(let i = y2.length; i < x2.length; i++) {
//         y2 = "0" + y2
//     }
//   }
//   if(x2.length < y2.length) {
//     for(let i = x2.length; i < y2.length; i++) {
//         x2 = "0" + x2
//     }
//   }
//   let len = Math.max(x2.length, y2.length)
//   let count = 0
//   for (let i = 0; i < len; i++) {
//     let curX = x2[i]
//     let curY = y2[i]
//     // 亦或为0则输出为0
//     console.log(curX, curY);
//     if ( Number(curX)  ^ Number(curY) === 1) {
//       count++
//     }
//   }
//   return count
// }
// 思路2找出XOR后中的
var hammingDistance = function(x, y) {
  let xor = (x ^ y).toString(2)
  let count = 0
  for(let i = 0; i < xor.length; i++) {
    if(xor[i] === "1") {
      count ++
    }
  }
  return count
}
let x = 2
let y = 1
console.log(hammingDistance(x, y))

// 问题
// 打印出1-10000 之间的所有对称数

// 暴力方法
// 遍历区间，验证是否对称
function isSym(num) {
  return num.toString() === num.toString().split("").reverse().join("")
}
function symnums(arr) {
  return arr.filter(e => isSym(e))
}

console.log(symnums([...Array(10000).keys()]));
function doCombination(arr) {
  var count = arr.length - 1 //数组长度(从0开始)
  var tmp = []
  var totalArr = [] // 总数组

  return doCombinationCallback(arr, 0) //从第一个开始
  function doCombinationCallback(arr, curr_index) {
    for (val of arr[curr_index]) {
      tmp[curr_index] = val //以curr_index为索引，加入数组
      //当前循环下标小于数组总长度，则需要继续调用方法
      if (curr_index < count) {
        doCombinationCallback(arr, curr_index + 1) //继续调用
      } else {
        totalArr.push(tmp) //(直接给push进去，push进去的不是值，而是值的地址)
      }
      //js  对象都是 地址引用(引用关系)，每次都需要重新初始化，否则 totalArr的数据都会是最后一次的 tmp 数据；
      oldTmp = tmp
      tmp = []
      for (index of oldTmp) {
        tmp.push(index)
      }
    }
    return totalArr
  }

}
//测试数组
var arr = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd'], ['成功', '失败']]

console.log(doCombination(arr))
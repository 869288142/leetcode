/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target = [1,3], n = 3) {
    let ret = []

    for(let i = 0; i < n; i++){
        if(target[i] === i + 1) {
            ret.push('Push')
        }else {
            ret.push('Push')
            ret.push('Pop')
        }
    }

    return  ret
};

var buildArray = function(target, n) {
    let list = []
    let res = []
    for(let i = 0; i < n; i++){
      if(list.length === target.length) return res
      list.push(i + 1)
      res.push('Push')
      // 当list此时最后个元素和target对应位置的数不相等时, 说明执行pop操作了
      if(list[list.length - 1] !== target[list.length - 1]){
        res.push('Pop')
        list.pop()
      }
    }
    return res
  };
  

console.log(buildArray());
// 给定一个整数数组，生成树

let arr = [1, 2, 3, 4, 5,6,7]

class Node {
  constructor(val) {
    this.value = val
    this.left = null 
    this.right = null
  }
}

function generatorTree (arr, root = 0) {
  if(root >= arr.length) return null
  let node = new Node(arr[root])
  node.left = generatorTree(arr, 2 * root + 1)
  node.right = generatorTree(arr, 2 * root + 2)
  return node
}

console.log(generatorTree(arr));
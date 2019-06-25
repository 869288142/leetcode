// 给定一颗二叉树，按照节点层次返回一个二维数组
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//  思路
// 使用BFS，结合depth来填充数组
var levelOrderBottom = function(root) {
  var bottumUpTraversal = [];
  var queue = [{ node: root, depth: 0 }];
  while (queue.length != 0) {
    var current = queue.shift();
    if (current && current.node) {
        var currentDepth = current.depth;
        var currentNode = current.node;
        if (bottumUpTraversal[currentDepth]) {
          bottumUpTraversal[currentDepth].push(currentNode.val);  
        } else {
          bottumUpTraversal[currentDepth] = [currentNode.val]; 
        }
        if (currentNode.left) {
          queue.push({ node: currentNode.left, depth: currentDepth + 1 });   
        }
        if (currentNode.right) {
          queue.push({ node: currentNode.right, depth: currentDepth + 1 });
        }    
    }
  }
  
  return bottumUpTraversal.reverse();
};


// 思路2
var levelOrderBottom = function(root) {
  if(!root) {
    return []
  }
  let queue = []
  let result = []
  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length
    let temp = []
    for(let i = 0; i < len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if (node.left != null) {
        queue.push(node.left)
      }
      if (node.right != null) {
        queue.push(node.right)
      }
    }
    result.push(temp)
  }
  return result.reverse()
}
// 给定一颗二叉树，反转左右节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// DFS递归版本
var invertTree = function(root) {
  if(root === null) {
    return null
  }
  let tmp = root.right
  root.right = invertTree(root.left)
  root.left = invertTree(tmp)
  return root
};

// DFS非递归版本
var invertTree = function(root) {
  let stack = []
  stack.push(root)
  while( stack.length > 0) {
    let curNode = stack.pop()
    if(curNode !== null) {
      let tmp = curNode.right
      curNode.right = curNode.left
      curNode.left = tmp
      if(curNode.left !== null) {
        stack.push(curNode.left)
      }
      if(curNode.right !== null) {
        stack.push(curNode.right)
      }
    }
  }
  return root
};
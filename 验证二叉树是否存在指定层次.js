// 给定一颗二叉树，验证是否存在指定路径上的和为给定数值
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) {
    return false
  }
  sum -= root.val
  if( !root.left && !root.right & sum === 0) {
    return true
  }
  return hasPathSum(root.left, sum) + hasPathSum(root.right, sum)
};
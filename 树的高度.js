// 问题：
// 给定一个数值，计算其高度
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
function maxDepth_dfs(root) {
  return dfs(root)
}
function dfs(root) {
  if (root == null) return 0
  let depth_l = 0,
    depth_r = 0
  if (root.left != null) depth_l = dfs(root.left)
  if (root.right != null) depth_r = dfs(root.right)
  return Math.max(depth_l, depth_r) + 1
}

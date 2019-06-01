// 给定一颗二分搜索树，将其转换为一个树
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
var convertBST = function(root) {
  convert(root, 0)
  return root;
};
function convert(root, val) {
  if(root == null) return val;
  let right = convert(root.right, val);
  let left = convert(root.left, root.val + right);
  root.val = root.val + right;
  return left;
}
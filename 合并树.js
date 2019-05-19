// 问题：
// 1.给定两颗，将树节点进行合并
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// 思路：1.遍历树，对节点部分进行合并，合并到t1树上
// var mergeTrees = function(t1, t2) {
//   if(t1 && t2) {
//     t1.val+= t2.val
//     t1.left = mergeTrees(t1.left, t2.left)
//     t1.right = mergeTrees(t1.right, t2.right)
//   }
//   if(!t1 && t2) {
//     t1 = new TreeNode(t2.val)
//     t1.left = mergeTrees(null, t2.left)
//     t1.right = mergeTrees(null, t2.right)
//   }
//   if(t1 && !t2) {
//     return t1
//   }
//   return t1
// };
// 思路2 保存到新树上
var mergeTrees = function(t1, t2) {
  if(!t2 && !t1) {
    return null
  }
  let node = new TreeNode(0)
  if(t1 && t2) {
    node.val = (t1.val + t2.val)
    node.left = mergeTrees(t1.left, t2.left)
    node.right = mergeTrees(t1.right, t2.right)
  }
  if(!t1 && t2) {
    node.val = t2.val
    node.left = mergeTrees(null, t2.left)
    node.right = mergeTrees(null, t2.right)
  }
  if(t1 && !t2) {
    node.val = t1.val
    node.left = mergeTrees(t1.left, null)
    node.right = mergeTrees(t1.right, null)
  }
  return node
}
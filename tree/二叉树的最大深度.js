/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 自底向上
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 自顶向下
 */
var answer = 0
var maxDepth = function(root, depth = 1) {
    if (root == null) {
        return answer;
    }

    if (root.left === null && root.right === null) {
        answer = Math.max(answer, depth);
    }

    maxDepth(root.left, depth + 1);
    maxDepth(root.right, depth + 1);
};
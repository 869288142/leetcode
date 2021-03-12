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
 * @return {number[][]}
 */
var levelOrder = function(root, ret = []) {
    if(root === null) {
        return ret
    }
    let queue = []
    queue.push(root) 
    while(queue.length) {
        let temp = []
        let size = queue.length
        for(let i = 0; i < size; i++) {
            let cur =  queue.shift()
            temp.push(cur.val)
            if(cur.left !== null) {
                queue.push(cur.left)
            }
            if(cur.right !== null) {
                queue.push(cur.right)
            }
        }
        ret.push(temp)
    }
    return ret
};
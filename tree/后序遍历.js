// 中序遍历 :
// 先遍历左子树，然后遍历右子树，最后访问树的根节点

var postorderTraversal = function(root, ret = []) {
    if(!root) {
        return ret
    }
    // 遍历左节点
    postorderTraversal(root.left, ret)
    // 遍历右节点
    postorderTraversal(root.right, ret)
    // 遍历根节点
    ret.push(root.val)
    
    return ret
};
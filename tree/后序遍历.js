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

var postorderTraversal = function(root, ret = []) {
    if (root == null) {
        return ret;
    }
    let stack1 = []
    let stack2 = [];

    stack1.push(root);

    while (!(stack1.length === 0)) {
        let node = stack1.pop();
        stack2.push(node.val);
        if (node.left !== null) {
            stack1.push(node.left);
        }
        if (node.right !== null) {
            stack1.push(node.right);
        }
    }
    while (!(stack2.length === 0)) {
        ret.push(stack2.pop())
    }

    return ret
};
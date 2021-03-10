// 中序遍历 :
// 首先先遍历左子树，然后访问根节点，然后遍历右子树。

var inorderTraversal = function(root, ret = []) {
    if(!root) {
        return ret
    }
    // 遍历左节点
    inorderTraversal(root.left, ret)
    // 遍历根节点
    ret.push(root.val)
    // 遍历右节点
    inorderTraversal(root.right, ret)
    
    return ret
};

var inorderTraversal = function(root, ret = []) {

    if(!root) {
        return ret
    }

    let stack = []
    
    let cur = root

    while(stack.length !== 0 || cur !== null) {
        
        while(cur !== null) {
            stack.push(cur)
            cur = cur.left
        }

        let node = stack.pop()
        ret.push(node.val)

        if(node.right !== null) {
            cur = node.right
        }
    }

    return ret
};
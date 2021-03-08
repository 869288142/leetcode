// 前序遍历 :
// 首先访问根节点，然后遍历左子树，最后遍历右子树。

// 递归实现
// 时间复杂度On
// 空间复杂度On
var preorderTraversal = function(root, ret = []) {

    if(!root) {
        return ret
    }
    // 遍历根节点
    ret.push(root.val)
    // 遍历左节点
    preorderTraversal(root.left, ret)
    // 遍历右节点
    preorderTraversal(root.right, ret)

    return ret
};

// 迭代实现
// 时间复杂度On
// 空间复杂度On


var preorderTraversal = function(root, ret = []) {

    if(!root) {
        return ret
    }

    let stack = []
    stack.push(root)

    while(stack.length !== 0) {
        let node = stack.pop();
        
		if (node.right !== null) {
			stack.push(node.right);
		}

		if (node.left !== null) {
			stack.push(node.left);
		}
    }

    return ret
};
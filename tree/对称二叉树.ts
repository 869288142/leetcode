const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function(root: TreeNode | null): boolean {
    return check(root, root);
};


const check = (u: TreeNode | null, v: TreeNode | null): boolean => {
    const q: (TreeNode | null)[] = [];
    q.push(u),q.push(v);

    while (q.length) {
        u = q.shift()!;
        v = q.shift()!;

        if (!u && !v) continue;
        if ((!u || !v) || (u.val !== v.val)) return false;

        q.push(u.left); 
        q.push(v.right);

        q.push(u.right); 
        q.push(v.left);
    }
    return true;
}
var isSymmetric = function(root: TreeNode | null): boolean {
    return check(root, root);
};

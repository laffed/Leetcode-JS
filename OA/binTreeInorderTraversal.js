/*
94. Binary Tree Inorder Traversal
Medium

2797

120

Add to List

Share
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

function inorderTrav(node, res = []) {
    if (node === null) return [];

    if (node.left !== null) {
        inorderTrav(node.left, res);
    }

    res.push(node.val);

    if (node.right !== null) {
        inorderTrav(node.right, res);
    }

    return res;
}

//iteratively

function inorderTrav(node) {
    const stack = [];
    const res = [];

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
}

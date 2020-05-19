/*
145. Binary Tree Postorder Traversal
Hard

1550

82

Add to List

Share
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

//iteratively

function postOrderTrav(node) {
    const stack = [];
    let curr = node;
    const res = [];

    while (true) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            if (!stack.length) {
                break;
            }
            curr = stack[stack.length-1].right;
            if (!curr) {
                let last = null;
                while (stack.length && stack[stack.length-1].right === last) {
                    last = stack.pop();
                    res.push(last.val);
                }
            }
        }
    }
    return res;
}

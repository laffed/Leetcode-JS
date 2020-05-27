/*
993. Cousins in Binary Tree
Easy

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
*/

/*
Definition for a binary tree node.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
*/
//BST search every layer check for false condition first
function isCousins(root, x, y) {
    let q = [root];

    while (q.length) {
        let newQ = [];
        let foundX = false;
        let foundY = false;
        while (q.length) {
            let node = q.shift();

            //check false condition
            if (node.left && node.right) {
                if ((node.left.val === x || node.right.val === x) &&
                    (node.left.val === y || node.right.val === y)) {
                    return false;
                }
            }

            if (node.left) {
                newQ.push(node.left);
                if (node.left.val === x) {
                    foundX = true;
                } else if (node.left.val === y) {
                    foundY = true;
                }
            }

            if (node.right) {
                newQ.push(node.right);
                if (node.right.val === x) {
                    foundX = true;
                } else if (node.right.val === y) {
                    founxY = true;
                }
            }
        }
        q = newQ;
        if (foundX && foundY) {
            return true;
        }
    }
    return false;
}

/*
103. Binary Tree Zigzag Level Order Traversal
Medium

1866

98

Add to List

Share
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/*** First Approach ***/
//two stack approach alternating order of push

function zigzagLevelOrder(root) {
    if (!root) return [];
    const result = [];
    let s1 = [root];
    let s2 = [];
    let flag = true;
    let level = [];

    while (s1.length) {
        let node = s1.pop();
        let left = node.left;
        let right = node.right;

        level.push(node.val);

        if (flag) {
            if (left) s2.push(left);
            if (right) s2.push(right);
        } else {
            if (right) s2.push(right);
            if (left) s2.push(left);
        }

        if (s1.length === 0) {
            result.push(level);
            s1 = s2;
            s2 = [];
            level = [];
            flag = !flag;
        }
    }
    return result;
}

//Second Approach

function zigzagLevelOrder2(root) {
    let res = [];
    helper(root, 0, res);
    return res;
}

function helper(node, level, res) {
    if (!node) return;

    if (res[level] == null) {
        res.push([]);
    }

    if (level % 2 === 0) {
        res[level].push(node.val);
    } else {
        res[level].unshift(node.val);
    }

    helper(node.left, level + 1, res);
    helper(node.right, level + 1, res);
}

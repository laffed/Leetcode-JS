/*
 Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
*/

function isSubtree(s,t) {
    return traverse(s,t);
}

function traverse(s,t) {
    //consider curr s node as root. if not, consider s right and left children
    return s !== null && (checkEquality(s,t) || traverse(s.left, t) || traverse(s.right, t));
}

function checkEquality(x, y) {
    if (x === null && y === null) {
        return true;
    } 
    if (x === null || y === null) {
        return false;
    }
    //if nodes are equal in val consider x node as comparative root
    return x.val === y.val && checkEquality(x.left, y.left) && checkEquality(x.right, y.right);
}

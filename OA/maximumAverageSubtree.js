/*
1120. Maximum Average Subtree
Medium

Given the root of a binary tree, find the maximum average value of any subtree of that tree.

(A subtree of a tree is any node of that tree plus all its descendants. The average value of a tree is the sum of its values, divided by the number of nodes.)

Example 1:
Input: [5,6,1]
Output: 6.00000
Explanation: 
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.
 
Note:
The number of nodes in the tree is between 1 and 5000.
Each node will have a value between 0 and 100000.
Answers will be accepted as correct if they are within 10^-5 of the correct answer.
*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/*
Idea:
Recurse down each branch until base case. 
Each node will keep track of the current sum and number of children 
coming from below. 
*/
function maximumAverageSubtree(root) {
    let max = -1;

    function helper(node) {
        //base case
        if (!node) {
            //return [sum, count] to leaf nodes
            return [0,0]
        }

        const L = helper(node.left);
        const R = helper(node.right);

        //update max
        let potential = ((node.val + L[0] + R[0])/(1 + L[1] + R[1]));
        max = Math.max(max, potential);

        //keep track of current sum and count contribution if node exist
        return [(node.value + L[0] + R[0]), (1 + L[1] + R[1])];
    }

    helper(root);
    return max;
}




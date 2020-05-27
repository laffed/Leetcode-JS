/*
 Given an N-ary tree, find the subtree with the maximum average. Return the root of the subtree.
A subtree of a tree is the node which have at least 1 child plus all its descendants. The average value of a subtree is the sum of its values, divided by the number of nodes.

Example 1:

Input:
		 20
	   /   \
	 12     18
  /  |  \   / \
11   2   3 15  8

Output: 18
Explanation:
There are 3 nodes which have children in this tree:
12 => (11 + 2 + 3 + 12) / 4 = 7
18 => (18 + 15 + 8) / 3 = 13.67
20 => (12 + 11 + 2 + 3 + 18 + 15 + 8 + 20) / 8 = 11.125

18 has the maximum average so output 18.*/

class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
        this.totalVal = val;
        this.totalNum = 1;
    }
}

let n4 = new Node(11, []);
let n5 = new Node(2, []);
let n6 = new Node(3, []);
let n7 = new Node(15, []);
let n8 = new Node(8, []);
let n2 = new Node(12, [n4, n5, n6]);
let n3 = new Node(18, [n7, n8]);
let n1 = new Node(20, [n2, n3]);

function subtreeMaximumAvg() {
    let max = -1;
    let maxNode = -1; 
    function helper(node) {
        if (!node) {
            return [0,0];
        }
        let count = 1;
        let sum = node.val;
        for (let child in node.children) {
            let curr = helper(node.children[child]);
            sum += curr[0];
            count += curr[1];
        }
        let avg = sum / count;
        if (count > 1 && avg > max) {
            max = avg;
            maxNode = node
        }
        
        return [sum, count];
    }

    helper(root);
    return maxNode;
}

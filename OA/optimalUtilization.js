/*
  Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. Return a list of ids of selected elements. If no pair is possible, return an empty list.
  
Example 1:
Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7
Output: [[2, 1]]
*/

//DISLAIMER: function only return the most optimal value

function optimalUtilization(a, b, target) {
    let potential = [];
    for (let i = 0; i < a.length; i++) {
        for (let j =0; j < b.length; j++) {
            let sum = a[i][1] + b[j][1];
            let aId = a[i][0];
            let bId = b[j][0];
            if (sum <= target) {
                potential.push([aId, bId, sum]);
            }
        }
    }
    potential.sort((a,b) => b[2] - a[2]);
    const result = potential[0].slice(0,2);
    return result;
}

let a = [[1, 2], [2, 4], [3, 6]];
let b = [[1, 2]];

console.log(optimalUtilization(a, b, 7));


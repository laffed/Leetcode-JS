/*
  Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. Return a list of ids of selected elements. If no pair is possible, return an empty list.
  
Example 1:
Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7
Output: [[2, 1]]
*/

//credit: popeye_the_sailort

function optimalUtilization(a, b, tar) {
    //sort both inputs
    a.sort((a,b) => a[1] - b[1]);
    b.sort((a,b) => a[1] - b[1]);

    const result = [];
    let max = Number.NEGATIVE_INFINITY;
    const m = a.length;
    const n = b.length;

    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        let sum = a[i][1] + b[j][1];
        if (sum > tar) {
            j--;
        } else {
            if (max <= sum) {
                if (max < sum) {
                    //update max and delete prev result
                    max = sum;
                    result.length = 0;
                }
                result.push([a[i][0], b[j][0]]);
                //check next lower j if the sum is the same
                //if so, these ids need to be included in the result
                let index = j - 1
                while (index >= 0 && b[index][1] === b[index+1][1]) {
                    result.push([a[i][0], b[index][0]]);
                    index -= 1;
                }
            }
            i++;
        }
    }
    return result;
}
let a = [[1, 2], [2, 4], [3, 6]];
let b = [[1, 2]];
let a2 = [[1, 3], [2, 5], [3, 7], [4, 10]];
let b2 = [[1, 2], [2, 3], [3, 4], [4, 5]];
console.log(optimalUtilization(a, b, 7));
console.log(optimalUtilization(a2,b2, 10));

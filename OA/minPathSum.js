/*
iven a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

//using dynamic programming to find the min distance so far

function minPathSum(grid) {
    const dpArr = [];
    for (let i = 0; i < grid.lengh; i++) {
        const row = [];
        for (let j = 0; j < grid[i].length; j++) {
            row[j] = j;
        }
        dpArr.push(row);
    }
    dpArr[0][0] = grid[0][0];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                continue;
            } else if (i === 0) {
                dpArr[i][j] = dpArr[i][j-1] + grid[i][j];
            } else if (j === 0) {
                dpArr[i][j] = dpArr[i-1][j] + grid[i][j];
            } else {
                dpArr[i][j] = grid[i][j] + Math.min(dpArr[i-1][j], dpArr[i][j-1]);
            }
        }
    }
    return dpArr[grid.length-1][grid[0].length-1];
}



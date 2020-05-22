/*
120. Triangle
Medium

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

//O(n**2) Time, O(n) space solution
//DFS recursive

const input = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

function triangle(tri) {
    let min = dfs(0, 0, tri, 0, 0);
    return min;
}

function dfs(i, j, grid, depth, sum) {
    if (depth > grid.length - 1) {
        return sum;
    }

    sum += grid[i][j];
    return Math.min(dfs(i+1, j, grid, depth+1, sum), dfs(i+1, j+1, grid, depth+1, sum));
}

console.log(triangle(input));

//O(n) time O(1) space solution
//DP

function triangleDP(tri) {
    let start = tri.length - 2;
    for (let i = start; i >= 0; i--) {
        for (let j = 0; j < tri[i].length; j++) {
            tri[i][j] += Math.min(tri[i+1][j], tri[i+1][j+1]);
        }
    }
    return tri[0][0];
}

console.log(triangleDP(input));

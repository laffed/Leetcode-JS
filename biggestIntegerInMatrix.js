/*
You are given a board of N rows and M columns. Each field of the board contains a single digit (0−9).

You want to find a path consisting of four neighboring fields. Two fields are neighboring if they share a common side. Also, the fields in your path should be distinct (you can't visit the same field twice).

The four digits of your path, in the order in which you visit them, create an integer. What is the biggest integer that you can achieve in this way?

Write a function

class Solution { public int solution(int[][] Board); }

that, given the board represented as a matrix of integers consisting of N rows and M columns, returns the biggest integer that you can achieve when concatenating the values in a path of length four.

Examples:
[9,1,1,0,7],
[1,0,2,1,0],
[1,9,1,1,0]
Expected: 9121
*/

//dfs from each max first val;

const test1 = [
  [9,1,1,0,7],
  [1,0,2,1,0],
  [1,9,1,1,0]
];

var maxInt;
function biggestIntInMatrix(grid) {
    maxInt = 0;
    let maxGridVal = 0; 
    const stack = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > maxGridVal) {
                maxGridVal = grid[i][j];
                stack.length = 0;
                stack.push([i,j]);
            } else if (grid[i][j] === maxGridVal) {
                stack.push([i,j]);
            }
        }
    }

    while (stack.length) {
        let [i,j] = stack.pop();
        dfs(i, j, grid, null, null, 0);
    }
    return maxInt;
}

function dfs(i, j, grid, visited = null, prev = null, count) {
    if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length || 
        count === 4 ||
        (visited !== null && visited.has(`${i},${j}`))
    ) {
        return;
    }

    const key = `${i},${j}`;
    if (visited === null) {
        visited = new Set();
    }
    visited.add(key);
    
    const currNum = grid[i][j];
    const newInt = prev === null ? currNum : parseInt(`${prev}${currNum}`);
    const newIntString = newInt.toString();

    //global variable
    maxInt = Math.max(maxInt, newInt);

    const dir = [[1,0],[-1,0],[0,1],[0,-1]];
    for (const d of dir) {
        const x = i + d[0];
        const y = j + d[1];
        dfs(x, y, grid,  visited, newIntString, count + 1);
    }
    visited.delete(key);
}

console.log(biggestIntInMatrix(test1));
